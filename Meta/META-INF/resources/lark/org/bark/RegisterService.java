package org.bark;

@RemotingService
public interface RegisterService {
  PersonBean save(PersonBean person);
  void delete(String pid);
  PersonBean update(PersonBean person);
  PersonBean get(String pid);
}