package remoting;

@RemotingBean
public class Person {
  Person p;
  Person p1;
  private String _name;
  private int _age;
  private String _address;
  private String _photoPath;

  public Person  getP() {
    return this.p;
  }
  public void setP(Person value) {
    this.p = value;
  }

  public Person  getP1() {
    return this.p1;
  }
  public void setP1(Person value) {
    this.p1 = value;
  }

  public String  getName() {
    return this._name;
  }
  public void setName(String value) {
    this._name = value;
  }

  public int  getAge() {
    return this._age;
  }
  public void setAge(int value) {
    this._age = value;
  }

  public String  getAddress() {
    return this._address;
  }
  public void setAddress(String value) {
    this._address = value;
  }

  public String  getPhotoPath() {
    return this._photoPath;
  }
  public void setPhotoPath(String value) {
    this._photoPath = value;
  }
  static {
    org.bark.remoting.SerializerFactory.getInstance().register(Person.class, new org.bark.remoting.Serializer(){
      @Override
      public void writeObject(javax.json.JsonObjectBuilder builder, org.bark.remoting.ReferenceProcessor handler, Object value) {
        Person __o = (Person)value;
        builder = __o.p == null ? builder.addNull("p") : builder.add("p", handler.shared(__o.p));
        builder = __o.p1 == null ? builder.addNull("p1") : builder.add("p1", handler.shared(__o.p1));
        builder = __o._name == null ? builder.addNull("_name") : builder.add("_name", __o._name);
        builder.add("_age", __o._age);
        builder = __o._address == null ? builder.addNull("_address") : builder.add("_address", __o._address);
        builder = __o._photoPath == null ? builder.addNull("_photoPath") : builder.add("_photoPath", __o._photoPath);
      }
    });
    org.bark.remoting.DeserializerFactory.getInstance().register(Person.class, new org.bark.remoting.Deserializer(){
      @SuppressWarnings({ "unchecked", "rawtypes" })
      @Override
      public Object readObject(javax.json.JsonObject jsonObj, Object[] handlers, Object obj) throws Exception {
        Person __o = (Person)obj;
        __o.p = jsonObj.get("p") == javax.json.JsonValue.NULL ? null : (  Person)handlers[jsonObj.getInt("p")];
        __o.p1 = jsonObj.get("p1") == javax.json.JsonValue.NULL ? null : (  Person)handlers[jsonObj.getInt("p1")];
        __o._name = jsonObj.get("_name") == javax.json.JsonValue.NULL ? null : jsonObj.getString("_name");
        __o._age = jsonObj.getInt("_age");
        __o._address = jsonObj.get("_address") == javax.json.JsonValue.NULL ? null : jsonObj.getString("_address");
        __o._photoPath = jsonObj.get("_photoPath") == javax.json.JsonValue.NULL ? null : jsonObj.getString("_photoPath");
        return obj;
      }
    });
  }
}