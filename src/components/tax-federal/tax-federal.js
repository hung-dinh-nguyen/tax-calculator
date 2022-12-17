function federalCalculatorSingle(income) {
    let grossIncome = income - 12550; 
    console.log(grossIncome);

    let totalTax = 0; 

    // 10% Bracket
    if (11000 - grossIncome < 0) {
        grossIncome -= 11000;
        totalTax += 11000 * 0.10; 
    }
    else {
        totalTax += grossIncome * 0.10; 
        grossIncome = 0;
    }

    // 12% Bracket
    if (33725 - grossIncome < 0) {
        grossIncome -= 33725;
        totalTax += 33725 * 0.12; 
    }
    else {
        totalTax += grossIncome * 0.12; 
        grossIncome = 0;
    }

    // 22% Bracket
    if (50650 - grossIncome < 0) {
        grossIncome -= 50650;
        totalTax += 50650 * 0.22; 
    }
    else {
        totalTax += grossIncome * 0.22; 
        grossIncome = 0;
    }

    // 24% Bracket
    if (86725 - grossIncome < 0) {
        grossIncome -= 86725;
        totalTax += 86725 * 0.24; 
    }
    else {
        totalTax += grossIncome * 0.24; 
        grossIncome = 0;
    }

    // 32% Bracket
    if (49150 - grossIncome < 0) {
        grossIncome -= 49150;
        totalTax += 49150 * 0.32; 
    }
    else {
        totalTax += grossIncome * 0.32; 
        grossIncome = 0;
    }

    // 35% Bracket
    if (346875 - grossIncome < 0) {
        grossIncome -= 346875;
        totalTax += 346875 * 0.35; 
    }
    else {
        totalTax += grossIncome * 0.35; 
        grossIncome = 0;
    }

    // 37% Bracket
    if (grossIncome == true) {
        totalTax += grossIncome * 0.37; 
    }

    console.log(grossIncome)
    console.log(totalTax)

    return totalTax

}

federalCalculatorSingle(100000)
