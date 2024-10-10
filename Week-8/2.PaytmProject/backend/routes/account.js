const express = require("express");
const { authMiddleware } = require("../middleware");
const mongoose  = require("mongoose");
const {Account} = require("../db");

const router = express.Router();


router.get("/balance", authMiddleware, async (req, res) => {
    try{
        const account = await Account.findOne({ userId: req.userId });
    
        res.json({
            balance: account.balance
        })
    }
    catch(err){
        console.log(err);
        res.status(400).json({message: "Internal server error!"});
    }
    
});

router.post("/transfer", authMiddleware, async(req, res) => {
    const session = await mongoose.startSession();          // start a session (transaction - DBMS)

    try{
        session.startTransaction();     // starting a session, anything that happens after this follows Atomicity
        const {amount, to} = req.body;      

        // fetch the accounts within the transaction
        const account = await Account.findOne({userId: req.userId}).session(session);   // from account

        if(!account || account.balance < amount){
            await session.abortTransaction();
            return res.status(400).json({status: "fail", message: "Insufficient balance"})
        }

        try{
            const toAccount = await Account.findOne({ userId: to }).session(session);

            if(!toAccount){
                return res.status(400).json({status: "fail", message: "Invalid account"})
            }
        }
        catch(err){
            await session.abortTransaction();
            return res.status(500).json({ status: "error", message: "Internal server error | Invalid account" });
        }
        


        // perform transfer
        await Account.updateOne({userId: req.userId}, {$inc: { balance: -amount}}).session(session);
        await Account.updateOne({userId: to}, {$inc: { balance: amount}}).session(session);

        // commit the transaction
        await session.commitTransaction();
        session.endSession();

        return res.status(200).json({ status: "success", message: "Transfer successful" });
    }
    catch(err){
        await session.abortTransaction();
        return res.status(500).json({status: "error", message: "Internal server error | Transaction Error!"})
    }
});

module.exports = router;
