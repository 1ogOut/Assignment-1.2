function playcraps(){
    //this is for craps on the gamepage.
console.log("playcraps() started");//starts game
    //roll dice
var die1 =Math.floor(Math.random()*6)+1; //creates the variable for die 1, chooses a random number between 0-5, rounds down, then adds 1
console.log(die1);//logs what die 1 is
document.getElementById("die1Res").innerHTML= "Die1 Result = " +die1; //prints out die 1

var die2 =Math.ceil(Math.random()*6);// creates variable for die 2, chooses a random number between 0-5 then rounds up
console.log(die2);
document.getElementById("die2Res").innerHTML= "Die2 Result =" +die2

    //Sum results
var sum=die1+die2 //adds die 1 and 2 together  to get a variable for sum
console.log(sum);
document.getElementById("sumRes").innerHTML= "Sum Result =" +sum 

    //look for loss Else win
if(sum == 7 || sum == 11){ //checks if the sum is equal to 7 or 11
console.log("loss")
document.getElementById("gameRes").innerHTML = "LMAOOOOOOOOO GET GUD"
} else if(die1 == die2 && die1 % 2 == 0){ //checks if die 1 is equal to die 2, then checks if die 1 is equal to an even by making sure 2 can go into the number perfectly. we dont need to check die 2 since they can only work if even
console.log("win");
document.getElementById("gameRes").innerHTML = "Congratulations! you won! Good job!"
}else{
    console.log("draw");
    document.getElementById("gameRes").innerHTML = "Keep going!"
}
    //look for push
}
