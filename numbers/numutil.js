/*********************************************************************
    mixes up n elements of nArray starting at element startAt
**********************************************************************/
function shuffle( nArray, startAt, n )
{
    var i, j, swap;
    
    for (i = startAt; i < startAt + n; i++)
    {
        j = startAt + Math.round(Math.random() * (n - 1));
        swap = nArray[i];
        nArray[i] = nArray[j];
        nArray[j] = swap;
    }
}

var sinoOnes = new Array(
    "",
    "일",
    "이",
    "삼",
    "사",
    "오",
    "육",
    "칠",
    "팔",
    "구"
);

var powerStr = new Array(
    "일",
    "십",
    "백",
    "천",
    "만"
);

var hourOnesPlace = new Array(
    "",
    "한",
    "두",
    "세",
    "네",
    "다섯",
    "여섯",
    "일곱",
    "여덟",
    "아홉"
);

var onesPlace = new Array(
    "",
    "하나",
    "둘",
    "셋",
    "넷",
    "다섯",
    "여섯",
    "일곱",
    "여덟",
    "아홉"
);

var tensPlace = new Array(
    "",
    "열",
    "스물",
    "서른",
    "마흔",
    "쉰",
    "예순",
    "일흔",
    "여든",
    "아흔"
);

function setup()
{
    problemNumber = 0;
    score = 0;
    nTries = 0;
    initialize();
    congrats = new Array(
        "Yes, that's it.",
        "Quite right!",
        "That's exactly it.",
        "Very good.",
        "You got it right.",
        "Excellent.",
        "Good work." );
}


function nextProblem()
{
    problemNumber++;
    if (problemNumber == maxProblem)
    {
        top.location.href = nextPageHref;
    }
    else
    {
        goProblem();
    }
}

function setText(id, content)
{
    document.getElementById(id).innerText = content;
}

