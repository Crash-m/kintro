<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
   xmlns:h="http://www.w3.org/1999/xhtml"
   xmlns="http://www.w3.org/1999/xhtml"
	 exclude-result-prefixes="#default">

	 <xsl:output
        method="xml"
        omit-xml-declaration="yes"
        doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN"
        doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"
        encoding="UTF-8"
        indent="yes"/>
        
<xsl:template match="h:a[contains(@href, 'ExtSound')]">
    <xsl:message>Found one</xsl:message>
    <xsl:variable name="filename">
        <xsl:value-of select="substring(@href, 24)"/>
    </xsl:variable>
    <xsl:element name="button" namespace="http://www.w3.org/1999/xhtml">
        <xsl:attribute name="onclick">
            <xsl:value-of select="concat('playSound', $filename)"/>
        </xsl:attribute>
        <img src="pics/speaker.png" alt="Play" class="speaker"/>
    </xsl:element>
</xsl:template>

<xsl:template match="@*|node()">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
  </xsl:template>
  


</xsl:stylesheet>
