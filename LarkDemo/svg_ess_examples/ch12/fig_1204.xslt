<xsl:stylesheet version="1.0"
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="xml" indent="yes"
    doctype-public="-//W3C//DTD SVG 1.0//EN"
    doctype-system="http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"
/>

<xsl:template match="Reports">
<svg width="300" height="200" viewBox="0 0 300 200">
    <defs>
        <path id="wind-line" d="M 40 40 h 25 l -3 -3 m 3 3 l -3 3"
            style="fill: none;"/>
    </defs>
    <xsl:apply-templates select="SYN"/>
</svg>
</xsl:template>

<xsl:template match="SYN">
    <!-- output the station name as a text element -->
    <text x="10" y="20" style="font-size: 10pt;">
        <xsl:value-of select="@SName"/>
    </text>
    
    <!-- process any child SYG elements -->
    <xsl:apply-templates select="SYG"/>
</xsl:template>

<xsl:template match="SYG">
    <!-- pass the temperature to the thermometer -->
    <xsl:call-template name="draw-thermometer">
        <xsl:with-param name="t" select="@T"/>
    </xsl:call-template>
    
    <!-- draw-wind needs wind speed and direction -->
    <xsl:call-template name="draw-wind">
        <xsl:with-param name="w" select="@Wind"/>
    </xsl:call-template>

    <!-- draw-visibility needs the value of the Vis attribute -->
    <xsl:call-template name="draw-visibility">
        <xsl:with-param name="v">
            <xsl:value-of select="@Vis"/>
        </xsl:with-param>
    </xsl:call-template>  
</xsl:template>

<xsl:template name="draw-thermometer">
    <xsl:param name="t">0</xsl:param> 
    <xsl:variable name="height" select="50-$t"/>  
    <xsl:variable name="tint"> 
    <xsl:choose>
        <xsl:when test="$t > 0">red</xsl:when>
        <xsl:otherwise>blue</xsl:otherwise>
    </xsl:choose>
    </xsl:variable>

<g id="thermometer" transform="translate(10, 40)">
    <path
        d = "M 25 {$height} 25 90 A 10 10 0 1 0 35 90 L 35 {$height} Z" 
		style="stroke: none; fill: {$tint};"/>

    <path d= "M 25 0 25 90 A 10 10 0 1 0 35 90 L 35 0 Z"
		style="stroke: black; fill: none;"/>
        
    <g id="thermometer-text"
		style="font-size: 8pt; font-family: sans-serif;">
        <text x="20" y="95" style="text-anchor: end;">-40</text>
        <text x="20" y="55" style="text-anchor: end;">0</text>
        <text x="20" y="5" style="text-anchor: end;">50</text>
        <text x="10" y="110" style="text-anchor: end;">C</text>
        <text x="40" y="95">-40</text>
        <text x="40" y="55">32</text>
        <text x="40" y="5">120</text>
        <text x="50" y="110">F</text>
        <text x="30" y="130" tstyle="ext-anchor: middle;">Temp.</text>

        <text x="30" y="145" style="text-anchor: middle;"> 
            <xsl:value-of select="$t"/> /
            <xsl:value-of select="round($t div 5 * 9 + 32)"/>
        </text>
    </g>
</g>
</xsl:template>

<xsl:template name="draw-wind">
    <!-- watch this space -->
</xsl:template>

<xsl:template name="draw-visibility">
    <!-- to be determined -->
</xsl:template>

<xsl:template match="text()"/>

</xsl:stylesheet>
