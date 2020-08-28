const express = require('express');
const router = express.Router();
const Expenses = require('../models/Expenses');

//Gets all expenses detail
router.get('/',async (req,res) =>{
    try{
        const main = await Main.find();
        res.json(main);

    }catch(err){
        res.json({message:err});
    }


});

//SUBMIT expenses report
router.post('/',async (req,res) => {
    let titleOfExpense=req.body.titleOfExpense;
    let amountSpent=req.body.amountSpent;
    const expenses = new Expenses({
        titleOfExpense,
        amountSpent
    });
    
    try {
    const savedExpenses = await expenses.save() 
    res.json(savedExpenses);
    }catch(err){
        res.json({message: err});
    } 

});

module.exports = router ;