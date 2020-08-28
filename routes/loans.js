const express = require('express');
const router = express.Router();
const Loans = require('../models/Loans');

//Gets all Loans detail
router.get('/',async (req,res) =>{
    try{
        const main = await Main.find();
        res.json(main);

    }catch(err){
        res.json({message:err});
    }


});

//SUBMIT Loans report
router.post('/',async (req,res) => {
    let loanGiven=req.body.loanGiven;
    let loanTaken=req.body.loanTaken;
    const loans = new Loans({
        loanGiven,
        loanTaken
    });
    
    try {
    const savedLoans = await loans.save() 
    res.json(savedLoans);
    }catch(err){
        res.json({message: err});
    } 

});

module.exports = router ;