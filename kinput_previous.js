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
    var i, str, img;

    for (i=0; i<MAXSYLL; i++)
    {
        syllimg[i] = 0;
        syllStr[i] = "";
        img = document.getElementById(displayDest + i);
        if (img != null)
        {
            img.src = syllPrefix + "/ltr/null.png";
        }
    }
    currSyll = 0;
    syllStage = 0;
    c1str = vstr = c2str = "";
}

function resetAnswer(dest)
{
    var i, str, img;

    for (i=0; i<MAXSYLL; i++)
    {
        img = document.getElementById(dest + i);
        if (img != null)
        {
            img.src = syllPrefix + "/ltr/null.png";
        }
    }
}

function initInput(pfx, screen, max)
{
    syllPrefix = pfx;
    displayDest = screen;

    MAXSYLL = max;
    
    syllimg = new Array(MAXSYLL);
    syllStr = new Array(MAXSYLL);
    resetInput();
    initConsStr = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
    endConsStr = "ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
    vowelStr = "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅣㅢ";
    /*
    initConsStr = "k../kk./n../t../tt./r../m../p../pp./s../ss./@../j../jj./c#./" +
        "k#./t#./p#./h../";
    endConsStr = ".../k../kk./ks./n../nj./nh./t../r../rk./rm./rp./rs./rt#/rp#/rh./" +
        "m../p../ps./s../ss./@../c../c#./k#./t#./p#./h../";
    vowelStr = "a../ae./ya./yae/eo./e../yeo/ye./o../wa./wae/oe./yo./u../weo/" +
        "we./wi./yu./eu./yi./i../";
    */
    /*
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
    */
}

function findUnicode(cons1, vowel, cons2)
{
    var c1;
    var v;
    var c2;
    
    n = 0;
    c1 = initConsStr.indexOf(cons1);
    v = 0;
    c2 = 0;
    
    if (vowel != "") {
        v = vowelStr.indexOf(vowel);
    }
    
    if (cons2 != "") {
        c2 = endConsStr.indexOf(cons2);
    }
    
    console.log(c1, v, c2);
    if (c1 >= 0 && v >= 0 && c2 >= 0)
    {
        if (vowel != '' && cons2 != '')
        {
            result = String.fromCharCode(0xac00 + c1 * 588 + v *28 + c2 + 1);
        }
        else
        {
            result = cons1;
        }
    }
    else
    {
        result = ''; // something is not valid in this string.
    }
    return result;
}


function newSyllable()
{
    if (syllStage != 0)
    {
        currSyll++;
        c1str = vstr = c2str = "";
        syllStage = 0;
    }
}

function seedInput(str)
{
    var i, temp, c, delim, n;

    if (seedInput.arguments.length == 1)
    {
        currSyll = 0;
    }
    else
    {
        currSyll = seedInput.arguments[1];
        if (syllStage != 0)
        {
            currSyll++;
        }
    }
    syllStage = 0;
    
    delim = ".../";
    i = 0;
    while (i < str.length)
    {
        /* collect first consonant */
        c1str = "";
        while (i < str.length)
        {
            c = str.charAt(i);
            if (c == "'") { c = "#" };
            if (cLetters.indexOf(c) < 0)
            {
                break;
            }
            c1str += c;
            i++;
        }
        c1str += delim.substring(c1str.length, 4);
        vstr = "";
        while (i < str.length)
        {
            c = str.charAt(i);
            if (vLetters.indexOf(c) < 0)
            {
                break;
            }
            vstr += c;
            i++;
        }
        vstr += delim.substring(vstr.length, 4);
        c2str = "";
        while (i < str.length)
        {
            c = str.charAt(i);
            if (c == "'") { c = "#" };
            if (cLetters.indexOf(c) < 0)
            {
                break;
            }
            c2str += c;
            i++;
        }
        if (c2str == "ng") {c2str = "@"};
        c2str += delim.substring(c2str.length, 4);
        n = findImageNumber(c1str, vstr, c2str);
        syllimg[currSyll] = n;
        syllStr[currSyll] = c1str + vstr + c2str;
        displaySyllable(n);
        currSyll++;
        if (c == '-')
        {
            i++;
        }
    }
}

function collectInput()
{
    var i, str, temp, c;

    str = "";
    i = 0;
    while ((i < MAXSYLL) && (syllimg[i] != 0))
    {
        temp = syllStr[i];
        if (temp != " ")
        {
            for (j=0; j<temp.length; j++)
            {
                c = temp.charAt(j);
                if (c != "." && c != "/")
                {
                    if (c == "#") {c = "'"};
                    str += c;
                }
            }
            i++;
            if (syllimg[i] > 0 && syllimg[i] != 32767)
            {
                str += "-";
            }
        }
        else
        {
            str += " ";
            i++;
        }
    }
    return str;
}

function setsyll(n)
{
    currSyll = n;
    syllStage = Math.floor(syllStr[currSyll].length / 4);
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
    document.getElementById(displayDest + currSyll).src =
        syllPrefix + "/ltr/null.png";
    if (syllStr[currSyll] != " ")
    {
        syllStage--;
        syllStr[currSyll] = syllStr[currSyll].substring(0, syllStage * 4);
    }
    if (syllStage != 0)
    {
        temp = syllStr[currSyll].split("/");
        c1str = temp[0];
        vstr = (temp[1]) ? temp[1] : "";
        c2str = (temp[2]) ? temp[2] : "";
        temp = syllimg[currSyll] = findImageNumber(c1str, vstr, c2str);
        displaySyllable(syllimg[currSyll]);
    }
    else
    {
        syllimg[currSyll] = 0;
        syllStr[currSyll] = "";
        c1str = vstr = c2str = "";
    }
}

function backup(str)
{
    var c, s, n;

    s = syllStr[currSyll - 1];

    n = 0;
    
    if (s.length  == 12)    // good; we can possibly add
    {
        c = s.substring(8, 11); // get the last consonant
        if (initConsStr.indexOf(c) >= 0)
        {
            n = findImageNumber(c, str, "");
            if (n != 0)
            {
                currSyll--;
                syllStage = 3;
                erase();
                currSyll++;
                c1str = c;
                vstr = str;
                syllStage = 1;
            }
        }
    }
    return n;
}

function addLetter(str)
{
    var n, page, bit, c, v;

    if (currSyll > MAXSYLL-1)
    {
        return;
    }

    if (str == "...")
    {
        newSyllable();
        syllStr[ currSyll ] = " ";
        syllimg[ currSyll ] = 32767;
        if (currSyll <= MAXSYLL - 1)
        {
            syllStage = 3; // to fake out next line
            newSyllable();
        }
    }
    if (syllStage == 0)
    {
        if (vowelStr.indexOf(str) >= 0 && currSyll > 0)
        {
            n = backup(str);
        }
        else
        {
            n = findImageNumber(str, "", "");
            c1str = str;
        }
    }
    else if (syllStage == 1)
    {
        n = findImageNumber(c1str, str, "");
        vstr = str;
    }
    else
    {
        n = findImageNumber(c1str, vstr, str);

        if (n != 0)
        {
            c2str = str;
        }
    }

    /* now test to see if it's actually a valid syllable */
    if (n > 0)
    {
        page = Math.floor(n / 588);
        c = valid[page].charAt(Math.floor(n % 588 / 5));
        bit = 4 - ((n % 588) % 5);
        c = ascii.indexOf(c);
        c = (c >> bit) & 0x01;
        if (c == 0)
        {
            n = 0;
        }
    }
    
    if (n == 0 && syllStage == 2)   // last consonant was illegal.
    {
        n = findImageNumber(str, "", "");  // could it begin next syll?

        if (n != 0 && currSyll < MAXSYLL-1)
        {
            c1str = str;
            vstr = "";
            c2str = "";
            currSyll++;
            syllStage = 0;
        }
        else
        {
            n = 0;
        }
    }

    if (n != 0)
    {
        displaySyllable(n);
        syllStr[ currSyll ] = c1str + "/" + vstr + "/" + c2str + "/";
        syllimg[ currSyll ] = n;
        syllStage++;
        if (syllStage == 3)
        {
            newSyllable();
        }
    }
}
