var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var resetbutton = document.querySelector("#reset");
var p1dis = document.querySelector("#p1display");
var p2dis = document.querySelector("#p2display");
var numInput = document.querySelector("input");
var numDisplay = document.querySelector("#maxscore");
var p1score = 0;
var p2score = 0;
var gameover = false;
var winningscore = 5;

p1button.addEventListener("click",function(){
    if (!gameover)
    {
        p1score++;
        if(p1score>=winningscore)
        {
            gameover = true;
            p1dis.style.color = "blue";
        }
        p1dis.textContent = p1score;
    }
});

p2button.addEventListener("click",function(){
    if (!gameover)
    {
        p2score++;
        if(p2score>=winningscore)
        {
            gameover = true;
            p2dis.style.color = "blue";
        }
        p2dis.textContent = p2score;
    }
});

resetbutton.addEventListener("click",reset);

numInput.addEventListener("change",function(){
    var new_max = numInput.value;
    numDisplay.textContent = new_max;
    winningscore = Number(new_max);
    reset();
});


function reset()
{
    p1score = 0;
    p2score = 0;
    p1dis.textContent = p1score;
    p2dis.textContent = p2score;
    gameover = false;
    p2dis.style.color = "black";
    p1dis.style.color = "black";
}