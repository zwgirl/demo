package remoting;

import remoting.PersonService;
import remoting.PersonServiceImpl;

import com.google.inject.Binder;
import com.google.inject.Module;

public class RemotingModule implements Module{

	public void configure(Binder binder) {
		binder.bind(PersonService.class).to(PersonServiceImpl.class);
		binder.bind(remoting2.PersonService.class).to(remoting2.impl.PersonServiceImpl.class);
	}
	
}