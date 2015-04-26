package test1;

import java.io.IOException;
import java.io.InputStream;

import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class LoadClassServlet
 */
@WebServlet(name = "lc", urlPatterns = "*.jj")
public class ClassLoaderServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ClassLoaderServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ServletConfig sc = getServletConfig();
		ServletContext scx = sc.getServletContext();
		String path = request.getRequestURI();
		System.out.println("js=" + path);
		path = path.substring(path.lastIndexOf("/"), path.length());
		path = path.substring(0, path.lastIndexOf("."));
		String fileName = path.replace('.', '/').concat(".js");
		
		InputStream is = scx.getResourceAsStream(fileName);
		byte[] buffer = new byte[1024];
	    int length = 0;
//	    response.setContentType("application/octet-stream");
	    response.setContentType("text/javascript;charset=UTF-8");
	    ServletOutputStream output = response.getOutputStream();
	    while((length = is.read(buffer)) != -1){
		    output.write(buffer, 0, length );
	    }
	    output.close();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
