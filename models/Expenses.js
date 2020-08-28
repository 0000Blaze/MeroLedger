const mongoose=require('mongoose');

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
})

module.exports = mongoose.model('Expenses', ExpensesSchema);