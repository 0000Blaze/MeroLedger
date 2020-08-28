const express = require('express');
const router = express.Router();
const Main = require('../models/Main');


//GETS all the budget
router.get('/',async (req,res) =>{
    try{
        const main = await Main.find();
        res.json(main);

    }catch(err){
        res.json({message:err});
    }


});

//SUBMIT a post
router.post('/',async (req,res) => {
    let monthlyBudget=req.body.monthlyBudget;
    let expectedMonthlyExpenses=req.body.expectedMonthlyExpenses;
    let expectedMonthlySaving=monthlyBudget-expectedMonthlyExpenses;
    const main = new Main({
        monthlyBudget,
        expectedMonthlyExpenses,
        expectedMonthlySaving,
        expenses
    });
    
    try {
    const savedMain = await main.save() 
    res.json(savedMain);
    }catch(err){
        res.json({message: err});
    } 

});

//SPECIFIC POST

router.get('/:postId', async (req,res) => {
    try{
        const post = await Main.findById(req.params.postId)
        res.json(post);
    }catch(err){
        res.json({message:err});
    }
});

//DELETE SPECIFIC POST

router.delete('/:postId',async (req,res) => {
    try{
        const removePost = await Main.remove({_id:req.params.postId})
        res.json(removePost);
    }catch(err){
        res.json({message:err});
    }
});

//Update A POST

router.patch('/:postId',async (req,res) => {
    try{
        const updatedPost = await Main.updateOne({_id:req.params.postId},{ $set:{title:req.body.title}});
        res.json(updatedPost);
    }catch(err){
        res.json({message:err});
    }
});

module.exports = router ;