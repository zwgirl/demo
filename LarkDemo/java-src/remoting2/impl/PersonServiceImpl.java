package remoting2.impl;

import remoting2.Person;
import remoting2.PersonService;

public class PersonServiceImpl implements PersonService{

	@Override
	public Person save(Person person) {
		person.setName("saved-" + person.getName());
		person.setAddress("saved:" + person.getAddress());
		person.setPhotoPath("saved:" + person.getPhotoPath());
		return person; //.getName();
	}

}
