const mongoose = require('mongoose');

const ExpensesSchema = mongoose.Schema({
    titleOfExpense:{
        type:String,
        default:''
    },
    amountSpent:{
        type:Number,
        default:0
    },
    actualExpense:{
        type:Number,
        default:0
    },
    remainingBudget:{
        type:Number,
        default:0
    }
});

const LoansSchema = mongoose.Schema({
    loanGiven:{
        type:Number,
        default:0
    },
    loanTaken:{
        type:Number,
        default:0
    }
});

const MainSchema = mongoose.Schema({
    id: {
        type:String,
        required:true
    },
    monthlyBudget: {
        type: Number,
        required: true
    },
    expectedMonthlyExpenses: {
        type: Number,
        required: true
    },
    expectedMonthlySaving:{
        type:Number
    },
    date: {
        type:Date,
        default:Date.now
    },
    expenses:[ExpensesSchema],
    loans:[LoansSchema]

});

module.exports = mongoose.model('Main', MainSchema);