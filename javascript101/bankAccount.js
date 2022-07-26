class BankAccount {
    constructor(balance, accountType) {
        this.balance = balance;
        this.accountType = accountType;
    }

    getBalance() {
        return this.balance;
    }

    deposit(depositAmount) {
        return this.balance += depositAmount
    }

    withdraw(withdrawAmount) {
        return this.balance -= withdrawAmount;
    }
}

const firstBank = new BankAccount(50, 'checking');


console.log(firstBank.getBalance());

firstBank.deposit(50);

console.log(firstBank.getBalance())

firstBank.withdraw(150);

console.log(firstBank.getBalance())












