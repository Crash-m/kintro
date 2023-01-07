#!/usr/bin/perl

opendir DIR, ".";
@filelist = readdir DIR;
closedir DIR;

foreach $file (@filelist)
{
	next if ($file !~ m/\.htm$/);
	
	open INFILE, $file;
	open OUTFILE, ">temp.txt";
	
	$buf = <INFILE>;
	if ($buf =~ m/^\<html\>/)
	{
		print "Processing $file\n";
		print OUTFILE <<"XHTML";
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html;charset=iso-8859-1" />
<link rel="stylesheet" type="text/css" href="../kstyle.css" />
XHTML
		while ($buf = <INFILE>)
		{
			$buf =~ s%align="absmiddle">%width="24" height="24" />%g;
			$buf =~ s/<table border>/<table border="1">/;
			$buf =~ s/align="center"/class="centered"/g;
			$buf =~ s/border="0"/class="noborder"/g;
			$buf =~ s/ bgcolor="#ffffff"//gi;
			$buf =~ s%language="javascript"%type="text/javascript"%gi;
			print OUTFILE $buf;
		}
		close INFILE;
		close OUTFILE;
		unlink $file;
		rename "temp.txt", $file;
	}
}
