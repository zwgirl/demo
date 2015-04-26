import java.io.*;
import java.text.*;
import java.util.*;

import java.net.URLEncoder; 
import javax.servlet.*;
import javax.servlet.http.*;

public class Weather extends HttpServlet {

    ResourceBundle rb = 
        ResourceBundle.getBundle("TransformFileStrings");

    public void doPost(HttpServletRequest request,
        HttpServletResponse response)
        throws ServletException, IOException
    {

        PrintWriter out = response.getWriter();
            
        try
        {
            response.setContentType("text/html"); 
            response.setHeader("Cache-Control",
                "no-cache, no-store, must-revalidate");
            response.setHeader("Cache-Control",
                "post-check=0, pre-check=0");
            String agent = 
                request.getHeader("User-Agent").toLowerCase();
        
            // netscape chokes on Pragma no-cache so only
            // send it to explorer
            if (agent.indexOf("explorer") > -1){
              response.setHeader("Pragma", "no-cache");
            }
            response.setHeader("Expires",
                "Thu, 01 Dec 1994 16:00:00 GMT");

            String params = request.getParameter( "call_id" ); 
            String referer = request.getHeader( "Referer" );

            /* if no airport chosen, return to caller */
            if ( params.startsWith("----") && (referer != null) )
            {
                response.setStatus( response.SC_MOVED_TEMPORARILY );
                response.setHeader( "Location", referer );
                return;
            }
            
            StringTokenizer info = new StringTokenizer( params, "|" );  
            info.nextToken();   /* we don't need the station ID */
            String cityName = info.nextToken();
            
            String imgType = request.getParameter( "imgtype" );
            
            String transformURL = rb.getString( "transformURL" );

            out.println("<html><head><title>" +
                cityName + "</title></head>");
            out.println("<body>");

            if (referer != null)    
            {
                out.println("<p><a href=\"" +
                    request.getHeader("Referer") +
                    "\">Back</a></p>");
            }
            
            /* 
             * Construct parameters to pass to Transform servlet.
             * The servlet request.getParameter function decoded
             * the information, so we must re-encode it.
            */
            params = "call_id=" + java.net.URLEncoder.encode(params) +
                "&imgtype=" + imgType;

            if (imgType.equals("SVG"))  
            {
                out.println("<p><embed width=\"350\" height=\"200\" " +
                    "type=\"image/svg+xml\" ");
                out.println(
                    "src=\"" + transformURL +
                    "?" + params +
                    "\" /></p>");
            }
            else
            {
                out.println("<p><img width=\"350\" height=\"200\" ");
                out.println(
                    "src=\"" + transformURL +
                    "?" + params +
                    "\" /></p>");
            }
            out.println("</body></html>");
        }
        catch (Exception e)
        {
            out.println("<html><head><title>Error</title></head>");
            out.println("<body>");
            out.println("<p>Unable to extract information.</p>");
            out.println("</body></html>");
        }
    }

    public void doGet(HttpServletRequest request, 
                      HttpServletResponse response)
        throws IOException, ServletException
    {
        doPost( request, response );
    }
 }
