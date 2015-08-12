'use strict';
angular.module('app').service('thisStatement',function(){
    var self = this;
    
    this.monthly_income = {
        salary:[{
            value: 5000
        }],
        // interests:[{
        //     item    : '',
        //     value   : ''
        // }],
        // dividens:[{
        //     item    : '',
        //     value   : ''
        // }],
        // realEstates:[{
        //     item    : '',
        //     value   : ''
        // }],
        business:[{
            item    : 'VeryGood4U',
            value   : 300
        },
        {
            item    : 'SuperGood4U',
            value   : 200
        }]
    };
    
    this.passiveIncome = function(){
        return this.totalIncome() - this.monthly_income.salary[0].value;
    };
    
    this.totalIncome = function(){
        var total = 0;
        for(var i in this.monthly_income){
            for(var j in this.monthly_income[i]){
                total += this.monthly_income[i][j].value;
            }
        }
        return total;
    }
    
    this.numberOfChildren = 0;
    this.expensesPerChild = 0;
    
    this.monthly_expenses = {
        tax:[{
            value   : 300
        }],
        homeLoan:[{
            value   : 300
        }],
        studyLoan:[{
            value   : 300
        }],
        carLoan: [{
            value   : 300
        }],
        creditCard: [{
            value   : 300
        }],
        retail: [{
            value   : 300
        }],
        others: [{
            value   : 300
        }],
        child: [{
            value   : (this.numberOfChildren*this.expensesPerChild)
        }],
        bankLoan:[{
            value   : 300
        }]
    };
    
    this.totalExpenses = function(){
        var total = 0;
        for(var i in this.monthly_expenses){
            for(var j in this.monthly_expenses[i]){
                total += this.monthly_expenses[i][j].value;
            }
        }
        return total;
    };
    
    this.monthlyCashFlow = function(){
        return this.totalIncome() - this.totalExpenses();
    };
    
    this.assets = {
        cash:[{
            value:4000.00
        }],
        paperAsset:[{
            item: 'MYT4U',
            units: 1000,
            cost: 30
        }],
        // rEstate:[{
        //     item:'',
        //     downpayment:'',
        //     cost:''
        // }],
        business:[{
            item:'SuperGood4U',
            downpayment:20000,
            cost:1500000
        }]
    };
    
    this.liabilities = {
        homeMortgage : [{
            item    : '',
            value   : 0
        }],
        studyLoans : [{
            item    : '',
            value   : 0
        }],
        carLoans : [{
            item    : '',
            value   : 0
        }],
        creditCards : [{
            item    : '',
            value   : 0
        }],
        retailDebts : [{
            item    : '',
            value   : 0
        }],
        rEMortgages : [{
            item    : '',
            value   : 0
        }],
        business : [{
            item    : '',
            value   : 0
        }],
        bankLoans : [{
            item    : '',
            value   : 0
        }]
    };
});