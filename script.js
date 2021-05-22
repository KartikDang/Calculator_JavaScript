
function clearDisplay()
{
    document.querySelector(".outputWindow h3").innerHTML="0";
   
}

document.querySelector(".clear").addEventListener("click",clearDisplay);

function removeZero()
{
    var v=document.querySelector(".outputWindow h3").innerHTML;
    if(v=="0")
    {
        v=" ";
        document.querySelector(".outputWindow h3").innerHTML=v;
    }
}

function toDisplay(n)
{
    removeZero();
    document.querySelector("h3").innerHTML+=n;
}

function Solve()
{
    removeZero();
    var a=document.querySelector(".outputWindow h3").innerHTML;
    var ans=eval(a);
    document.querySelector(".outputWindow h3").innerHTML=ans;
}

document.addEventListener("keydown",function(event)
{   
    console.log(event);
    var b=event.key;
    if(b>=0)
    {
        toDisplay(b);
    }

    else if(b==="Backspace")
    {
        clearDisplay();
    }

    if(b=="+"||b=="-"||b=="="||b=="/"||b=="*"||b==".")
    {
        toDisplay(b);
    }

    if(b=="Enter")
    {
        Solve();
    }
    
});

function buttonAnimation(value)
{
    document.querySelector("."+value).classList.add("pressed");

    setTimeout(function()
    {
        document.querySelector("."+value).classList.remove("pressed");
    },70);
}
