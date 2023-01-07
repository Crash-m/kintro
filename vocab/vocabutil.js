var currField = -1;

function doSound( n, str )
{
    var txt = document.getElementById("text" + n);
    str = "../snd/vocsnd/" + str;
    top.ExtSound( str );
    if (currField != -1)
    {
        txt.value="";
    }
    currField = -1;
}

function xlate( n, english )
{
    var str;
    var txt;
    document.getElementById("text" + n).innerText = english;
}
