var valid;
var initConsStr, finalConsStr, vowelStr;
var cLetters, vLetters;
var letterArray;
var syllimg, syllStr;
var currSyll, syllStage;
var c1str, vstr, c2str;
var ascii;
var displayDest, syllPrefix;

var MAXSYLL;

function resetInput()
{
    var i, str;

    for (i=0; i<MAXSYLL; i++)
    {
        syllimg[i] = 0;
        syllStr[i] = "";
        str = "document." + displayDest + i;
        if (eval(str))
        {
            str += ".src=\"" + syllPrefix + "/ltr/null.gif\"";
            eval( str );
        }
    }
    currSyll = 0;
    syllStage = 0;
    c1str = vstr = c2str = "";
}

function initInput( pfx, screen )
{
    valid = new Array(19);
    letterArray = new Array( 1, 2, 4, 7, 8, 9, 17, 18, 19, 21, 22, 23, 24, 25, 26,
        27, 28, 29, 30 );

    syllPrefix = pfx;
    displayDest = screen;

    cLetters = "kntrmps@jch'";
    vLetters = "aeiowy";
    MAXSYLL = 6;
    
    syllimg = new Array( MAXSYLL );
    syllStr = new Array( MAXSYLL );
    resetInput();
    
    initConsStr = "k../kk./n../t../tt./r../m../p../pp./s../ss./@../j../jj./c#./" +
        "k#./t#./p#./h../";
    endConsStr = ".../k../kk./ks./n../nj./nh./t../r../rk./rm./rp./rs./rt#/rp#/rh./" +
        "m../p../ps./s../ss./@../c../c#./k#./t#./p#./h../";
    vowelStr = "a../ae./ya./yae/eo./e../yeo/ye./o../wa./wae/oe./yo./u../weo/" +
        "we./wi./yu./eu./yi./i../";
    
    ascii = "@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_";
    valid[0] =
        "LSXG_ORD@[PFHP@J@QB@@@CDZAWSXQ@F\\AZL@[QDHPAH@YFT]LCDJAU@HQ@B" +
        "LARD@ZPDHPAH@YGP]LCDH@C@H@@@PARD@Z@DHP@@@YG@MHB@@@@@LSHFV";
    valid[1] =
        "NQHF\\IRD@[PF@P@@@@@@@@CTHAW@LP@DTABD@CAD@@@@@YJ@MNC@H@C@L@@@" +
        "DABD@XPD@@@@@YB@]LB@H@C@LQ@FHABD@X@D@@@@@YJP]HP@@@@@LQ@FT";
    valid[2] =
        "NSXF_KRD@[PFHPBB@@@@@@CLKAW@\\Q@F\\ARD@YRDH@@@@YBPMHNDH@B@@@@@" +
        "@ABD@Z@FHPAJ@YF@MHB@@@B@H@@@@ABD@X@F@PCB@YCPMLJDH@@@LQHFT";
    valid[3] =
        "NS\\N_CRD@[PD@@@@@@@@@@CT[AUILQ@F\\ABD@APDH@@@@YFTMJRDH@@@H@@@" +
        "HABD@Z@D@@@@@YB@MHB@@@B@H@@@DABD@JPDHPBB@YFPMHB@@@@@LS@F^";
    valid[4] =
        "LQ@F\\CRD@[P@@@@@@@@@@@CDKAW@\\Q@F\\A@@@A@@@@@@@YB@@HB@H@@@H@@@" +
        "@AB@@@@@@@@@@YB@XH@@@@@@H@@@@ABD@XP@@@@@@YF@M@BDHAP@HQ@FT";
    valid[5] =
        "LQ@F^GRD@[PFH@@J@@@@@@CDHAW@\\Q@FTARD@[PDH@AH@YB@MHBD@@A@@@@@" +
        "HABD@ZPDHPAJ@YB@MHB@@@B@H@@@@ARD@RPFHPCJ@YB@MLX@@@@@LQ@FT";
    valid[6] =
        "LWXFVKRD@[XF@P@B@@@@@@CDJAUP\\Q@F\\ARD@CTD@@@@@[BPMHBD@@C@@@@@" +
        "@ABD@JPDHPAH@]GPMHVDH@T@H@@@@ABD@@@DHPBH@QB@I@@@@@@@LSHF]";
    valid[7] =
        "OS\\FTIRD@[QFH@A@@@@@@@CDZAUPLS@F\\ARD@KQDH@@@@]B@MHBD@@B@H@@@" +
        "HARD@X@DH@@@@YGPMHZ@H@B@H@@@@ARD@@PDHPBJ@YB@M@@@@@@@LQHFW";
    valid[8] =
        "LQHF\\CRD@[PF@@B@@@@@@@CDXAG@H@@@DAP@@[P@@@@@@YB@LH@@@@@@@@@@" +
        "@A@@@@@D@@@B@YB@IH@@@@@@@@@@@@@@@@@D@@@B@QB@L@@@@@@@LQ@FT";
    valid[9] =
        "MSXF\\IRD@[PFHPCJ@QB@HHC\\[AWALQ@F\\ARD@[PDHP@B@]BPMHSDH@A@HQ@D" +
        "XABD@Z@FHPCJ@YF@MJZ@@@B@LQ@DDARD@ZPF@PBJ@YC@MH@@@@@@LS@NT";
    valid[10] =
        "MQ@FLCRD@YP@@@@B@@@@@@CDJAS@HQ@@@@@@@@@@H@@@@YFPLHCD@@B@H@@@" +
        "HABD@X@D@@@@@YB@LHB@@@B@H@@@@AB@@@@@@@@B@YBP\\@BDHA@@LQ@FT";
    valid[11] =
        "L]XN\\MRD@[PFHRCJEQB@D@CF^A_ULQ@FTAZEP_Q\\HPCL@YCT]JCDHAW@LP@D" +
        "TARD@ZPFHPCJ@YCPMHCDHAS@LQ@FDARD@ZPFHPCJPYBAMO^DHAD@LQXN^";
    valid[12] =
        "LWHF^ARD@[PFJPBB@QB@@@CDJAUPLQ@FTABD@YPD@@@@@YBPMNG@H@U@H@@@" +
        "LABD@ZPFH@@B@YCPMHB@@@B@H@@@@ARD@Z@DHPB@@YB@MH@@@@@@LSHFV";
    valid[13] =
        "LUDF\\ARD@[PDH@@B@@@@@@CDHAW@H@@@DA@@@A@@@@@@@YB@MJC@H@B@H@@@" +
        "HABD@X@@@@@B@YB@LHB@@@C@@@@@@A@@@@@D@@@@@P@@IH@@@@@@LQ@FF";
    valid[14] =
        "\\U@F^ARD@[PDJPBB@@@@@@CDHAW@LQ@FTAB@@A@DH@@B@YB@MHBDH@A@@@@@" +
        "@ABD@ZPD@@B@@YB@MHB@@@B@HP@@@ABD@ZPDHPBB@YB@MH@@@@@@LSPFT";
    valid[15] =
        "LQ@FTARD@[PF@@@B@@@@@@CDXAW@LQ@FTABD@[PD@@@@@YB@MHCDHAA@H@@@" +
        "DA@D@@@D@@@@@YB@MHBDH@A@H@@@DARD@ZPDHPB@@YB@LH@@@@@@LQ@FT";
    valid[16] =
        "LQPF\\ARD@[PD@@@B@@@@@@CDJAW@LQ@FTAB@@A@DH@@@@YB@MHJD@@@@H@@@" +
        "@AB@@BPD@@@@@YB@MHB@@@B@H@@@@ARD@XPDHPBB@YFPM@BDHAP@LQ@FT";
    valid[17] =
        "NQHF\\IRD@[PF@@@@@@@@@@CDHAW@LQ@FTABD@YPD@PAH@YB@MHB@@@A@@@@@" +
        "@AB@@@@DHPAH@YFPMHB@@@A@@@@@@ABD@R@DHPBJ@QB@M@@@@@@@LQ@FT";
    valid[18] =
        "LQAFTARD@[PD@@@B@@@@@@CDJAU@LQ@FTARD@[PDHPA@@YBBMHSDH@E@LP@@" +
        "TARD@JPDHPAH@YBBIHBDHAA@LQ@@DARD@ZPFHPBJ@YO@MHRDHAQ@LQ@FT";
}

function findImageNumber( cons1, vowel, cons2 )
{
    var c1, v, c2;
    
    n = 0;
    c1 = initConsStr.indexOf( cons1 );
    v = 0;
    c2 = 0;
    if (c1 >= 0)
    {
        c1 /= 4;
        if (vowel != "")
        {
            v = vowelStr.indexOf( vowel );
            if (v < 0)
            {
                return 0;
            }
            v /= 4;

            if (cons2 != "")
            {
                c2 = endConsStr.indexOf( cons2 );
                if (c2 < 0)
                {
                    return 0;
                }
                c2 /= 4;
            }
            n = c1 * 588 + v *28 + c2 + 1;
        }
        else
        {
            return -(letterArray[c1]);
        }
    }
    return n;
}

function displaySyllable( n )
{
    var str;
    
    str = "document." + displayDest + currSyll + ".src=\"" + syllPrefix;

    if (n < 0)
    {
        str += "/ltr/l" + (-n) + ".gif";
    }
    else if (n > 0)
    {
        str += "/c" + (Math.floor( n / 588 ) + 1) + "/s" + n + ".gif";
    }
    else
    {
        str += "ltr/inv.gif";
    }
    str += "\";";
    eval(str);
}

function newSyllable()
{
    currSyll++;
    c1str = vstr = c2str = "";
    syllStage = 0;
}

function makeInput( str )
{
}

function erase()
{
    var temp;

    if (syllStage == 0)
    {
        if (currSyll > 0)
        {
            currSyll--;
            /* figure out how many stages we have */
            syllStage = Math.floor(syllStr[currSyll].length / 4);
        }
        else
        {
            return;
        }
    }
    temp = "document." + displayDest + currSyll + ".src='" + syllPrefix + "/ltr/null.gif'";
    eval(temp);
    syllStage--;
    syllStr[currSyll] = syllStr[currSyll].substring( 0, syllStage * 4 );
    if (syllStage != 0)
    {
        temp = syllStr[currSyll].split("/");
        c1str = temp[0];
        vstr = ( temp[1] ) ? temp[1] : "";
        c2str = ( temp[2] ) ? temp[2] : "";
        temp = syllimg[currSyll] = findImageNumber( c1str, vstr, c2str );
        displaySyllable( syllimg[currSyll] );
    }
    else
    {
        syllimg[currSyll] = 0;
        syllStr[currSyll] = "";
        c1str = vstr = c2str = "";
    }
}

function addLetter( str )
{
    var n, page, bit, c;

    if (currSyll > MAXSYLL)
    {
        return;
    }
    
    if (syllStage == 0)
    {
        n = findImageNumber( str, "", "" );
        c1str = str;
    }
    else if (syllStage == 1)
    {
        n = findImageNumber( c1str, str, "" );
        vstr = str;
    }
    else
    {
        n = findImageNumber( c1str, vstr, str );
        c2str = str;
    }

    /* now test to see if it's actually a valid syllable */
    if (n > 0)
    {
        page = Math.floor( n / 588 );
        c = valid[page].charAt( Math.floor( n % 588 / 5) );
        bit = 4 - ((n % 588) % 5);
        c = ascii.indexOf( c );
        c = (c >> bit) & 0x01;
        if (c == 0)
        {
            n = 0;
        }
    }
    
    if (n != 0)
    {
        displaySyllable( n );
        syllStr[ currSyll ] = c1str + "/" + vstr + "/" + c2str + "/";
        syllimg[ currSyll ] = n;
        syllStage++;
        if (syllStage == 3)
        {
            newSyllable();
        }
    }
}
