var Hr = 0;
var Min = 0;
var Sec = 0;
var Count = 0;

var timer = false;

function Start()
 {
    timer = true;
    Stopwatch();
 }

 function Stop()
 {
    timer = false;
 }

 function Reset()
 {
    timer = false;
    Hr = 0;
    Min = 0;
    Sec = 0;
    Count = 0;

    document.getElementById("Hr").innerHTML = "00";
    document.getElementById("Min").innerHTML = "00";
    document.getElementById("Sec").innerHTML = "00";
    document.getElementById("Count").innerHTML = "00";

 }

 function Stopwatch()
 {
    if(timer == true)
    {
        Count = Count+1;

        if(Count == 60)
        {
            Sec = Sec + 1;
            Count = 0;
        }

        if(Sec == 60)
        {
            Min = Min + 1;
            Sec = 0;
        }

        if(Min == 60)
        {
            Hr = Hr + 1;
            Min = 0;
            Sec = 0;
        }

        var HrString = Hr;
        var MinString = Min;
        var SecString = Sec;
        var CountString = Count;

        if(Hr < 10)
        {
            HrString = "0" + HrString;
        }

        if(Min < 10)
        {
            MinString = "0" + MinString;
        }

        if(Sec < 10)
        {
            SecString = "0" + SecString;
        }

        if(Count < 10)
        {
            CountString = "0" + CountString;
        }

        document.getElementById("hr").innerHTML = HrString;
        document.getElementById("min").innerHTML = MinString;
        document.getElementById("sec").innerHTML = SecString;
        document.getElementById("count").innerHTML = CountString;
        setTimeout("Stopwatch()",10);
    }
 }