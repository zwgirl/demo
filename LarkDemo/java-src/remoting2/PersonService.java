package remoting2;

@RemotingService
public interface PersonService {
  Person save(Person person);
}