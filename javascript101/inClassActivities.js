
// Activity 1
const nameArray = [
    'Jesse',
    'Dave',
    'Aron',
    'Alicia'
]

nameArray.pop

// for (let counter = 0; counter < nameArray.length; counter++) {
//     console.log(nameArray[counter]);
// }


// Activity 2
// function sumIntegers(numOne, numTwo) {
//     const total = numOne + numTwo;

//     if (total >=50 || total <= 80) {
//         return 65;
//     } else {
//         return 80;
//     }

// }


// console.log(sumIntegers(50, 65));

// Activity 3
// class BankAccount {
//     constructor(balance, accountType) {
//         this.balance = balance;
//         this.accountType = accountType;
//     }

//     getBalance() {
//         return this.balance;
//     }

//     deposit(x) {
//         // this.balance = this.balance + x;
//         return this.balance += x;
//     }

//     withdraw(x) {
//         return this.balance -= x;
//     }
// }


// const firstBank = new BankAccount(500, 'Checking');

// console.log(firstBank.getBalance());

// firstBank.deposit(100);

// console.log(firstBank.getBalance());

// firstBank.withdraw(100);

// console.log(firstBank.getBalance());

// Activity 4

//A, E, I, O, U, Y, W
function isVowel(letter) {

    const lowerCasedLetter = letter.toLowerCase();

    if (lowerCasedLetter === 'a' ||
    lowerCasedLetter === 'e' ||
    lowerCasedLetter === 'i' ||
    lowerCasedLetter === 'o' ||
    lowerCasedLetter === 'u') {
        return true;
    } else {
        return false;
    }
}

console.log(isVowel("a")) // true  
console.log(isVowel("c")) // false
console.log(isVowel("e")) // true