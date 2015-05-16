package remoting;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

public class PersonServiceImpl implements PersonService {

	@Override
	public String sayHello(String name) {
		
		return "Hello " + name + ", this is the greeting from the server!";
	}

	@Override
	public Person get(String name) {
		return new Person("Tom", 18);
	}

	@Override
	public ArrayList<Object> collection(ArrayList<Object> datas) {
		for(Object o : datas){
			System.out.println("receive data = " + o);
		}	
		return datas;
	}

	@Override
	public HashMap<Object, Object> map(HashMap<Object, Object> map) {
		for(Object key : map.keySet()){
			System.out.println("receive key = " + key + " : " + map.get(key));
		}
		return map;
	}

	@Override
	public HashSet<String> d(HashSet<String> set) {
		return set;
	}

}
