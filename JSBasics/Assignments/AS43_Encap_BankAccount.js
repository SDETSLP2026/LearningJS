/*
Encapsulations_Assignment-3
PS: Bank Account - Create a BankAccount class.
Requirements:
• Create a private variable #balance.
• Create methods:
    o deposit(amount)
    o withdraw(amount)
    o getBalance()
• The balance should not be directly accessible from outside the class.
• Prevent withdrawal if the amount is greater than the available balance
*/

class BankAccount{

    #balance;

    constructor(balance){
        this.#balance = balance;
    }

    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
        } else {
            console.log("Please enter valid amount, transaction declined.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log("Amount withdrawn successfully.");
        } else {
            console.log("Insufficient balance or invalid withdrawal amount.");
        }
    }

    getBalance(){
        console.log("The current bank account balance is: " + this.#balance);
        
    }
}

let ba1 = new BankAccount(20000); //Passing default initial balance
ba1.getBalance(); // The current bank account balance is: 20000
ba1.deposit(1000);
ba1.withdraw(200);
ba1.getBalance(); // The current bank account balance is: 20800