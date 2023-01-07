var jamo; // array of triple-arrays
var syllPrefix;
var outputElement;
var outputString;

var syllStage;
var currSyll;
var canMove; // OK to transfer previous syllable last jamo to current syllable first?

var initConsStr = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
var finalConsStr = "ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ"
var vowelStr= "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ";

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
    syllStage = 0;
    currSyll = 0;
    canMove = false;
    jamo = [['', '', '']];
    outputString = '';
    outputElement.innerText = outputString;
}

/*
 * prefix: initial value of string
 * elementId: id of the <span> where the output string will go
 * max: total allowable length of input (excluding prefix)
 */
function initInput(prefix, elementId, max)
{
    syllPrefix = prefix;
    outputElement = document.getElementById(elementId);

    MAXSYLL = max;

    syllStr = prefix;
    resetInput();
}

function findUnicode(triple)
{
    var cons1 = triple[0];
    var vowel = triple[1];
    var cons2 = triple[2];
    var code = 0;
    
    // console.log("Find unicode of",triple);
    
    if (cons1 == ' ')
    {
        result = ' ';
    }
    else
    {
        /* Numeric indices */
        var c1 = initConsStr.indexOf(cons1);
        var v = -1;
        var c2 = -1;

        
        if (vowel != "") {
            v = vowelStr.indexOf(vowel);
        }
        
        if (cons2 != "") {
            c2 = finalConsStr.indexOf(cons2);
        }

        if (c1 >= 0 && v < 0)
        {
            result = cons1;
        }
        else if (c1 >= 0 && v >= 0 && c2 < 0)
        {
            code = 0xac00 + c1 * 588 + v * 28
            result = String.fromCharCode(code);
        }
        else if (c1 >= 0 && v >= 0 && c2 >= 0)
        {
            code = 0xac00 + c1 * 588 + v * 28 + c2 + 1
            result = String.fromCharCode(code);
        }
        else
        {
            result = ''; // something is not valid in this string.
        }
    }
    // console.log("Find unicode result:", result, "code point", code, code.toString(16));
    return result;
}


function newSyllable()
{
    if (syllStage != 0)
    {
        if (currSyll < MAXSYLL)
        {
            currSyll++;
            jamo.push(['', '', '']);
            syllStage = 0;
            canMove = true;
        }
    }
}

function forceSyllableEnd() {
    newSyllable()
    canMove = false;
}


function updateString(start, end) {
    var base = syllPrefix.length;
    var newStr = '';

    for (var i = start; i <= end; i++)
    {
        newStr = newStr + findUnicode(jamo[i]);
    }
    outputString = outputString.slice(0, base + start) + newStr +
        outputString.slice(base + end + 1);
    outputElement.innerText = outputString;
}

function backspace()
{
    var triple;
    
    // if I'm at beginning of a syllable, back up one
    if (jamo[currSyll][0] == '')
    {
        if (currSyll > 0)
        {
            currSyll--;
        }
    }
    
    triple = jamo[currSyll];
    if (triple[2] != '')
    {
        triple[2] = '';
        syllStage = 2;
    }
    else if (triple[1] != '')
    {
        triple[1] = '';
        syllStage = 1;
    }
    else if (triple[0] != '')
    {
        triple[0] = '';
        syllStage = 0;
    }
    jamo[currSyll] = triple;
    updateString(currSyll, currSyll);
}
    /*

/*
 * Transfer previous syllable's last to this syllable's first,
 * then add a vowel. Returns true if transfer accomplished,
 * false otherwise
 */
function transfer(vowel)
{
    var consonant;
    var result = false;
    
    if (canMove)
    {
        consonant = jamo[currSyll - 1][2];
        if (initConsStr.indexOf(consonant) >= 0)
        {
            jamo[currSyll - 1][2] = '';
            jamo[currSyll][0] = consonant;
            jamo[currSyll][1] = vowel;
            result= true;
        }
    }
    return result;
}

function addLetter(str)
{
    // console.log("stage", syllStage, "adding", str, "current syllable #", currSyll, jamo[currSyll]);
    if (currSyll < MAXSYLL)
    {
        /* If consonant, add; if vowel, see if you can
         * transfer previous syllable's last consonant
         */
        if (str == ' ')  // blank is a special case
        {
            forceSyllableEnd();          
            jamo[currSyll][0] = ' ';
            syllStage = 2;
            updateString(currSyll, currSyll);
            forceSyllableEnd();
        }
            
        else if (syllStage == 0)
        {
            if (initConsStr.indexOf(str) >= 0)
            {
                jamo[currSyll][0] = str;
                updateString(currSyll, currSyll);
                syllStage = 1;
            }
            else if (vowelStr.indexOf(str) >= 0)
            {
                if (canMove && transfer(str))
                {
                    updateString(currSyll - 1, currSyll);
                    syllStage = 2;
                }
                else
                {
                    jamo[currSyll][0] = 'ㅇ';
                    jamo[currSyll][1] = str;
                    updateString(currSyll, currSyll);
                    syllStage = 2;
                }
            }
        }
        else if (syllStage == 1)
        {
            if (vowelStr.indexOf(str) >= 0)
            {
                jamo[currSyll][1] = str;
                updateString(currSyll, currSyll);
                syllStage = 2;
            }
        }
        else {
            if (finalConsStr.indexOf(str) >= 0)
            {
                jamo[currSyll][2] = str;
                updateString(currSyll, currSyll);
                if (currSyll < MAXSYLL) {
                    newSyllable();
                }
            }
            else if (initConsStr.indexOf(str) >= 0 && currSyll < MAXSYLL)
            {
                newSyllable();
                jamo[currSyll][0] = str;
                updateString(currSyll, currSyll)
                syllStage = 1;
            }
            else if (vowelStr.indexOf(str) >= 0 && currSyll < MAXSYLL)
            {
                newSyllable();
                jamo[currSyll][0] = 'ㅇ';
                jamo[currSyll][1] = str;
                updateString(currSyll - 1, currSyll);
            }
        }
    }
}
