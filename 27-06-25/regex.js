//Check if a string is a valid email address.
// let email = "doddamaniravi115@gmail.com"
// let regex= /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  
// if (regex.test(email)) {
//     console.log("Valid email address");
// }
// else {
//     console.log("Invalid email address");
// }


//2.Validate if a string contains only digits.

// let digit="siufhsiuhsvn "
// let regex=/\d+$/;

// if(regex.test(digit))
// {
//     console.log("digit contains numbers")
// }
// else
// {
//     console.log("digit does not contain numbers")
// }


//3.Write a regex to match exactly 5-digit postal codes.




// let digit=239237
// let regex=/^\d{5}$/

// if(regex.test(digit))
// {
//     console.log("digits have 5 numbers only")
// }
// else
// {
//     console.log("digits do not have 5 numbers only")
// }


//4. Check if a string is a valid Indian mobile number (starts with 6-9, 10 digits).
// let number=/[6-9]\d{9}$/;
// let phonenumber=9163638940
// if(number.test(phonenumber))
// {
//     console.log("valid phone number")
// }
// else
// {
//     console.log("invalid phone number")
// }


//5.Verify if a password contains at least one uppercase letter, one lowercase letter, and one number.


// let password = "Ravi@123";

// let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/
// if (regex.test(password)) {
//     console.log("Valid password");
// } else {
//     console.log("Invalid password");
//  }


//6.Verify if a password contains at least one uppercase letter, one lowercase letter, and one number.


// let str1 = "hi hello world";
// let regex=/^hello/
// if(regex.test(str1))
// {
//     console.log("string start with hello")
// }
// else
// {
//     console.log("string does not start with hello")
// }


//7.Check if a string ends with ".com".


// let regex=/.com$/
// var str1="hbsibv.com"
// if(regex.test(str1))
// {
//     console.log("string Ends with .com")
// }
// else
// {
//     console.log("string dont end with .com")
// }

//8.Find all words that start with a capital letter in a sentence.


// let regex=/\b[A-Z][a-z0-9]+\b/g;
// var str1="The Human Is Error"

// console.log(str1.match(regex));

// let str1=" The       Human    Is Error";
// let regex=/\s+/g;
// let result=str1.replace(regex," ");
// console.log(result); // Output: "The Human Is Error"


