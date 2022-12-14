const dotenv = require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const Razorpay = require("razorpay");
const shortid = require("shortid");

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET
});



app.post("/razorpay", async (req, res) => {

    const payment_capture = 1;

    const dollarInRupees = 79.16;
    const totalCost = 159.98;
    const amount = Math.floor(totalCost * dollarInRupees);

    const currency = "INR"

    const options = {
        amount: (amount * 100),
        currency: currency,
        receipt: shortid.generate(),
        payment_capture: payment_capture
    }

    try {
        const response = await razorpayInstance.orders.create(options);
        // console.log(response); Debug Log
        res.json({
            id: response.id,
            currency: response.currency,
            amount: response.amount
        })
    } catch (error) {
        console.log(error);
    }


});

// Deploy Code
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../", "frontend", "build", "index.html"))
    });
} else {
    app.get("/", (req, res) => {
        res.send("Please set to production")
    });
}


app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});