#!/usr/bin/perl

$exponent = $ARGV[0];

print "<path d=\"M ";
for ($i=0; $i<20; $i++)
{
	$x = $i * 0.05;
	$value = $x ** $exponent;
	printf "%d %.3f ", 5*$i, 100 - (100 * $value);
	if ($i % 5 == 4)
	{
		print "\n";
	}
}
print qq! 100 0" stroke="black" fill="none"/>\n!;

	
