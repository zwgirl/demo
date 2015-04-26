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

import org.apache.batik.dom.GenericDOMImplementation;
import org.apache.batik.dom.svg.SVGDOMImplementation;
import org.apache.batik.dom.util.DOMUtilities;

import org.apache.batik.transcoder.image.JPEGTranscoder;
import org.apache.batik.transcoder.image.PNGTranscoder;
import org.apache.batik.transcoder.TranscoderInput;
import org.apache.batik.transcoder.TranscoderOutput;

import org.apache.batik.xml.XMLUtilities;

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

public class TransformApp  {

    ResourceBundle rb = ResourceBundle.getBundle("TransformFileStrings");

	private Templates xslTemplate;
    private String retrievedXML;
	private String callLetters;
	private String cityName;
	private Document svgDoc;
	private	DOMResult	transformDOM;

    public TransformApp( ) {
     } // <init>(void)

    public static void main(String argv[]) {
		TransformApp maker = new TransformApp();
		
		maker.do_it_all();
	}

	public void do_it_all()
	{
		init();
		doPost();
		System.exit(0);
	}

	public void init()
	{
		String path;
		String title;
		
        path = rb.getString("pathName");
		title = rb.getString( "xslFileName" );
		try
		{
			TransformerFactory factory = TransformerFactory.newInstance();
			xslTemplate = factory.newTemplates(new StreamSource(path + title));
		}
		catch (Exception ex)
		{
			xslTemplate = null;
		}
	}

	public void doPost()
	{
		StreamSource			xmlInput;
		StreamResult			svgOutput;
		StringWriter			svgWriter;
		String					svgString;
		boolean					downloadOK;
		
		downloadOK = getReports( );
		if (downloadOK)
		{
			try
    		{
				xmlInput = new StreamSource(
					new StringReader( retrievedXML )
				);
      			Transformer transformer = xslTemplate.newTransformer();
       			transformer.setOutputProperty("encoding", "UTF-8");
				DOMImplementation impl =
					SVGDOMImplementation.getDOMImplementation();

				String svgNS = SVGDOMImplementation.SVG_NAMESPACE_URI;

				transformDOM = new DOMResult( );
				svgWriter = new StringWriter( 2048 );
				svgOutput = new StreamResult( svgWriter );
     			transformer.transform(
        			xmlInput,
        			svgOutput
				);
				
				svgString = svgWriter.toString();
				
/*
				svgDoc = DOMUtilities.deepCloneDocument(
					(Document) transformDOM.getNode(),
					impl);
*/
				System.err.println( svgWriter.toString() );
				emitSVG( svgString );
				emitPNG( svgString );
	   		}
    		catch (Exception e)
    		{
				System.err.println("doPost exception");
				e.printStackTrace();
     		}
  		}
		else
		{
			System.err.println("Could not get the file");
		}
	}

	private boolean getReports( )
	{
    	BufferedReader input;
		boolean success;
		String title;
	
		title = rb.getString( "xmlFileName" );

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
			retrievedXML = strBuf.toString();
			success = true;
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

	public void emitPNG ( String svgString )
	{		
        PNGTranscoder t = new PNGTranscoder();
		// set the transcoding hints      

		if (svgString != null)
		{
			// create the transcoder input
        	TranscoderInput input =
				new TranscoderInput( new StringReader( svgString ) );
			try {
	        	TranscoderOutput output =
					new TranscoderOutput( new FileOutputStream(
					rb.getString( "pngFileName") ) );
        		t.transcode(input, output);
			}
			catch (Exception e)
			{
				e.printStackTrace();
			}
		}
	}
 
 	public void emitSVG ( String svgString )
	{
 		try {
			FileWriter svgFile = new FileWriter(
			rb.getString("svgFileName"));	
			svgFile.write( svgString );
			svgFile.flush();
			svgFile.close();
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
	}
	
	public String serialize( Document doc )
	{
		StringWriter outputWriter = new StringWriter(2048);
		System.err.println("Entering serializer");
		try {
		  Serializer serializer = SerializerFactory.getSerializer
        		(OutputProperties.getDefaultMethodProperties("xml"));
		  serializer.setWriter(outputWriter);
		  serializer.asDOMSerializer().serialize( doc );
		  return outputWriter.toString();
		}
		catch (Exception e)
		{
			System.err.println("Serialize catch");
			e.printStackTrace();
			return null;
		}
	}
 }