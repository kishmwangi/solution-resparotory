function calculateNetSalry(basic, benefits) {
    // constant for tax rates dedactions

    tier: {rate: 0.1, threashold : 24000},
    tier: {rate: 0.25, threashold : 32333},
    tier: {rate: 0.3, threashold : 41905},
    tier: {rate: 0.325, threashold : 49395},
    tier: {rate: 0.35, threashold : 65945},
    tier: {rate: 0.37, threashold : 93212},


};

const nhifRate = [150, 300, 400, 500, 600];
const nssfRate = 0.06;

//calculate gross salary
const grossSalay = basicSalary + benefits;

//calculate tax

let taxableIncome = grossSalary;
let totalTax = 0;
for (const tier in taxRates) {
    if (taxableIncome <= 0) break;
    const { rate, threashold } = taxRates[tier];
    if ( taxableIncome > threashold) {
        totalTax +=  threashold * rate;
        taxableIncome -= threashold;
    }

    //calculate NHIF Dedaction

let nhifDedacation = nhifRate.find(rate => grossSalary <= rate) || nhifRates[nhifRates.legnth -1];


//calculate NSSF Dedaction
const nssfDedaction = grossSalary * nssfRate;


// calcuate Gross salary

const netSalary = grossSalary - totalTax - nhifDedacation - nssfDedaction;



return {
    grossSalary,
    tax: totalTax,
    nhifDedacation: nhifDedacation,
    nssfDedaction: nssfDedaction,
    netSalary: netSalary

   };
}

