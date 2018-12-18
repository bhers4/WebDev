var colors = generatecolors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = colors[pickColor()];
var rgbdisplay = document.querySelector("#rgbdisplay");
var messagedisplay = document.querySelector("#message");
var headerdisplay = document.querySelector(".headergame");
var newcolorsbutt = document.querySelector("#NewColors");
var default_color = "#232323";
var temp_color = 0;

rgbdisplay.textContent = pickedColor;
newcolorsbutt.addEventListener("click",function(){
   reset_all(6);
});

for(var i=0;i<squares.length;i++)
{
    // Add initial colors
    squares[i].style.backgroundColor = colors[i];
    // Add click listeners
    squares[i].addEventListener("click",function() {
        var clickedcolor = this.style.backgroundColor;
        if (clickedcolor===pickedColor)
        {
            // console.log("Correct");
            messagedisplay.textContent = "Correct";
            changecolors(pickedColor);
            newcolorsbutt.textContent = "Play Again?";
        }
        else
        {
            // console.log("Incorrect");
            messagedisplay.textContent = "Try Again";
            this.style.backgroundColor = "#232323";
        }
    });

}

function changecolors(color)
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor = color;
    }
    headerdisplay.style.backgroundColor = color;
}

function pickColor()
{
    return Math.floor(Math.random()*colors.length);
}

function generatecolors(num)
{
    var i;
    var arr = [];
    for (i=0;i<num;i++)
    {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor()
{
    var r_color = Math.floor(Math.random()*256);
    var g_color = Math.floor(Math.random()*256);
    var b_color = Math.floor(Math.random()*256);
    return "rgb(" + r_color + ", " + g_color + ", " + b_color + ")";
}

function reset_all(num)
{
    colors = generatecolors(num);
    for(var i=0;i<colors.length;i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }
    temp_color = pickColor();
    pickedColor = colors[temp_color];
    rgbdisplay.textContent = pickedColor;
    headerdisplay.style.backgroundColor = default_color;
    newcolorsbutt.textContent = "New Colors";
    messagedisplay.textContent = "Pick a Color";
}