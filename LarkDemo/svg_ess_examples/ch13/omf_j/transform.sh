java -cp /usr/local/xmljar/xalan.jar:\
/usr/local/xmljar/xerces.jar:\
/usr/local/xmljar/bsf.jar:\
/usr/local/jakarta-tomcat/lib/XSLTUtils.jar:\
. \
org.apache.xalan.xslt.Process -IN $1 -XSL $2 -OUT $3
