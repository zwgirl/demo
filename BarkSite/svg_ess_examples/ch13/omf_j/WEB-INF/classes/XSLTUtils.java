package com.catcode.XSLT;

import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;
import java.text.DateFormat;


public class XSLTUtils
{
 	public static String getDate(String timeStampString, String timeZoneString)
	{
		DateFormat d = DateFormat.getDateInstance();
		d.setTimeZone( TimeZone.getTimeZone( timeZoneString ));
		long milliseconds = Long.parseLong( timeStampString ) * 1000;
		return 
			d.format(new Date(milliseconds));
	}
	
	public static Double getHour(String timeStampString, String timeZoneString)
	{
		long milliseconds = Long.parseLong( timeStampString ) * 1000;
		Calendar c = Calendar.getInstance( TimeZone.getTimeZone( timeZoneString ));
		c.setTime( new Date( milliseconds ) );
		return new Double( c.get( Calendar.HOUR_OF_DAY ) );
	}
	
	public static Double getMinute(String timeStampString, String timeZoneString)
	{
		long milliseconds = Long.parseLong( timeStampString ) * 1000;
		Calendar c = Calendar.getInstance( TimeZone.getTimeZone( timeZoneString ));
		c.setTime( new Date( milliseconds ) );
		return new Double( c.get( Calendar.MINUTE ) );
	}
	
	public static Double clamp( String value, Double min, Double max )
	{
		Double dval;
		try {
			dval = Double.valueOf( value );
		}
		catch (Exception e)
		{
			dval = min;
		}
		if (dval.doubleValue() < min.doubleValue())
		{
			return min;
		}
		else if (dval.doubleValue() > max.doubleValue())
		{
			return max;
		}
		else
		{
			return dval;
		}
	}
}

