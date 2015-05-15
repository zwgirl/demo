package remoting;
import java.util.ArrayList;import java.util.HashMap;
@RemotingService
public interface PersonService {
  String sayHello(String name);
  Person get(String name);
  ArrayList<Object> collection(ArrayList<Object> datas);
  HashMap<Object, Object> map(HashMap<Object, Object> map);
}