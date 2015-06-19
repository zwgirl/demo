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
import javax.xml.transform.stream.StreamSource;
import javax.xml.transform.stream.StreamResult;

import org.apache.batik.transcoder.image.JPEGTranscoder;
import org.apache.batik.transcoder.image.PNGTranscoder;
import org.apache.batik.transcoder.TranscoderInput;
import org.apache.batik.transcoder.TranscoderOutput;

import org.xml.sax.helpers.XMLReaderFactory;

import org.apache.xalan.templates.OutputProperties;

public class Transform extends HttpServlet {

    ResourceBundle rb =
		ResourceBundle.getBundle("TransformFileStrings");

	private Templates xslTemplate;

	private int useCount = 2;

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

	public void errorExit( HttpServletRequest request,
		HttpServletResponse response, String msg )
	{
		try {
			if (request.getParameter( "imgtype" ).equals( "SVG" ))
			{
        		response.setContentType("image/svg+xml");
 				String title = rb.getString( "svgErrFile" );
    			BufferedReader input =
					new BufferedReader(new FileReader(title));
				String str;
    			while (null != ((str = input.readLine())))
 				{
 					response.getWriter().write( str );
 				}
    			input.close();
				response.getWriter().close();
			}
			else
			{
        		response.setContentType("image/jpeg");
 				String title = rb.getString( "imgErrFile" );
				byte [] buffer = new byte[8192];

    			FileInputStream input =
					new FileInputStream( title );
    			while (input.read( buffer ) >= 0)
 				{
 					response.getOutputStream().write( buffer );
 				}
    			input.close();
				response.getOutputStream().close();
			}
		}
		catch (Exception e)
		{
			if (e.getMessage() != null)
			{
				log( "Cannot output error image" );
				log( e.getMessage() );
			}
		}
	}

	public void doPost(HttpServletRequest request,
		HttpServletResponse response)
		throws ServletException, IOException
	{
		StreamSource	xmlInput;
		StreamResult	svgOutput;
		StringWriter	svgWriter;
		String			svgString;
		String 			stationID = "";
		String			cityName = "";
		String			timeZoneString ="";
		String			retrievedXML = "";

		/* If init failed, exit immediately */
		if (xslTemplate == null)
		{
			errorExit( request, response, "No template");
			return;
		}

		try
		{
			/* Split out information from the parameter */
			String temp;
			temp = request.getParameter( "call_id" );
			StringTokenizer info = new StringTokenizer( temp, "|" );
			stationID = info.nextToken();
			cityName = info.nextToken();
			timeZoneString = info.nextToken();
		}
		catch (Exception e)
		{
			errorExit( request, response, "Can't split parameters" );
		}
		
		/*
		 * The OMF source that we are using returns
		 * an SVG document beginning with a &lt;!DOCTYPE if there
		 * is no error, or an HTML form document if it got
		 * invalid input.
		 */
		retrievedXML = getFakeOMFReports( request, cityName,
			stationID );
		if (retrievedXML != null && retrievedXML.startsWith("<!DOC"))
		{
			try
    		{
				xmlInput = new StreamSource(
					new StringReader( retrievedXML )
				);
      			Transformer transformer = xslTemplate.newTransformer();
       			transformer.setOutputProperty("encoding", "UTF-8");
    			transformer.setParameter("timeZone", timeZoneString);
				
				/*
				 * Transform the XML to SVG as one long
				 * string.
				 */
				svgWriter = new StringWriter( 2048 );
				svgOutput = new StreamResult( svgWriter );
     			transformer.transform(
        			xmlInput,
        			svgOutput
				);
				
				svgString = svgWriter.toString();

				/*
				 * Send back the appropriate output given the
				 * image type.
				 */
				if ( request.getParameter("imgtype").equals("JPG") )
				{
					emitJPG( request, response, svgString );
				}
				else if (request.getParameter("imgtype").equals("PNG"))
				{
					emitPNG( request, response, svgString );
				}
				else
				{
					emitSVG( request, response, svgString );
				}
	   		}
    		catch (Exception e)
    		{
      			errorExit( request, response, e.getMessage() );
    		}
  		}
		else
		{
			errorExit( request, response, retrievedXML );
		}
	}

	/*
	 * Treat get and post equivalently.
	 */
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
		throws IOException, ServletException
	{
		doPost( request, response );
	}


	private String getFakeOMFReports(  HttpServletRequest request,
		String cityName, String stationID )
	{
    	BufferedReader input;
		boolean success;
		String title;
		String retrievedReport = null;
	
		title = "/home/httpd/html/omf_j/sample" + useCount + ".xml";

		synchronized (this) {
			useCount++;
			if (useCount > 3)
			{
				useCount = 1;
			}
		}
		try {
    		// Get response data.
    		input = new BufferedReader(new FileReader(title));

    		StringBuffer strBuf = new StringBuffer(2048);
			String str;
    		while (null != ((str = input.readLine())))
 			{
 				strBuf.append(str);
				strBuf.append("\n");
 			}
			retrievedReport = strBuf.toString();
    		input.close ();
		}
		catch (Exception e)
		{
			System.err.println("Err in getFakeOMFReports");
			if (e.getMessage() != null)
			{
				retrievedReport = null;
			}
		}
		return retrievedReport;
	}

	private String getOMFReports( HttpServletRequest request,
		String cityName, String stationID )
	{
    	URL url;
    	URLConnection urlConn;
    	DataOutputStream output;
    	DataInputStream input;
		boolean success;
		String	retrievedReport = null;

	    // URL of CGI-Bin script.
		try
		{
			/*
			 * Open a URL connection to the OMF source URL
			 */
			url = new URL( rb.getString("omfSource") );
    		urlConn = url.openConnection();

    		/*
			 * We need to both send (output)
			 * and receive (input) data
			 * with this connection
			 */
    		urlConn.setDoOutput (true);
	   		urlConn.setDoInput (true);

    		// Don't use any cached values
    		urlConn.setUseCaches (false);

    		// Specify the content type.
    		urlConn.setRequestProperty("Content-Type",
				"application/x-www-form-urlencoded");

			/*
			 * No user interaction such as authentication
			 * dialogs is needed here.
			 */
  			urlConn.setAllowUserInteraction(false);

			/*
			 * Write the POST data; this OMF source
			 * is ordinarily called from an HTML form;
			 * we are filling in the call_id field and
			 * faking the "Retrieve" submit button
			 */
    		output = new DataOutputStream (urlConn.getOutputStream ());
    		String content = "do-retrieve=Retrieve&amp;call_id=" +
				URLEncoder.encode( stationID );
    		output.writeBytes (content);
    		output.flush ();
    		output.close ();

    		/*
			 * Get response data, appending it to a
			 * string buffer.
			 */
    		input = new DataInputStream(urlConn.getInputStream ());

    		StringBuffer strBuf = new StringBuffer(2048);
			String str;
    		while (null != ((str = input.readLine())))
 			{
 				strBuf.append(str);
				strBuf.append("\n");
 			}

			/*
			 *	If the result begins with &lt;!DOCTYPE, it's good;
			 *  otherwise, it's not.
			 */
			retrievedReport = strBuf.toString();
			if (!retrievedReport.startsWith("<!DOCTYPE"))
			{
				retrievedReport = "No reports available for " +
					cityName + ".";
			}
    		input.close( );
		}
		catch (Exception e)
		{
			/*
			 * We can get an exception when the connection
			 * hits end of file; this test makes sure we
			 * only report true errors.
			 */
			if (e.getMessage() != null)
			{
				// System.err.println("Err in getOMFReports");
				retrievedReport = null;
			}
		}
		return retrievedReport;
	}

	/*
	 * Send back a header of the given contentType;
	 * add lots of checks to avoid caching.
	 */
	public void headerInfo( HttpServletRequest request,
		HttpServletResponse response, String contentType)
	{
 		response.setContentType( contentType );
		response.setHeader("Cache-Control",
			"no-cache, no-store, must-revalidate");
		response.setHeader("Cache-Control",
			"post-check=0, pre-check=0");

		/*
		 * Netscape has problems with Pragma: no-cache,
		 * so only send it to Explorer.
		 */
		String agent = request.getHeader("User-Agent").toLowerCase();
    	if (agent.indexOf("explorer") > -1){
			response.setHeader("Pragma", "no-cache");
		}
		response.setHeader("Expires", "Thu, 01 Dec 1994 16:00:00 GMT");
	}

	public void emitJPGx ( HttpServletRequest request,
		HttpServletResponse response, String svgString )
	{
		ByteArrayOutputStream baos = new ByteArrayOutputStream(16384);

		JPEGTranscoder t = new JPEGTranscoder();
		t.addTranscodingHint(JPEGTranscoder.KEY_QUALITY,
                             new Float(.8));
		TranscoderInput input =
			new TranscoderInput( new StringReader(svgString) );
		try {
	        TranscoderOutput output =
				new TranscoderOutput(baos);
        	t.transcode(input, output);
		}
		catch (Exception e)
		{
			System.err.println("Error in EmitJPG");
			e.printStackTrace();
		}
		byte[] ba = baos.toByteArray();
		headerInfo( request, response, "image/jpeg");
		try
		{
			response.getOutputStream().write( ba );
			response.getOutputStream().flush();
		}
		catch (Exception e)
		{
			System.err.println("Error in writing output");
			e.printStackTrace();
		}
	}
  
	public void emitJPG( HttpServletRequest request,
		HttpServletResponse response, String svgString )
	{
		headerInfo( request, response, "image/jpeg");

		JPEGTranscoder t = new JPEGTranscoder();
		t.addTranscodingHint(JPEGTranscoder.KEY_QUALITY,
                             new Float(.8));

        TranscoderInput input =
			new TranscoderInput( new StringReader(svgString) );
		try {
	        TranscoderOutput output =
				new TranscoderOutput(response.getOutputStream());
        	t.transcode(input, output);
			response.getOutputStream().close();
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
	}

	public void emitPNG ( HttpServletRequest request,
		HttpServletResponse response, String svgString )
	{
		headerInfo( request, response, "image/png");

		PNGTranscoder t = new PNGTranscoder();

        TranscoderInput input =
			new TranscoderInput( new StringReader(svgString) );
		try {
	        TranscoderOutput output =
				new TranscoderOutput(response.getOutputStream());
        	t.transcode(input, output);
			response.getOutputStream().close();
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
	}
 
 	public void emitSVG (  HttpServletRequest request,
		HttpServletResponse response, String svgString )
	{
 		headerInfo( request, response, "image/svg+xml");
		try {
			
			response.getWriter().write( svgString );
			response.getWriter().flush();
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
	}

 }
 