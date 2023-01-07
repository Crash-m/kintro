function PlaySound( filename )
{
    var     d;

    /**********************************************************************
        The "embed" that we create will have attributes for both
        QuickTime (autoplay) and LiveAudio (autostart)
    ***********************************************************************/
    if (parseInt(navigator.appVersion) < 4)
    {
            d = top.soundFrame.document;
            d.open();
            d.writeln("<html><head></head><body bgcolor=\"#ffffff\">");
            d.writeln("<div align=\"center\">");
            d.writeln("<embed src=\"" + filename + "\" autostart=\"true\" ");
            d.writeln(" width=\"144\" height=\"40\" autoplay=\"true\" controls=\"smallconsole\">");
            d.writeln("</center>");
            d.writeln("</body></html>");
            d.close();
        }
        else
        {
            top.soundFrame.location.href = filename;
        }
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
        d.writeln("<embed src=\"" + filename + "\" autostart=\"true\" ");
        d.writeln(" width=\"144\" height=\"40\" autoplay=\"true\" controls=\"smallconsole\">");
        d.writeln("</center>");
        d.writeln("</body></html>");
        d.close();
        topw.focus();
    }
}
