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