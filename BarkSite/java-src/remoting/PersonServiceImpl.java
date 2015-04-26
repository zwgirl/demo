package remoting;

public class PersonServiceImpl implements PersonService {

	@Override
	public String sayHello(String name) {
		
		return "Hello " + name + ", this is the greeting from the server!";
	}

}
