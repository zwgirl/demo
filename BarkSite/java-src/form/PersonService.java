package form;

@RemotingService
public interface PersonService {
  String save(Person person);
}