<xsl:stylesheet version="1.0"
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
   xmlns:java="http://xml.apache.org/xslt/java"
   exclude-result-prefixes="java">

<xsl:output method="xml" indent="yes"
    doctype-public="-//W3C//DTD SVG 1.0//EN"
    doctype-system="http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"
/>

<xsl:template match="Reports">
<svg width="350" height="200" viewBox="0 0 350 200">
    <defs>
        <path id="wind-line" d="M 40 40 h 25"
            style="stroke: black; fill: none;"/>
    </defs>
    <xsl:apply-templates select="SYN"/>
</svg>
</xsl:template>

<xsl:template match="SYN">
    <!-- output the station name as a text element --> 
    <xsl:variable name="tstamp" select="@TStamp"/>

    <text font-size="10pt" x="10" y="20">
        <xsl:value-of select="@SName"/>
    </text>
    <text font-size="10pt" x="345" y="20" text-anchor="end">
        <xsl:value-of select="java:TimeStampUtils.getDate( $tstamp )"/>
    </text>
    
    <xsl:call-template name="draw-time-and-clock">
        <xsl:with-param name="hour"
            select="java:TimeStampUtils.getHour( $tstamp )"/>
        <xsl:with-param name="minute"
            select="java:TimeStampUtils.getMinute( $tstamp )"/>
    </xsl:call-template>

   
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
    <xsl:param name="w" select="0"/>
    
    <xsl:variable name="dir"  
        select="substring-before($w, ',')"/>
    <xsl:variable name="speed"
        select="substring-after($w, ',')"/>
        
    <xsl:variable name="dir1"> 
        <xsl:choose>
        <xsl:when test="contains($dir, '-')">
            <xsl:value-of select="number(substring-before($dir, '-' ))-90"/>
        </xsl:when>
        <xsl:otherwise>
            <xsl:value-of select="number($dir) - 90"/>
        </xsl:otherwise>
        </xsl:choose>
    </xsl:variable>

    <xsl:variable name="dir2"> 
        <xsl:choose>
        <xsl:when test="contains($dir, '-')">
            <xsl:value-of select="number(substring-after($dir, '-' ))-90"/>
        </xsl:when>
        <xsl:otherwise>
            <xsl:value-of select="number($dir) - 90"/>
        </xsl:otherwise>
        </xsl:choose>
    </xsl:variable>

<g id="compass" font-size="8pt" font-family="sans-serif"
    transform="translate(110, 70)">
    <circle cx="40" cy="40" r="30" style="stroke: black; fill: none;"/>
    <path
        d= "M 40 10 L 40 14
            M 70 40 L 66 40
            M 40 70 L 40 66
            M 10 40 L 14 40"
		style="stroke: black; fill: none;"/>
    <use transform="rotate({$dir1},40,40)" xlink:href="#wind-line"> 
        <xsl:if test="$dir1 != $dir2">
            <xsl:attribute name="stroke-dasharray">3 3</xsl:attribute>
        </xsl:if>
    </use>
    <use transform="rotate({$dir2},40,40)" xlink:href="#wind-line">
        <xsl:if test="$dir1 != $dir2">
            <xsl:attribute name="stroke-dasharray">3 3</xsl:attribute>
        </xsl:if>
    </use>
    <text x="40" y="9" text-anchor="middle">N</text>
    <text x="73" y="44">E</text>
    <text x="40" y="80" text-anchor="middle">S</text>
    <text x="8" y="44" text-anchor="end">W</text>
    <text x="40" y="100" text-anchor="middle">Wind (m/sec)</text>
    <text x="40" y="115" text-anchor="middle">
        <xsl:value-of select="$speed"/> 
    </text>
</g>
</xsl:template>

<xsl:template name="draw-visibility">
    <xsl:param name="v">0</xsl:param>
    <xsl:variable name="width"> 
        <xsl:choose>
        <xsl:when test="$v = 'INF'">100</xsl:when>
        <xsl:when test="$v > 40000">100</xsl:when>
        <xsl:otherwise>
            <xsl:value-of select="$v * 100.0 div 40000.0"/>
        </xsl:otherwise>
        </xsl:choose>
    </xsl:variable>
<g id="visbar" transform="translate(220,110)" 
    font-size="8pt" text-anchor="middle">

    <!-- fill in the bar first -->
    <rect fill="green" stroke="none"
        x="0" y="0" width="{$width}" height="20"/>

    <!-- then draw the outline on top of it -->
    <rect x="0" y="0" width="100" height="20" stroke="black" fill="none"/>
    
    <path fill="none" stroke="black"
        d="M 25 20 L 25 25 M 50 20 L 50 25 M 75 20 L 75 25"/>

    <text x="0" y="35">0</text>
    <text x="25" y="35">10</text>
    <text x="50" y="35">20</text>
    <text x="75" y="35">30</text>
    <text x="100" y="35">40+</text>
    <text x="50" y="60">
        Visibility (km)
    </text>
    <text x="50" y="75">
        <xsl:value-of select="format-number($v div 1000.0,'0.###')"/> 
    </text>
</g>
</xsl:template>

<xsl:template name="draw-time-and-clock">
    <xsl:param name="hour">0</xsl:param>
    <xsl:param name="minute">0</xsl:param>
    
    <!-- clock face is light yellow from 6 AM to 6 PM, otherwise light blue -->
    <xsl:variable name="tint">
        <xsl:choose>
        <xsl:when test="$hour > 6 and $hour &lt; 18">#ffffcc</xsl:when>
        <xsl:otherwise>#ccccff</xsl:otherwise>
        </xsl:choose>
    </xsl:variable>
    
    <!-- calculate angles for hour and minute hand of analog clock -->
    <xsl:variable name="hourAngle"
        select="(30 * ($hour mod 12 + $minute div 60)) - 90"/>
    <xsl:variable name="minuteAngle"
        select="($minute * 6) - 90"/>

<text x="345" y="40" style="font-size: 10pt; text-anchor: end;">
        <xsl:value-of select="$hour"/>
        <xsl:text>:</xsl:text>
        <xsl:value-of select="format-number($minute,'00')"/>
</text>
<text font-size="10pt" x="345" y="60" text-anchor="end">
GMT
</text>
<g id="clock" transform="translate(255, 30)">
    <circle cx="20" cy="20" r="20"
		style="fill: {$tint}; stroke: black;"/>
    <line transform="rotate({$minuteAngle}, 20, 20)"
        x1="20" y1="20" x2="38" y2="20" style="stroke: black;"/>
    <line transform="rotate({$hourAngle}, 20, 20)"
        x1="20" y1="20" x2="33" y2="20" style="stroke: black;"/>
</g>
</xsl:template>

<xsl:template match="text()"/>

</xsl:stylesheet>
