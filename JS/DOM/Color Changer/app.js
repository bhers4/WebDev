document.body.style.background = "white";
var button = document.querySelector("button");
button.addEventListener("click",changecolor);


function changecolor()
{
    // Could do document.body.classList.toggle("[class here]");
    if (document.body.style.background=="white")
    {
        document.body.style.background = "blue";
    }
    else
    {
        document.body.style.background = "white";
    }
}