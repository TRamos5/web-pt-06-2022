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