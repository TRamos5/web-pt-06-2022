// function hello(name) {
//     // put your code here
//     return 'Hello ' + name;
// }

// console.log(hello('Travis'));


//(name)'s favorite subject in school is (subject).

// function madlib(param1, param2) {

//     return `${param1}'s favorite subject in shcool is ${param2}`;
//     // return param1 + ' favorite subject in school is ' + param2; 
//     // return "param1's favorite subject in school is param2";
// }

// console.log(madlib('Travis', 'javascript'));


//Write a function tipAmount that is given the bill 
//amount and the level of service (one of good, fair and poor) 
//and returns the dollar amount for the tip.


function tipCalc(amount, service){
    switch(service){
        case ('good'): 
            return amount * .2;
        case ('fair'):
            return amount * .15;
        case ('bad'):
            return amount * .1;
        default:
            return;
    }
}

// console.log(tipCalc(50, "good"));

function totalAmount(amount, service){

    return tipCalc(amount, service) + amount; 
}

const total = totalAmount('rainy', 60, "poor");


const helloTotal = `Your total is: ${total} `;

console.log(helloTotal);


/*
Write a function splitAmount that takes the bill 
amount and the level of service, and the number of 
people to split the bill between. 
It will return the final amount for each person.
*/