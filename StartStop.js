//for assingment 7.1
//the disabled makes it where if somethings active it can't be clicked again
//the marquee starts the movement, with .start causing the marquee to move, and .stop eliminating all movement
function startFun(){
    console.log("startFun() started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("myMarquee").start();
}

function stopFun(){
    console.log("stopFun() started");
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    document.getElementById("myMarquee").stop();
}
