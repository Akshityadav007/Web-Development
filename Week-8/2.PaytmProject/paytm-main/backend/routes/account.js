const express = require("express");
const { authMiddleware } = require("../middleware");
const { default: mongoose } = require("mongoose");
const Account = require("./db");

const router = express.Router();


router.get("/balance", async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    })

    res.json({
        balance: account.balance
    })
});

router.post("/transfer", authMiddleware, async(req, res) => {
    const session = await mongoose.startSession();          // start a session (transaction - DBMS)

    try{
        session.startTransaction();     // starting a session, anything that happens after this follows Atomicity
        const {amount, to} = req.body;      

        // fetch the accounts within the transaction
        const account = await Account.findOne({userId: req.userId}).session(session);

        if(!account || account.balance < amount){
            await session.abortTransaction();
            return res.status(400).json({message: "Insufficient balance"})
        }

        const toAccount = await Account.findOne({ userId: to }).session(session);

        if(!toAccount){
            await session.abortTransaction();
            return res.status(400).json({message: "Invalid account"})
        }


        // perform transfer
        await Account.updateOne({userId: req.userId}, {$inc: { balance: -amount}}).session(session);
        await Account.updateOne({userId: to}, {$inc: { balance: amount}}).session(session);

        // commit the transaction
        await session.commitTransaction();
        res.status(200).json({
            message: "Transfer successful"
        });
    }
    catch(err){
        session.abortTransaction();
        res.status(500).json({message: "Internal server error | Transaction Error!"})
    }
});

module.exports = router;
