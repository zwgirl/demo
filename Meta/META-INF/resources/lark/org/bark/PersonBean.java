package org.bark;

@RemotingBean
public class PersonBean {
  static {
    org.bark.remoting.SerializerFactory.getInstance().register(PersonBean.class, new org.bark.remoting.Serializer(){
      @Override
      public void writeObject(javax.json.JsonObjectBuilder builder, org.bark.remoting.ReferenceProcessor handler, Object value) {
      }
    });
    org.bark.remoting.DeserializerFactory.getInstance().register(PersonBean.class, new org.bark.remoting.Deserializer(){
      @SuppressWarnings({ "unchecked", "rawtypes" })
      @Override
      public Object readObject(javax.json.JsonObject jsonObj, Object[] handlers, Object obj) throws Exception {
      }
    });
  }
}