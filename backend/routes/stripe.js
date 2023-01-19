

const Router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_KEY)


Router.post('/payment', (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "inr"
    }, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send(stripeErr);
        } else {
            res.status(200).json(stripeRes)
        }
    })
})

module.exports = Router;