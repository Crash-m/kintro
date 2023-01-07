var pageHREF = new Array
(
    "index.htm", "An Introduction to Korean",
    "cons1a.htm", "Consonants and Vowels",
    "syllable.htm", "The Mighty Syllable",
    "syll2.htm", "Stacking Syllables",
    "horzvwl.htm", "More Vowels",
    "decode1.htm", "Decoding a Word",
    "placehld.htm", "The Placeholder",
    "prac1.htm", "Practice Session #1",
    "fork.htm", "A Fork in the Road",
    "yvowel.htm", "\"Y-Vowels\"",
    "oddvowel.htm", "Odd Vowels Out",
    "smpvowel.htm", "Simple Vowel Summary",
    "prac2.htm", "Practice Session #2",
    "sndshft.htm", "Shifting Sounds",
    "snd2.htm", "Shifting Sounds (continued)",
    "snd3.htm", "The Shifting Placeholder",
    "snd4.htm", "More Consonants",
    "snd5.htm", "Samples of New Consonants",
    "end.htm", "End of Reading/Pronunciation Pages",
    "write1.htm", "Writing Korean - Stroke Order",
    "write2.htm", "Writing Korean Syllables",
    "write3.htm", "Writing Words"
);

var pageNumber;

function GoNext()
{
    if (pageNumber + 1 != pageHREF.length / 2)
    {
        pageNumber++;
        top.location.href = pageHREF[pageNumber * 2];
    }
}

function GoBack()
{
    if (pageNumber != 0)
    {
        pageNumber--;
        top.location.href = pageHREF[pageNumber * 2];
    }
}

function GoPage( pageN )
{
    pageNumber = pageN;
    top.location.href = pageHREF[pageNumber*2];
}

function GoIndex()
{
    pageNumber = 0;
    top.location.href = pageHREF[0];
}

function sync(pName)
{
    var loc, i, thePath;
    
    thePath = pName;
    i = thePath.lastIndexOf("/");

    if (i >= 0)
    {
        thePath = thePath.substring(i+1, thePath.length);
    }
                
    for (i=0; i < pageHREF.length; i+=2)
    {
        if (thePath == pageHREF[i])
        {
            pageNumber = i / 2;
            break;
        }
    }
    if (i >= pageHREF.length)
    {
        pageNumber = 0; // came here from implied index
    }
}
