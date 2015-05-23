package form;

@RemotingBean
public class Person {
  private String _ordinal;
  private String _name;
  private String _address;
  private int _age;
  private boolean _selected;
  private Object[] _child;
  
  public Person(){
	
  }

  String  getOrdinal() {
    return this._ordinal;
  }
  void setOrdinal(String value) {
    this._ordinal = value;
  }

  String  getName() {
    return this._name;
  }
  void setName(String value) {
    this._name = value;
  }

  String  getAddress() {
    return this._address;
  }
  void setAddress(String value) {
    this._address = value;
  }

  int  getAge() {
    return this._age;
  }
  void setAge(int value) {
    this._age = value;
  }

  boolean  getSelected() {
    return this._selected;
  }
  void setSelected(boolean value) {
    this._selected = value;
  }

  Object[]  getChild() {
    return this._child;
  }
  void setChild(Object[] value) {
    this._child = value;
  }
  static {
    org.bark.remoting.SerializerFactory.getInstance().register(Person.class, new org.bark.remoting.Serializer(){
      @Override
      public void writeObject(javax.json.JsonObjectBuilder builder, org.bark.remoting.ReferenceProcessor handler, Object value) {
        Person __o = (Person)value;
        builder = __o._ordinal == null ? builder.addNull("_ordinal") : builder.add("_ordinal", __o._ordinal);
        builder = __o._name == null ? builder.addNull("_name") : builder.add("_name", __o._name);
        builder = __o._address == null ? builder.addNull("_address") : builder.add("_address", __o._address);
        builder.add("_age", __o._age);
        builder.add("_selected", __o._selected);
        builder = __o._child == null ? builder.addNull("_child") : builder.add("_child", handler.shared(__o._child));
      }
    });
    org.bark.remoting.DeserializerFactory.getInstance().register(Person.class, new org.bark.remoting.Deserializer(){
      @SuppressWarnings({ "unchecked", "rawtypes" })
      @Override
      public Object readObject(javax.json.JsonObject jsonObj, Object[] handlers, Object obj) throws Exception {
        Person __o = (Person)obj;
        __o._ordinal = jsonObj.get("_ordinal") == javax.json.JsonValue.NULL ? null : jsonObj.getString("_ordinal");
        __o._name = jsonObj.get("_name") == javax.json.JsonValue.NULL ? null : jsonObj.getString("_name");
        __o._address = jsonObj.get("_address") == javax.json.JsonValue.NULL ? null : jsonObj.getString("_address");
//        __o._age = jsonObj.getInt("_age");
        __o._selected = (boolean)jsonObj.getBoolean("_selected");
        __o._child = jsonObj.get("_child") == javax.json.JsonValue.NULL ? null : (Object[])handlers[jsonObj.getInt("_child")];
        return obj;
      }
    });
  }
}