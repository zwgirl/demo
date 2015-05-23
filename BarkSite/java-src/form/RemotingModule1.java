package form;

import com.google.inject.Binder;
import com.google.inject.Module;

public class RemotingModule1 implements Module{

	public void configure(Binder binder) {
		binder.bind(PersonService.class).to(PersonServiceImpl.class);
	}
}