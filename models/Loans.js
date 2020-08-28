const mongoose=require('mongoose');

const LoansSchema = mongoose.Schema({
    loanGiven:{
        type:Number,
        required:true
    },
    loanTaken:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Loans', LoansSchema);