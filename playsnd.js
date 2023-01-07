/*
<object type="audio/x-wav" data="data/test.wav" width="200" height="20">
  <param name="src" value="data/test.wav">
  <param name="autoplay" value="false">
  <param name="autoStart" value="0">
  alt : <a href="data/test.wav">test.wav</a>
</object>
*/
function PlaySound( filename )
{
    var     d;

    d = top.soundFrame.document;
    d.open();
    d.write('<object type="audio/x-wav" data="' + filename + '" ');
    d.writeln( 'height="40" width="144">');
    d.writeln('<param name="src" value="data/test.wav" />');
    d.writeln('<param name="autoplay" value="true" />');
    d.writeln('<param name="autoStart" value="1" />');
    d.writeln('alt : <a href="' + filename + '">test.wav</a>');
    d.writeln('</object>');
}

function ExtSound( filename )
{
    var     d, w, topw;

    /**********************************************************************
        The "embed" that we create will have attributes for both
        QuickTime (autoplay) and LiveAudio (autostart)
    ***********************************************************************/
    topw = top;
    w = top.open("", "soundWindow", "width=150,height=50");
    if (parseInt(navigator.appVersion) > 3)
    {
        w.location.href = filename;
        topw.focus();
    }
    else
    {
        d = w.document;
        d.open();
        d.writeln("<html><head></head><body bgcolor=\"#ffffff\">");
        d.writeln("<div align=\"center\">");
        d.write('<object type="audio/x-wav" data="' + filename + '" ');
        d.writeln( 'height="40" width="144">');
        d.writeln('<param name="src" value="data/test.wav" />');
        d.writeln('<param name="autoplay" value="true" />');
        d.writeln('<param name="autoStart" value="1" />');
        d.writeln('alt : <a href="' + filename + '">test.wav</a>');
        d.writeln('</object>');
        d.writeln("</div>");
        d.writeln("</body></html>");
        d.close();
        topw.focus();
    }
}
