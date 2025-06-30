

// class BankAccont
// {
//     #pin
//     constructor(name,amount,pin)
//     {
        
//         this.accountNumber=Math.floor(Math.random()*1000000);
//         this.name=name;
//         this.balance=amount;
//         this.#pin=pin;

//     }

//     getBalance()
//     {
//         return (`Current balance: ${this.balance}`)
//     }

//     Withodraw(amount)
//     {
//         if(amount > 0 && amount <= this.balance)
//         {
//             this.balance-=amount;
//             console.log(`Withdrawal of ${amount} successful. New balance: ${this.balance}`);
//         }
//         else
//         {
//             console.log("Insufficient balance to Withdraw or invalid amount.");
//         }
        
//     }
//     deposit(amount)
//     {
//         if(amount>0)
//         {
//             this.balance+=amount;
//             console.log(`Deposit of ${amount} successful. New balance: ${this.balance}`);
//         }
//     }

//     getAlldetails(pin)
//     {
//         if(pin === this.pin)
//         {
//             console.log(`Account Number: ${this.accountNumber}, Name: ${this.name}, Balance: ${this.balance}`);
//         }
//         else
//         {
//             console.log("Invalid PIN. Access denied.");
//         }
        
//     }
//     getpin()
//     {
//         let newPin = this.pin;
//         console.log(`Your PIN is: ${newPin}`);
//     }
// }


// BankAccont.prototype.getpin()

// let customer1=new BankAccont("Sudeep",10000,1234);
// customer1.getpin(); // Accessing the private pin property
// // customer1.getBalance()
// // customer1.deposit(10000);
// // customer1.Withodraw(5000);

// // customer1.getAlldetails(1234)
// // // console.log(customer1)

function outer()
{
    let name="Sudeep";
    function inner()
    {
        console.log(`Hello ${name}`);
    }
    return inner;
} 

outer.prototype.name="Sudeep"; // Adding a prototype property to outer function
let im=outer();
im(); // Output: Hello Sudeep