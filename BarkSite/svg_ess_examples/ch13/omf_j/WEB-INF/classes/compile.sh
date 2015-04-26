javac -classpath \
.:\
/usr/local/batik/lib/batik-transcoder.jar:\
/usr/local/batik/lib/batik-svg-dom.jar:\
/usr/local/batik/lib/batik-dom.jar:\
/usr/local/batik/lib/batik-util.jar:\
/usr/local/batik/lib/batik-xml.jar:\
/usr/local/jakarta-tomcat/lib/servlet.jar:\
/usr/local/jarfiles/xalan.jar:\
/usr/local/jarfiles/w3c.jar:\
/usr/local/jarfiles/xerces.jar \
$*

#batik-awt-util.jar   batik-gui-util.jar  batik-transcoder.jar
#batik-bridge.jar     batik-gvt.jar       batik-util.jar
#batik-css.jar        batik-parser.jar    batik-xml.jar
#batik-dom.jar        batik-script.jar    crimson-parser.jar
#batik-ext.jar        batik-svg-dom.jar   js.jar
#batik-extension.jar  batik-svggen.jar
