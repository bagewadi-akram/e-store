const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const { Report } = require("@mui/icons-material");
const { request, response } = require("express");
const stripe = require("stripe")(
  `sk_test_51LdchxSF6S4IYr0dA6Vduzu02U72xtXmJSF9QgR7lfbzgUet2yxWlo1aVDdsqIE5H6Bj4S3UvVg59SaFbt1oyx4w00H8zgC3yP`
);

const app =express();

app.use(cors({origin: true}));
app.use(express.json());


app.get('/',(request, response) => response.status(200).send('All E-commerce Data Loaded Here "Its a CLoud function"'))


app.post('/payments/create',async(request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received Boom!! for this amount>>>', total)


    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency:"usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


exports.api = functions.https.onRequest(app)

// api url
//(http://localhost:5001/e-store-f8f5b/us-central1/api)