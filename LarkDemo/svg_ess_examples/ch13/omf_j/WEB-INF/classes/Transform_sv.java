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
import org.xml.sax.helpers.XMLReaderFactory;
import org.xml.sax.XMLReader;
import org.xml.sax.InputSource;

public class Transform extends HttpServlet {

    ResourceBundle rb = ResourceBundle.getBundle("TransformFileStrings");

	private Templates xslTemplate;
    private String retrievedXML;
	private String callLetters;
	private String cityName;

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

	/*
	 * Utility routine to convert strings to
	 * integers; if not convertible, return zero.
	 * This function avoids having lots of try/catch
	 * blocks cluttering up the code
	 */
	private int cvtInt( String str )
	{
		int	n;
		try
		{
			n = Integer.parseInt( str );
		}
		catch (Exception e)
		{
			n = 0;
		}
		return n;
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
		DOMResult				transformedDOM;
		
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
				byteOutStream = new ByteArrayOutputStream();\
				
				transformOutput = new StreamResult( byteOutStream );
      			transformer.transform(
        			xmlString,
        			transformOutput
				);
				finalResult = byteOutStream.toString();
        		response.setContentType("image/svg+xml");
				response.setHeader("Cache-Control",
					"no-cache, post-check=0, pre-check=0");
    			String agent = request.getHeader("User-Agent").toLowerCase();
				// netscape chokes on Pragma no-cahe so only send it to explorer
				if (agent.indexOf("explorer") > -1){
				  response.setHeader("Pragma", "no-cache");
				}
				response.setHeader("Expires", "Thu, 01 Dec 1994 16:00:00 GMT");
        		PrintWriter out = response.getWriter();
				out.println( finalResult );
    		}
    		catch (Exception e)
    		{
      			errorExit( response, e.getMessage() );
    		}
  		}
		else
		{
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
			
			if (retrievedXML.startsWith("<?xml"))
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

}
 /* p.setFeature("http://xml.org/sax/features/validation", true); */