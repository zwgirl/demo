package org.bark.test;

@RemotingService
public interface FirstService {
  Result sayHello(String message, Result r, Result r1);
}