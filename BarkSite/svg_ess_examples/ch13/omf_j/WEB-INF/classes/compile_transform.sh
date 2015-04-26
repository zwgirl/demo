javac -classpath \
.:$JAVA_HOME/lib/tools.jar:\
$JAVA_HOME/jre/lib/rt.jar:\
./servlet-2.2.0.jar:\
/usr/local/xmljar/xalan.jar:/usr/local/xmljar/xerces.jar:\
/usr/local/xmljar/fop.jar \
Transform.java
