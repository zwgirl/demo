#!/usr/bin/perl
#
#   @line_buffer is a global
#
@line_buffer = ( );

#
#	Input file PFILE is opened in main
#	part of program.
#
sub get_token
{
    my ($data);
    if ((scalar @line_buffer) == 0) # out of data?
    {
        $data = <PFILE>;            # grab a line
        $data =~ s/^\s+//;          # get rid of leading... 
        $data =~ s/\s+$//;          # ...and trailing whitespace
        @line_buffer = split /\s+/, $data;  # place tokens into a buffer
    }
    $data = shift @line_buffer;     # take one token out and return it
    return $data;
}

if (scalar @ARGV < 2) 
{
    print "Usage: $0 polygon_file width (decimals)\n";
    print "polygon_file - file in ARC/INFO ungenerate format\n";
    print "width - desired width of output SVG\n";
    print "decimals - optional # of decimal places to keep\n";
    print "Output SVG goes to standard output.\n";
    exit 0;
}

open PFILE, $ARGV[0] or die("Cannot open polygon file $ARGV[1]"); 

$width = $ARGV[1];
if ($width <= 0)
{
    die("Width must be greater than zero.");
}

$n_decimals =  ((scalar @ARGV) == 3) ? $ARGV[2] : 0;

#
#   Set maxima and minima 
#
$min_x = 1.0e100;
$min_y = 1.0e100;
$max_x = -1.0e100;
$max_y = -1.0e100;

undef @polygon_list; 

#
#   a file consists of a series of polygon numbers followed
#   by pairs of x-y coordinates. Each polygon is finished
#   by an END token, and the file is marked by an END token
#   instead of a polygon number
#
while (1)   
{
    $polygon_number = get_token();
    last if ($polygon_number =~ /END/);
    
    undef   @polygon;   # the storage area for this particular polygon
    
    while (1)
    {
        $x = get_token();
        last if ($x =~ /END/);
        $y = get_token();
        push @polygon, $x, $y;

        #
        # keep track of maximum and minimum coordinates
        #
        if ($x < $min_x) {$min_x = $x;}
        if ($x > $max_x) {$max_x = $x;}
        if ($y < $min_y) {$min_y = $y;}
        if ($y > $max_y) {$max_y = $y;}
    }
    
    push @polygon_list, [ @polygon ]; 

}

close PFILE;

print STDERR "max x=$max_x  min x=$min_x width=", $max_x-$min_x, "\n";
print STDERR "max y=$max_y  min y=$min_y height=", $max_y-$min_y, "\n";

#
#   Figure out the scaling factor to make the width equal to
#   the one specified on the command line, then find the
#   corresponding height.
#
$scale = $width / ($max_x - $min_x );
$height = ($max_y - $min_y) * $scale;

#
#   Round it up so viewport and viewBox are integral
#
$height = int ($height + 0.5);

#
#   Insert extra pixels for padding
#
$pad_width = $width + 30;
$pad_height = $height + 30;

#
#   Begin constructing the SVG file
#
print <<"SVG_HEADER";    
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"
    "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">

<svg width="$pad_width" height="$pad_height"
    viewBox="0 0 $pad_width $pad_height">
<title>Map constructed from $ARGV[0]</title>
<g transform="translate(15,15)" style="fill: none; stroke: black;">
SVG_HEADER

$poly_num = 1;
foreach $poly (@polygon_list)
{
    $n = 0;
    print qq%<polyline id="poly$poly_num" points="\n\t%;
    
    #
    #   get rid of first coordinate
    #
    shift @$poly;    
    shift @$poly;
    
    foreach $coord (@$poly)
    {
        if ($n % 2 == 0)    # x-coordinate
        {
            $coord = ($coord - $min_x) * $scale;
        }
        else                # flip y-coordinate
        {
            $coord = ($max_y - $coord) * $scale; 
        }
        if ($n_decimals != 0)
        {
            $coord = int($coord * (10**$n_decimals))/(10**$n_decimals);
        }
            
        print $coord, " ";
        
        #
        #   to avoid excessively long text lines, place only
        #   eight coordinates on a line
        #
        $n = ($n+1) % 8;
        print "\n\t" if ($n == 0);
    }
    print qq%" />\n%;    # close off the <path> element
    $poly_num++;
}

#
#   Close off open tags to end the file.
#
print "</g>\n</svg>\n";
