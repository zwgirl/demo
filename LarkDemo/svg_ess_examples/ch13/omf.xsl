<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"  xmlns:java="http://xml.apache.org/xslt/java"
xmlns="http://www.w3.org/2000/svg"
exclude-result-prefixes="java"
>
<xsl:output method="xml" 
	indent="yes"
	standalone="no"
	doctype-public = "-//W3C//DTD SVG 20001102//EN"
  	doctype-system =
	"http://www.w3.org/TR/2000/CR-SVG-20001102/DTD/svg-20001102.dtd"
/>

<xsl:param name="timeZone" select="UTC"/>

<xsl:template match="Reports">
<svg width="350" height="200" viewBox="0 0 350 200"
	xmlns="http://www.w3.org/2000/svg">
	<defs>
		<path id="wind-arrow" d="M 40 40 h 25"
			fill="none" stroke="black"/>
	</defs>
	
	<!-- look for the first METAR or AAXX report in the file -->
	<xsl:apply-templates select="SYN[@Title='METAR' or @Title='AAXX'][1]"/>
</svg>
</xsl:template>

<xsl:template match="SYN">
	<xsl:variable name="tstamp" select="@TStamp"/>
	
	<!-- output station name; ignore station code -->
	<text font-size="10pt" x="10" y="20">
		<xsl:choose>
		<xsl:when test="contains(@SName, ',')">
			<xsl:value-of select="substring-after(@SName, ',')"/>
		</xsl:when>
		<xsl:otherwise>
			<xsl:value-of select="@SName"/>
		</xsl:otherwise>
		</xsl:choose>
	</text>
	<text font-size="10pt" x="345" y="20" text-anchor="end">
		<xsl:value-of select="java:com.catcode.XSLT.XSLTUtils.getDate( $tstamp, $timeZone )"/>
	</text>

	<xsl:call-template name="draw-time-and-clock">
		<xsl:with-param name="hour"
			select="java:com.catcode.XSLT.XSLTUtils.getHour( $tstamp, $timeZone )"/>
		<xsl:with-param name="minute"
			select="java:com.catcode.XSLT.XSLTUtils.getMinute( $tstamp, $timeZone )"/>
	</xsl:call-template>

	<xsl:apply-templates select="SYG"/>
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

<text font-size="10pt" x="345" y="40" text-anchor="end">
		<xsl:value-of select="$hour"/>
		<xsl:text>:</xsl:text>
		<xsl:value-of select="format-number($minute,'00')"/>
</text>
<g id="clock" transform="translate(255, 30)">
	<circle cx="20" cy="20" r="20"	fill="{$tint}" stroke="black"/>
	<line transform="rotate({$minuteAngle}, 20, 20)"
		x1="20" y1="20" x2="38" y2="20" stroke="black"/>
	<line transform="rotate({$hourAngle}, 20, 20)"
		x1="20" y1="20" x2="33" y2="20" stroke="black"/>
</g>
</xsl:template>

<xsl:template match="SYG">
	<xsl:call-template name="draw-thermometer">
		<xsl:with-param name="t" select="@T"/>
	</xsl:call-template>
	
	<!--
		if there's no Wind attribute, call the template
		with direction and speed both set to -1. That way,
		we won't get NaN errors when splitting out numbers.
	-->
	<xsl:choose>
		<xsl:when test="@Wind != '' and @Wind != 0">
			<xsl:call-template name="draw-wind">
				<xsl:with-param name="w" select="@Wind"/>
			</xsl:call-template>
		</xsl:when>
		<xsl:otherwise>
			<xsl:call-template name="draw-wind">
				<xsl:with-param name="w">-1,-1</xsl:with-param>
			</xsl:call-template>
		</xsl:otherwise>
	</xsl:choose>

	<xsl:call-template name="draw-visibility">
		<xsl:with-param name="v" select="@Vis"/>
	</xsl:call-template>	
</xsl:template>

<xsl:template name="draw-thermometer">
	<xsl:param name="t" select="0"/>
	<g id="thermometer" transform="translate(10, 40)">

	<xsl:if test="$t != ''">
		<xsl:variable name="tint">
		<xsl:choose>
			<xsl:when test="$t > 0">red</xsl:when>
			<xsl:otherwise>blue</xsl:otherwise>
		</xsl:choose>
		</xsl:variable>
		
		<!-- "fill" the thermometer by drawing a solid
			rectangle and clipping it to the shape of
			the thermometer -->
		<xsl:variable name="h" select="50-java:com.catcode.XSLT.XSLTUtils.clamp($t,-55,50)"/>
		<clipPath id="thermoclip">
			<use xlink:href="#thermometer-path"/>
		</clipPath>
		<path d="M 10 {$h} h40 V 120 h-40 Z"
			fill="{$tint}" clip-path="url(#thermoclip)"/>
	</xsl:if>
	
	<path id="thermometer-path" stroke="black" fill="none"
		d= "M 25 0 25 90 A 10 10 0 1 0 35 90 L 35 0 Z"/>
		
	<g id="thermometer-text" font-size="8pt" font-family="sans-serif">
		<text x="20" y="95" text-anchor="end">-40</text>
		<text x="20" y="55" text-anchor="end">0</text>
		<text x="20" y="5" text-anchor="end">50</text>
		<text x="10" y="110" text-anchor="end">C</text>
		<text x="40" y="95">-40</text>
		<text x="40" y="55">32</text>
		<text x="40" y="5">120</text>
		<text x="50" y="110">F</text>
		<text x="30" y="130" text-anchor="middle">Temp.</text>
	
		<text x="30" y="145" text-anchor="middle">
			<xsl:choose>
				<xsl:when test="$t != ''">
					<xsl:value-of select="$t"/>&#176;C /
					<xsl:value-of select="round($t div 5 * 9 + 32)"/>&#176;F
				</xsl:when>
				<xsl:otherwise>N/A</xsl:otherwise>
			</xsl:choose>
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
		<xsl:when test="$dir = 'VAR'">VAR</xsl:when>
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
		<xsl:when test="$dir = 'VAR'">VAR</xsl:when>
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
	<circle cx="40" cy="40" r="30" stroke="black" fill="none"/>
	<path stroke="black" fill="none"
		d= "M 40 10 L 40 14
			M 70 40 L 66 40
			M 40 70 L 40 66
			M 10 40 L 14 40"/>
	<xsl:if test="$speed >= 0">
		<xsl:if test="$dir1 != 'VAR'">
		<use transform="rotate({$dir1},40,40)"
		 xlink:href="#wind-arrow">
			<xsl:if test="$dir1 != $dir2">
				<xsl:attribute xmlns="" name="stroke-dasharray">3 3</xsl:attribute>
			</xsl:if>
		</use>
		</xsl:if>
		<xsl:if test="$dir2 != 'VAR'">
		<use transform="rotate({$dir2},40,40)" 
		 xlink:href="#wind-arrow">
			<xsl:if test="$dir1 != $dir2">
				<xsl:attribute xmlns="" name="stroke-dasharray">3 3</xsl:attribute>
			</xsl:if>
		</use>
		</xsl:if>
		<xsl:if test="$dir1 = 'VAR'">
			<text x="40" y="44" text-anchor="middle">Variable</text>
		</xsl:if>
	</xsl:if>
	<text x="40" y="9" text-anchor="middle">N</text>
	<text x="73" y="44">E</text>
	<text x="40" y="80" text-anchor="middle">S</text>
	<text x="8" y="44" text-anchor="end">W</text>
	<text x="40" y="100" text-anchor="middle">Wind (m/sec)</text>
	<text x="40" y="115" text-anchor="middle">
		<xsl:choose>
		<xsl:when test="$speed >= 0">
			<xsl:value-of select="$speed"/>
		</xsl:when>
		<xsl:otherwise>N/A</xsl:otherwise>
		</xsl:choose>
	</text>
</g>
</xsl:template>

<xsl:template name="draw-visibility">
	<xsl:param name="v">0</xsl:param>
<g id="visbar" transform="translate(220,110)" 
	font-size="8pt" text-anchor="middle">

	<!-- fill in the rectangle if we have a visibility value -->
	<xsl:if test="$v != ''">
		<xsl:variable name="width">
			<xsl:choose>
			<xsl:when test="$v = 'INF'">100</xsl:when>
			<xsl:when test="$v > 40000">100</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="$v * 100.0 div 40000.0"/>
			</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<rect fill="green" stroke="none"
			x="0" y="0" width="{$width}" height="20"/>
	</xsl:if>

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
		<xsl:choose>
			<xsl:when test="$v = 'INF'">Unlimited</xsl:when>
			<xsl:when test="$v != ''">
				<xsl:value-of select="format-number($v div 1000.0,'0.###')"/>
			</xsl:when>
			<xsl:otherwise>N/A</xsl:otherwise>
		</xsl:choose>
	</text>
</g>
</xsl:template>

<!-- discard any text nodes -->
<xsl:template match="text()"/>

<!-- don't automatically scan all elements -->
<xsl:template match="*"/>

</xsl:stylesheet>

