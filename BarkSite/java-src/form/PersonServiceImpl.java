package form;

public class PersonServiceImpl implements PersonService{

	@Override
	public String save(Person person) {
		System.out.println("Person Info: \n");
		System.out.println("name: " + person.getName());
		System.out.println("age: " + person.getAge());
		System.out.println("address:" +  person.getAddress());
		return "success!";
	}
}
