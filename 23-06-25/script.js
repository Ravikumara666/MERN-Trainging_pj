// 2. Write a for loop to print numbers from 1 to 10 on the same line separated by a space.

// numbers= "";
// for(let i=1;i<=10;i++)
// {
//     numbers+=i+" ";
// }
// console.log(numbers)



//3.Write a while loop that prints all even numbers between 1 and 20.

// let i=1;
// while(i<=20 )
// {
//     if(i % 2 === 0) 
//     console.log(i)
//     i++;
// }

//4.Using a do...while loop, print "Welcome!" 5 times.
// let i=0;
// do{
//     console.log("Welcome!")
//     i++
// }
// while(i<5)

//5.How can you break out of a loop in JavaScript? Show an example using break.
// array=[10,20,30,40,50];
// for(let item of array)
// {
//     if(item == 30)
//         break
//     console.log(item);
// }


//6.What is the use of continue in loops? Write a loop that skips number 5 while printing 1 to 10.
// for(let i=1;i<=10;i++)
// {
//     if(i==5)
//         continue;
//     console.log(i)
// }


//7.Write a nested loop that prints the following pattern:

//  1 1
// 2 2
// 3 3

// numbers=""
// for(let i=1;i<=3;i++)
// {
//     for(let j=1;j<=2;j++)
//     {
//         numbers += i + " ";
//     }
//     numbers += "\n";
// }
// console.log(numbers)


//8. How would you loop through an array and print each element without using forEach? Use a for loop.



// numbers=[10, 20, 30, 40, 50];
// for(let i=0;i<numbers.length;i++)
// {
//     console.log(numbers[i]);
// }

//9.What is the difference between == and === in JavaScript? Give examples.

// console.log(5=="5")
// console.log(5==="5")


//  let x = 5;
// console.log(x++ + ++x);

// let number=6363


//10.Write a program to check if a number is divisible by 3 and 5 using operators.

// if(number%3==0 && number%5==0)
// {
//     console.log(number+" is divisble from both 3 and 5")
// }
// else
// {
//     console.log("Not divisible")
// }


//11. Use the ternary operator to check if a number is even or odd.

// let number=9

// number%2==0?console.log("even"):console.log("odd")


//12.What does the % (modulus) operator do? Write a program that prints all numbers from 1 to 20 that are divisible by 4.
// number=4

// for(let i=1;i<=20;i++)
// {
//     if(i%number==0)
//     {
//         console.log(i)
//     }
// }



//13.Write a program using if-else to check if a user is eligible to vote (age >= 18).
// age=17

// if(age<18)
// {
//     console.log("Not eligible to VOTE")
// }
// else
// {
//     console.log("eligible to VOTE")
// }


//14.Write a program using if-else if-else to print grades based on marks: A (90+), B (75–89), C (50–74), F (below 50).

// marks=89

// if(marks>=90)
// {
//     console.log("A")
// }
// else if(marks>=79 && marks<=89)
// {
//     console.log("B")
// }
// else if(marks>=50 && marks<=78)
// {
//     console.log("C")
// }
// else
// {
//     console.log("F")
// }



//15. Write a program that checks whether a number is positive, negative, or zero.


// number=-1

// number<0?console.log("Negative"):number>0?console.log("Positive"):console.log("ZERO")



//16. How would you use nested if statements to check if a number is even and also greater than 10?

// number=12

// if(number%2==0)
// {
//     if(number>10)
//     {
//         console.log("number is even and greterthan 10")
//     }
// }


//19. Convert the following if-else code to a ternary operator:

//  let isLoggedIn = true;
// if (isLoggedIn) {
//   console.log("Welcome back!");
// } else {
//   console.log("Please log in.");
// }

// isLoggedIn=false
// isLoggedIn=true?console.log("Welcome Back!"):console.log("Please log in")


// let a=10
// a++
// let b=a
// b++
// console.log(a,b)