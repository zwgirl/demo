import java.io.*;
import java.text.*;
import java.util.*;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.net.URLDecoder;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.xml.transform.*;
import javax.xml.transform.dom.DOMResult;
import javax.xml.transform.stream.*;
import javax.xml.parsers.SAXParserFactory;
import javax.xml.parsers.SAXParser;
import org.apache.batik.dom.svg.SVGDOMImplementation;
import org.apache.batik.transcoder.image.JPEGTranscoder;
import org.apache.batik.transcoder.image.PNGTranscoder;
import org.apache.batik.transcoder.TranscoderInput;
import org.apache.batik.transcoder.TranscoderOutput;
import org.apache.batik.dom.GenericDOMImplementation;
import org.w3c.dom.Document;
import org.w3c.dom.DocumentType;
import org.w3c.dom.DOMImplementation;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.svg.SVGDocument;
import org.xml.sax.helpers.XMLReaderFactory;
import org.xml.sax.XMLReader;
import org.xml.sax.InputSource;

import org.apache.xalan.serialize.Serializer;
import org.apache.xalan.serialize.SerializerFactory;
import org.apache.xalan.templates.OutputProperties;

public class Transform extends HttpServlet {

    ResourceBundle rb = ResourceBundle.getBundle("TransformFileStrings");

	private Templates xslTemplate;
    private String retrievedXML;
	private String callLetters;
	private String cityName;
	private Document svgDoc;
	private	DOMResult	transformDOM;

	public void init(ServletConfig config) throws ServletException
	{
		String path;
		String title;
		
        path = rb.getString("pathName");
		title = rb.getString( "xslFileName" );
		super.init(config);
		try
		{
			//for storing a compiled and resuseable style sheet
			TransformerFactory factory = TransformerFactory.newInstance();
			xslTemplate = factory.newTemplates(new StreamSource(path + title));
		}
		catch (Exception ex)
		{
			xslTemplate = null;
		}
	}

	public void errorExit( PrintWriter out, String msg )
	{
		if (out != null)
		{
			out.println("<html><head><title>Error</title></head>");
			out.println("<body bgcolor=\"#ffffff\"><h2>Error</h2>");
			out.println("<p>" + msg + "</p>");
			out.println("</body></html>");
		}
	}


	public void errorExit( HttpServletResponse response, String msg )
	{
        response.setContentType("text/html");
        try {
			PrintWriter out = response.getWriter();
        	out.println("<html>\n<head>\n");
        	out.println("<title> Error </title>");
        	out.println("</head>");
        	out.println("<body bgcolor=\"white\">\n<pre>");
			out.println( msg );
			out.println("</pre></body>\n</html>");
		}
		catch (Exception e)
		{
			System.err.println("Cannot open response writer");
		}
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
		throws ServletException, IOException
	{
		StreamSource			xmlString;
		ByteArrayOutputStream	byteOutStream;
		StreamResult			transformOutput;
		String					finalResult;
		boolean					downloadOK;
		
		{
			String temp;
			int pos;
			temp = request.getParameter( "call_id" );
			pos = temp.indexOf("|");
			callLetters = temp.substring( 0, pos );
			cityName = temp.substring( pos+1 );
		}
		
		downloadOK = getOMFReports( request );
		if (downloadOK)
		{
			try
    		{
				xmlString = new StreamSource(
					new StringReader( retrievedXML )
				);
      			Transformer transformer = xslTemplate.newTransformer();
       			transformer.setOutputProperty("encoding", "UTF-8");
/*
      DocumentBuilderFactory dfactory = DocumentBuilderFactory.newInstance();
      DocumentBuilder docBuilder = dfactory.newDocumentBuilder();
      org.w3c.dom.Document outNode = docBuilder.newDocument();
*/
				DOMImplementation impl = SVGDOMImplementation.getDOMImplementation();
				String svgNS = SVGDOMImplementation.SVG_NAMESPACE_URI;

		        svgDoc = impl.createDocument( svgNS, "svg", null);           				
System.err.println("About to create DOMResult");
				transformDOM = new DOMResult(
				svgDoc.getDocumentElement() );
System.err.println("About to transform");
     			transformer.transform(
        			xmlString,
        			transformDOM
				);

				if ( request.getParameter("imgtype").equals("JPG") )
				{
					emitJPG( request, response );
				}
	   		}
    		catch (Exception e)
    		{
System.err.println("Inner catch");
				e.printStackTrace();
      			errorExit( response, e.getMessage() );
    		}
  		}
		else
		{
System.err.println("Outer if");
			errorExit( response, retrievedXML );
		}
	}

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
		throws IOException, ServletException
	{
		doPost( request, response );
	}

	private boolean getOMFReports( HttpServletRequest request )
	{
    	URL url;
    	URLConnection urlConn;
    	DataOutputStream printout;
    	DataInputStream input;
		boolean success;

	    // URL of CGI-Bin script.
		try
		{
			url = new URL( "http://zowie.metnet.navy.mil/cgi-bin/oleg/get-obs");
 
    		// URL connection channel.
    		urlConn = url.openConnection();

    		// Let the run-time system (RTS) know that we want input.
    		urlConn.setDoInput (true);

    		// Let the RTS know that we want to do output.
    		urlConn.setDoOutput (true);

    		// No caching, we want the real thing.
    		urlConn.setUseCaches (false);

    		// Specify the content type.
    		urlConn.setRequestProperty("Content-Type",
				"application/x-www-form-urlencoded");

			// Pure data without user intervention
  			urlConn.setAllowUserInteraction(false);

    		// Send POST output.
    		printout = new DataOutputStream (urlConn.getOutputStream ());

    		String content = "do-retrieve=Retrieve&call_id=" +
				URLEncoder.encode( callLetters );
    		printout.writeBytes (content);
    		printout.flush ();
    		printout.close ();

    		// Get response data.
    		input = new DataInputStream(urlConn.getInputStream ());

    		StringBuffer strBuf = new StringBuffer(2048);
			String str;
    		while (null != ((str = input.readLine())))
 			{
 				strBuf.append(str);
				strBuf.append("\n");
 			}
			retrievedXML = strBuf.toString();
			if (retrievedXML.startsWith("<!DOCTYPE"))
			{
				success = true;
			}
			else
			{
				retrievedXML = "No reports available for " +
					cityName + ".";
				success = false;
			}
    		input.close ();
		}
		catch (Exception e)
		{
			if (e.getMessage() != null)
			{
				success = false;
			}
			else
			{
				success = true;
			}
		}
		return success;
	}

	public void emitJPG ( HttpServletRequest request,
		HttpServletResponse response )
	{		
        JPEGTranscoder t = new JPEGTranscoder();
		response.setContentType("text/plain");
		response.setHeader("Cache-Control",
			"no-cache, post-check=0, pre-check=0");
		String agent = request.getHeader("User-Agent").toLowerCase();
		// netscape chokes on Pragma no-cahe so only send it to explorer
		if (agent.indexOf("explorer") > -1){
		  response.setHeader("Pragma", "no-cache");
		}
		response.setHeader("Expires", "Thu, 01 Dec 1994 16:00:00 GMT");

		// set the transcoding hints      
		t.addTranscodingHint(JPEGTranscoder.KEY_QUALITY,
                             new Float(.8));

try {
  Serializer serializer = SerializerFactory.getSerializer
                               (OutputProperties.getDefaultMethodProperties("xml"));
  serializer.setOutputStream(System.err);
  serializer.asDOMSerializer().serialize( svgDoc );
}
catch (Exception e)
{
	System.err.println("Serialize catch");
	e.printStackTrace();
}

		// create the transcoder input
        TranscoderInput input = new TranscoderInput( svgDoc );
System.err.println("Input doc is " + input.getDocument());
		try {
	        TranscoderOutput output =
				new TranscoderOutput(response.getWriter());
System.err.println("output is " + output );
			// write the image
        	t.transcode(input, output);
		}
		catch (Exception e)
		{
System.err.println("Emit JPG catch");
			e.printStackTrace();
		}
	}
 
 }