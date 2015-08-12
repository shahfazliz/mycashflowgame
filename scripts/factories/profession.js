'use strict';
angular.module('app').factory('thisProfession',function(){
    
    var teacher = {
        name: 'Teacher',
        monthly_income: { 
            salary          :[{ value : 3300 }]
        },
        expensesPerChild    : 180,
        monthly_expenses: {
            tax             :[{ value : 630 }],
            homeLoan        :[{ value : 500 }],
            studyLoan       :[{ value : 60 }],
            carLoan         :[{ value : 100 }],
            creditCard      :[{ value : 90 }],
            retail          :[{ value : 50 }],
            others          :[{ value : 760 }],
            child           :[{ value : 0 }],
            bankLoan        :[{ value : 0 }]
        },
        assets: {
            cash            :[{ value : 400 }]
        },
        liabilities: {
            homeMortgage    :[{ value : 50000 }],
            studyLoans      :[{ value : 12000 }],
            carLoans        :[{ value : 5000 }],
            creditCards     :[{ value : 3000 }],
            retailDebts     :[{ value : 1000 }]
        }
    };
    
    var doctor = {
        name: 'Doctor',
        monthly_income: { 
            salary          :[{ value : 13200 }]
        },
        expensesPerChild    : 640,
        monthly_expenses: {
            tax             :[{ value : 3420 }],
            homeLoan        :[{ value : 1900 }],
            studyLoan       :[{ value : 750 }],
            carLoan         :[{ value : 380 }],
            creditCard      :[{ value : 270 }],
            retail          :[{ value : 50 }],
            others          :[{ value : 2880 }],
            child           :[{ value : 0 }],
            bankLoan        :[{ value : 0 }]
        },
        assets: {
            cash            :[{ value : 400 }]
        },
        liabilities: {
            homeMortgage    :[{ value : 202000 }],
            studyLoans      :[{ value : 150000 }],
            carLoans        :[{ value : 19000 }],
            creditCards     :[{ value : 9000 }],
            retailDebts     :[{ value : 1000 }]
        }
    };
    
    var manager = {
        name: 'Business Manager',
        monthly_income: { 
            salary          :[{ value : 4600 }]
        },
        expensesPerChild    : 240,
        monthly_expenses: {
            tax             :[{ value : 910 }],
            homeLoan        :[{ value : 700 }],
            studyLoan       :[{ value : 60 }],
            carLoan         :[{ value : 120 }],
            creditCard      :[{ value : 90 }],
            retail          :[{ value : 50 }],
            others          :[{ value : 1000 }],
            child           :[{ value : 0 }],
            bankLoan        :[{ value : 0 }]
        },
        assets: {
            cash            :[{ value : 400 }]
        },
        liabilities: {
            homeMortgage    :[{ value : 75000 }],
            studyLoans      :[{ value : 12000 }],
            carLoans        :[{ value : 6000 }],
            creditCards     :[{ value : 3000 }],
            retailDebts     :[{ value : 1000 }]
        }
    };
    
    var police = {
        name: 'Police Officer',
        monthly_income: { 
            salary          :[{ value : 3000 }]
        },
        expensesPerChild    : 160,
        monthly_expenses: {
            tax             :[{ value : 580 }],
            homeLoan        :[{ value : 400 }],
            studyLoan       :[{ value : 0 }],
            carLoan         :[{ value : 100 }],
            creditCard      :[{ value : 60 }],
            retail          :[{ value : 50 }],
            others          :[{ value : 690 }],
            child           :[{ value : 0 }],
            bankLoan        :[{ value : 0 }]
        },
        assets: {
            cash            :[{ value : 520 }]
        },
        liabilities: {
            homeMortgage    :[{ value : 46000 }],
            studyLoans      :[{ value : 0 }],
            carLoans        :[{ value : 5000 }],
            creditCards     :[{ value : 2000 }],
            retailDebts     :[{ value : 1000 }]
        }
    };
    
    var secretary = {
        name: 'Secretary',
        monthly_income: { 
            salary          :[{ value : 2500 }]
        },
        expensesPerChild    : 140,
        monthly_expenses: {
            tax             :[{ value : 460 }],
            homeLoan        :[{ value : 400 }],
            studyLoan       :[{ value : 0 }],
            carLoan         :[{ value : 80 }],
            creditCard      :[{ value : 60 }],
            retail          :[{ value : 50 }],
            others          :[{ value : 570 }],
            child           :[{ value : 0 }],
            bankLoan        :[{ value : 0 }]
        },
        assets: {
            cash            :[{ value : 710 }]
        },
        liabilities: {
            homeMortgage    :[{ value : 38000 }],
            studyLoans      :[{ value : 0 }],
            carLoans        :[{ value : 4000 }],
            creditCards     :[{ value : 2000 }],
            retailDebts     :[{ value : 1000 }]
        }
    };
    
    var driver = {
        name: 'Truck Driver',
        monthly_income: { 
            salary          :[{ value : 2500 }]
        },
        expensesPerChild    : 140,
        monthly_expenses: {
            tax             :[{ value : 460 }],
            homeLoan        :[{ value : 400 }],
            studyLoan       :[{ value : 0 }],
            carLoan         :[{ value : 80 }],
            creditCard      :[{ value : 60 }],
            retail          :[{ value : 50 }],
            others          :[{ value : 570 }],
            child           :[{ value : 0 }],
            bankLoan        :[{ value : 0 }]
        },
        assets: {
            cash            :[{ value : 750 }]
        },
        liabilities: {
            homeMortgage    :[{ value : 38000 }],
            studyLoans      :[{ value : 0 }],
            carLoans        :[{ value : 4000 }],
            creditCards     :[{ value : 2000 }],
            retailDebts     :[{ value : 1000 }]
        }
    };
    
    var engineer = {
        name: 'Engineer',
        monthly_income: { 
            salary          :[{ value : 4900 }]
        },
        expensesPerChild    : 250,
        monthly_expenses: {
            tax             :[{ value : 1050 }],
            homeLoan        :[{ value : 700 }],
            studyLoan       :[{ value : 60 }],
            carLoan         :[{ value : 140 }],
            creditCard      :[{ value : 120 }],
            retail          :[{ value : 50 }],
            others          :[{ value : 1090 }],
            child           :[{ value : 0 }],
            bankLoan        :[{ value : 0 }]
        },
        assets: {
            cash            :[{ value : 400 }]
        },
        liabilities: {
            homeMortgage    :[{ value : 75000 }],
            studyLoans      :[{ value : 12000 }],
            carLoans        :[{ value : 7000 }],
            creditCards     :[{ value : 4000 }],
            retailDebts     :[{ value : 1000 }]
        }
    };
    
    var mechanic = {
        name: 'Mechanic',
        monthly_income: { 
            salary          :[{ value : 2000 }]
        },
        expensesPerChild    : 110,
        monthly_expenses: {
            tax             :[{ value : 360 }],
            homeLoan        :[{ value : 300 }],
            studyLoan       :[{ value : 0 }],
            carLoan         :[{ value : 60 }],
            creditCard      :[{ value : 60 }],
            retail          :[{ value : 50 }],
            others          :[{ value : 450 }],
            child           :[{ value : 0 }],
            bankLoan        :[{ value : 0 }]
        },
        assets: {
            cash            :[{ value : 670 }]
        },
        liabilities: {
            homeMortgage    :[{ value : 31000 }],
            studyLoans      :[{ value : 0 }],
            carLoans        :[{ value : 3000 }],
            creditCards     :[{ value : 2000 }],
            retailDebts     :[{ value : 1000 }]
        }
    };
    
    var nurse = {
        name: 'Nurse',
        monthly_income: { 
            salary          :[{ value : 3100 }]
        },
        expensesPerChild    : 170,
        monthly_expenses: {
            tax             :[{ value : 600 }],
            homeLoan        :[{ value : 400 }],
            studyLoan       :[{ value : 30 }],
            carLoan         :[{ value : 100 }],
            creditCard      :[{ value : 90 }],
            retail          :[{ value : 50 }],
            others          :[{ value : 710 }],
            child           :[{ value : 0 }],
            bankLoan        :[{ value : 0 }]
        },
        assets: {
            cash            :[{ value : 480 }]
        },
        liabilities: {
            homeMortgage    :[{ value : 47000 }],
            studyLoans      :[{ value : 6000 }],
            carLoans        :[{ value : 5000 }],
            creditCards     :[{ value : 3000 }],
            retailDebts     :[{ value : 1000 }]
        }
    };
    
    var janitor = {
        name: 'Janitor',
        monthly_income: { 
            salary          :[{ value : 1600 }]
        },
        expensesPerChild    : 70,
        monthly_expenses: {
            tax             :[{ value : 280 }],
            homeLoan        :[{ value : 200 }],
            studyLoan       :[{ value : 0 }],
            carLoan         :[{ value : 60 }],
            creditCard      :[{ value : 60 }],
            retail          :[{ value : 50 }],
            others          :[{ value : 300 }],
            child           :[{ value : 0 }],
            bankLoan        :[{ value : 0 }]
        },
        assets: {
            cash            :[{ value : 560 }]
        },
        liabilities: {
            homeMortgage    :[{ value : 20000 }],
            studyLoans      :[{ value : 0 }],
            carLoans        :[{ value : 4000 }],
            creditCards     :[{ value : 2000 }],
            retailDebts     :[{ value : 1000 }]
        }
    };
    
    var lawyer = {
        name: 'Lawyer',
        monthly_income: { 
            salary          :[{ value : 7500 }]
        },
        expensesPerChild    : 380,
        monthly_expenses: {
            tax             :[{ value : 1830 }],
            homeLoan        :[{ value : 1100 }],
            studyLoan       :[{ value : 390 }],
            carLoan         :[{ value : 220 }],
            creditCard      :[{ value : 180 }],
            retail          :[{ value : 50 }],
            others          :[{ value : 1650 }],
            child           :[{ value : 0 }],
            bankLoan        :[{ value : 0 }]
        },
        assets: {
            cash            :[{ value : 400 }]
        },
        liabilities: {
            homeMortgage    :[{ value : 115000 }],
            studyLoans      :[{ value : 78000 }],
            carLoans        :[{ value : 11000 }],
            creditCards     :[{ value : 6000 }],
            retailDebts     :[{ value : 1000 }]
        }
    };
    
    var pilot = {
        name: 'Airline Pilot',
        monthly_income: { 
            salary          :[{ value : 9500 }]
        },
        expensesPerChild    : 480,
        monthly_expenses: {
            tax             :[{ value : 2350 }],
            homeLoan        :[{ value : 1330 }],
            studyLoan       :[{ value : 0 }],
            carLoan         :[{ value : 300 }],
            creditCard      :[{ value : 660 }],
            retail          :[{ value : 50 }],
            others          :[{ value : 2210 }],
            child           :[{ value : 0 }],
            bankLoan        :[{ value : 0 }]
        },
        assets: {
            cash            :[{ value : 400 }]
        },
        liabilities: {
            homeMortgage    :[{ value : 143000 }],
            studyLoans      :[{ value : 0 }],
            carLoans        :[{ value : 15000 }],
            creditCards     :[{ value : 22000 }],
            retailDebts     :[{ value : 1000 }]
        }
    };
    
    var profession = [teacher, doctor, manager, police, secretary, driver, engineer, mechanic, nurse, janitor, lawyer, pilot];
    return profession[Math.floor(Math.random()*12)]; // Random number from 0 to 11
});