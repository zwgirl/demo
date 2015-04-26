package org.bark.test;

@RemotingBean
public class Result {
  private String _content;

  public String  getContent() {
    return this._content;
  }
  public void setContent(String value) {
    this._content = value;
  }
  static {
    org.bark.remoting.SerializerFactory.getInstance().register(Result.class, new org.bark.remoting.Serializer(){
      @Override
      public void writeObject(javax.json.JsonObjectBuilder builder, org.bark.remoting.ReferenceProcessor handler, Object value) {
        Result __o = (Result)value;
        builder = __o._content == null ? builder.addNull("_content") : builder.add("_content", __o._content);
      }
    });
    org.bark.remoting.DeserializerFactory.getInstance().register(Result.class, new org.bark.remoting.Deserializer(){
      @SuppressWarnings({ "unchecked", "rawtypes" })
      @Override
      public Object readObject(javax.json.JsonObject jsonObj, Object[] handlers, Object obj) throws Exception {
        Result __o = (Result)obj;
        __o._content = jsonObj.get("_content") == javax.json.JsonValue.NULL ? null : jsonObj.getString("_content");
        return obj;
      }
    });
  }
}