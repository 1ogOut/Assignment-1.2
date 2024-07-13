//making a check creds for strings so password works.
//Joshua Wooten 6/20/24
function checkCreds() {
    //input validation code from week 5
    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerHTML = "status of login";

    //make required variables
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;

    //extract required variables
        //put variable in log
    firstName = document.getElementById("fName").value;
        console.log("the first name was entered as:" + firstName);
    lastName = document.getElementById("lName").value;
        console.log("the last name was entered as:" + lastName);
    zipCode = document.getElementById("zCode").value;
        console.log("the Zip Code was entered as:" + zipCode);
    fullName = firstName + " " + lastName;
        console.log("the full name is:" +fullName);
        //has a -1 to not include the space between the names
    fullNameLength = fullName.length -1;
        console.log("the full name has:" + fullNameLength + " variables")
    zipCodeNumb = parseInt(zipCode);
        console.log("the actual zip code number is:" +zipCodeNumb);
    
    //test
    //checks full name length is over 20 or less than 2
    if(fullNameLength > 20||fullNameLength < 2){
        console.log("invalid full name");
        document.getElementById("loginStatus").innerHTML = "Invalid full name";
    //checks if the zip code is not equal to 5
    } else if(zipCode.length != 5){
        console.log("invalid Zip Code");
        document.getElementById("loginStatus").innerHTML = "Invalid Zip Code";
    } else{
        alert("User credentials passed, welcome to the site," + fullName);
        document.getElementById("loginStatus").innerHTML = "credentials approved";
    }
}


//making the palindrom checker work, 
function checkPalin() {
    console.log("checkPalin() started");
    //record text as string
    var entStr
    entStr = document.getElementById("palinInput").value;
    console.log("entStr is: " ,entStr);
    //remove spaces
    var entStrNoSpace
    entStrNoSpace = entStr.split(" ").join("")
    console.log("entStr with no spaces is: " + entStrNoSpace);
    //reverse string text
    var revStr;
    const revArray =[];
    var length = entStrNoSpace.length - 1;
    console.log("string length is " + length);
    for(var i = length; i >= 0; i--){
        revArray.push(entStrNoSpace[i]);
    //convert the array from reversing to a string
    revStr = revArray.join("");
    console.log("reversed is " + revStr);
    //compare the 2
    var equal=0;
    equal = (entStrNoSpace == revStr);
    console.log("the entry and reversed being equal is " + equal);
    //write status
    if(equal == true){
        document.getElementById("palinStatus").innerHTML = entStr + " is a palindrome!"
    } else{
        document.getElementById("palinStatus").innerHTML = entStr + " is a loser non-palindrome."
    }
    }
    }
