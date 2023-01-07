
var MOVE = 0;
var DRAW = 1;
var DRAWQ = 2;
var CIRCLE = 3;
var PAUSE = 4;
var END = -1;
var BASE_W = 24;
var BASE_H = 24;

var kVector = [
    [    /* k */
        MOVE, 4, 6,
        DRAW, 17, 6,
        DRAW, 17, 18,
        END
    ],
    [    /* n */
        MOVE, 6, 8,
        DRAW, 6, 16,
        DRAW, 19, 16,
        END
    ],
    [    /* t */
        MOVE, 6, 7,
        DRAW, 18, 7,
        PAUSE, 400,
        MOVE, 6, 7,
        DRAW, 6, 17,
        DRAW, 18, 17,
        END
    ],
    [    /* r */
        MOVE, 5, 6,
        DRAW, 15, 6,
        DRAW, 15, 11,
        PAUSE, 400,
        MOVE, 5, 11,
        DRAW, 17, 11,
        PAUSE, 400,
        MOVE, 5, 11,
        DRAW, 5, 18,
        DRAW, 18, 18,
        END
    ],
    [
        /* m */
        MOVE, 6, 6,
        DRAW, 6, 16,
        PAUSE, 400,
        MOVE, 6, 6,
        DRAW, 16, 6,
        DRAW, 16, 16,
        PAUSE, 400,
        MOVE, 6, 16,
        DRAW, 16, 16,
        END
    ],
    [
        /* p */
        MOVE, 8, 5,
        DRAW, 8, 17,
        PAUSE, 400,
        MOVE, 18, 5,
        DRAW, 18, 17,
        PAUSE, 400,
        MOVE, 8, 10,
        DRAW, 18, 10,
        PAUSE, 400,
        MOVE, 8, 17,
        DRAW, 18, 17,
        END
    ],
    [
        /* s */
        MOVE, 11, 6,
        DRAW, 4, 18,
        PAUSE, 400,
        MOVE, 10, 9,
        DRAW, 19, 18,
        END
    ],
    [
        /* ieung */
        CIRCLE, 11, 12, 6,
        END
    ],
    [
        /* ch */
        MOVE, 4, 6,
        DRAW, 17, 6,
        DRAW, 15, 9,
        DRAW, 5, 18,
        PAUSE, 400,
        MOVE, 11, 12,
        DRAW, 19, 18,
        END
    ],
    [    /* ch' */
        MOVE, 8, 5,
        DRAW, 14, 5,
        PAUSE, 400,
        MOVE, 4, 7,
        DRAW, 17, 7,
        DRAW, 15, 9,
        DRAW, 5, 18,
        PAUSE, 400,
        MOVE, 11, 12,
        DRAW, 19, 18,
        END
    ],
    [    /* k' */
        MOVE, 5, 6,
        DRAW, 17, 6,
        DRAW,    17, 18,
        PAUSE, 400,
        MOVE, 3, 12,
        DRAW, 17, 12,
        END
    ],
    [    /* t' */
        MOVE, 6, 7,
        DRAW, 18, 7,
        PAUSE, 400,
        MOVE, 6, 12,
        DRAW, 16, 12,
        PAUSE, 400,
        MOVE, 6, 7,
        DRAW, 6, 17,
        DRAW, 18, 17,
        END
    ],
    [    /* p' */
        MOVE, 5, 6,
        DRAW, 18, 6,
        MOVE, 7, 9,
        DRAW, 9, 14,
        MOVE, 16, 9,
        DRAW, 14, 17,
        MOVE, 4, 17,
        DRAW, 19, 17,
        END
    ],
    [    /* h */
        MOVE, 8, 5,
        DRAW, 14, 6,
        MOVE, 3, 9,
        DRAW, 20, 9,
        CIRCLE, 12, 15, 4,
        END
    ],
    [
        /* a */
        MOVE, 12, 2,
        DRAW, 12, 21,
        MOVE, 12, 12,
        DRAW, 17, 12,
        END
    ],
    [
        /* ae */
        MOVE, 8, 4,
        DRAW, 8, 19,
        MOVE, 8, 12,
        DRAW, 13, 12,
        MOVE, 13, 2,
        DRAW, 13, 21,
        END
    ],
    [
        /* ya */
        MOVE, 12, 2,
        DRAW, 12, 21,
        MOVE, 12, 9,
        DRAW, 17, 9,
        MOVE, 12, 14,
        DRAW, 17, 14,
        END
    ],
    [
        /* ye */
        MOVE, 8, 5,
        DRAW, 8, 19,
        MOVE, 8, 9,
        DRAW, 12, 9,
        MOVE, 8, 14,
        DRAW, 12, 14,
        MOVE, 12, 2,
        DRAW, 12, 21,
        END
    ],
    [
        /* eo */
        MOVE, 8, 12,
        DRAW, 16, 12,
        MOVE, 16, 3,
        DRAW, 16, 21,
        END
    ],
    [
        /* e */
        MOVE, 6, 11,
        DRAW, 11, 11,
        MOVE, 11, 4,
        DRAW, 11, 19,
        MOVE, 16, 2,
        DRAW, 16, 21,
        END
    ],
    [
        /* yeo */
        MOVE, 8, 8,
        DRAW, 16, 8,
        MOVE, 8, 13,
        DRAW, 16, 13,
        MOVE, 16, 2,
        DRAW, 16, 22,
        END
    ],
    [
        /* ye */
        MOVE, 6, 9,
        DRAW, 11, 9,
        MOVE, 6, 13,
        DRAW, 11, 13,
        MOVE, 11, 4,
        DRAW, 11, 19,
        MOVE, 16, 2,
        DRAW, 16, 21,
        END
    ],
    [
        /* o */
        MOVE, 12, 7,
        DRAW, 12, 15,
        MOVE, 2, 15,
        DRAW, 21, 15,
        END
    ],    
    [
        /* wa */
        MOVE, 9, 7,
        DRAW, 9, 15,
        MOVE, 2, 15,
        DRAW, 17, 15,
        MOVE, 17, 2,
        DRAW, 17, 21,
        MOVE, 17, 11,
        DRAW, 21, 11,
        END
    ],
    [
        /* wae */
        MOVE, 9, 7,
        DRAW, 9, 15,
        MOVE, 2, 15,
        DRAW, 17, 15,
        MOVE, 17, 2,
        DRAW, 17, 21,
        MOVE, 17, 11,
        DRAW, 21, 11,
        MOVE, 21, 2,
        DRAW, 21, 21,
        END
    ],    
    [
        /* we */
        MOVE, 9, 7,
        DRAW, 9, 15,
        MOVE, 2, 15,
        DRAW, 17, 15,
        MOVE, 17, 2,
        DRAW, 17, 21,
        END
    ],
    [
        /* yo */
        MOVE, 8, 10,
        DRAW, 8, 15,
        MOVE, 14, 8,
        DRAW, 14, 15,
        MOVE, 2, 15,
        DRAW, 21, 15,
        END
    ],
    [
        /* u */
        MOVE, 3, 8,
        DRAW, 21, 8,
        MOVE, 11, 8,
        DRAW, 11, 19,
        END
    ],
    [
        /* wo */
        MOVE, 2, 10,
        DRAW, 14, 10,
        MOVE, 8, 10,
        DRAW, 8, 19,
        MOVE, 11, 14,
        DRAW, 18, 14,
        MOVE, 18, 2,
        DRAW, 18, 21,
        END
    ],
    [
        /* we */
        MOVE, 2, 10,
        DRAW, 11, 10,
        MOVE, 7, 10,
        DRAW, 7, 18,
        MOVE, 10, 14,
        DRAW, 13, 14,
        MOVE, 13, 4,
        DRAW, 13, 19,
        MOVE, 18, 2,
        DRAW, 18, 21,
        END
    ],
    [
        /* wi */
        MOVE, 3, 12,
        DRAW, 15, 12,
        MOVE, 10, 12,
        DRAW, 10, 20,
        MOVE, 15, 2,
        DRAW, 15, 21,
        END
    ],
    [
        /* yu */
        MOVE, 2, 8,
        DRAW, 20, 8,
        MOVE, 8, 8,
        DRAW, 8, 17,
        MOVE, 15, 8,
        DRAW, 15, 20,
        END
    ],
    [
        /* uh */
        MOVE, 2, 11,
        DRAW, 21, 11,
        END
    ],
    [
        /* uhi */
        MOVE, 3, 13,
        DRAW, 16, 13,
        MOVE, 16, 3,
        DRAW, 16, 21,
        END
    ],
    [
        /* i */
        MOVE, 11, 2,
        DRAW, 11, 20,
        END
    ] 
];
    
var theLine = {
    x0: 0,
    y0: 0,
    x1: 0,
    y1: 0,
    x: 0,
    y: 0,
    xChange: 0,
    yChange: 0,
    dx: 0,
    dy: 0,
    now: null
};

var commands;
var cmdPos;
var ctx;

function incrementLine(timestamp)
{
    var m;
    var b;
    var finished = false;
    if (theLine.now == null) {
        theLine.now = timestamp - 40;
    }
    if (timestamp - theLine.now > 40)
    {
        ctx.beginPath();
        ctx.moveTo(theLine.x, theLine.y);
        if (Math.abs(theLine.dx) > Math.abs(theLine.dy))
        {
            theLine.x += theLine.xChange;
            m = theLine.dy / theLine.dx
            b = theLine.y0 - m * theLine.x0;
            theLine.y = m * theLine.x + b;
            ctx.lineTo(theLine.x, theLine.y)
            if (Math.abs(theLine.x - theLine.x1) < Math.abs(theLine.xChange))
            {
                finished = true;
            }
        }
        else
        {
            theLine.y += theLine.yChange;
            m = theLine.dx / theLine.dy;
            b = theLine.x0 - m * theLine.y0;
            theLine.x = m * theLine.y + b;
            ctx.lineTo(theLine.x, theLine.y);
            if (Math.abs(theLine.y - theLine.y1) < Math.abs(theLine.yChange))
            {
                finished = true;
            }
        }
        ctx.stroke();
        theLine.now = timestamp;
   }
        if (!finished) {
            requestAnimationFrame(incrementLine);
        }
        else {
            theLine.x0 = theLine.x1;
            theLine.y0 = theLine.y1;
            requestAnimationFrame(followCommands);
        }
}

function slowLine()
{
    theLine.dx = theLine.x1-theLine.x0;
    theLine.dy = theLine.y1-theLine.y0;
    theLine.now = null;
    
    theLine.xChange = (theLine.dx > 0) ? 2 : -2;
    theLine.yChange = (theLine.dy > 0) ? 2 : -2;
    theLine.x = theLine.x0;
    theLine.y = theLine.y0;
    // console.log(theLine);
    requestAnimationFrame(incrementLine);
}


function drawChar(n)
{
    // console.log(n, kVector[n]);
    commands = kVector[n];
    cmdPos = 0;
    
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 100, 100);
    followCommands();
}

function followCommands()
{
    if (commands[cmdPos] == MOVE)
    {
        // console.log("MOVE", commands[cmdPos + 1], commands[cmdPos + 2]);
        theLine.x0 = commands[cmdPos + 1] * 3;
        theLine.y0 = commands[cmdPos + 2] * 3;
        cmdPos += 3;
        requestAnimationFrame(followCommands);
    }
    else if (commands[cmdPos] == DRAW)
    {
        // console.log("DRAW", commands[cmdPos + 1], commands[cmdPos + 2]);
        theLine.x1 = commands[cmdPos + 1] * 3;
        theLine.y1 = commands[cmdPos + 2] * 3;
        slowLine(ctx, commands, cmdPos);
        cmdPos += 3;
    }
    else if (commands[cmdPos] == CIRCLE)
    {
        cx = commands[cmdPos + 1] * 3;
        cy = commands[cmdPos + 2] * 3;
        r = commands[cmdPos + 3] * 3;
        ctx.beginPath();
        ctx.arc(cx, cy, r, -Math.PI/2, 3 * Math.PI / 2);
        ctx.stroke();
        cmdPos += 4;
        requestAnimationFrame(followCommands);
    }
    else if (commands[cmdPos] == PAUSE)
    {
        // console.log("PAUSE");
        cmdPos += 2;
        requestAnimationFrame(followCommands);
    }
    else if (commands[cmdPos] == END)
    {
        cmdPos += 1;
    }
}		
