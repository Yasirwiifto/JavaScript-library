// Logical operators

// Logical AND &&
// Returns TRUE if both operands are TRUE 

console.log(true && true); // output True

console.log(false && true); // output False 

// Real world example logical AND &&

let highIncome = true;

let goodCreditScore = false;

let eligibleForLoan = highIncome || goodCreditScore;

console.log('Eligible', !eligibleForLoan);



// Logical NOT (!)

let applicationRefused = eligibleForLoan;

console.log('Not eligible', eligibleForLoan);


// Logical OR ||
// Returns TRUE if one operands is TRUE 

// Real world example logical OR ||

let  Score = true;

let HighCreditScore = false;

let Pass = highIncome || goodCreditScore;

console.log(Pass);

