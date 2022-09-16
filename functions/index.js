// const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");
// const stripe = require("stripe")(
//   `sk_test_51LdchxSF6S4IYr0dA6Vduzu02U72xtXmJSF9QgR7lfbzgUet2yxWlo1aVDdsqIE5H6Bj4S3UvVg59SaFbt1oyx4w00H8zgC3yP`
// );

// // API

// // - App config
// const app = express();

// // - Middlewares
// app.use(cors({ origin: true }));
// app.use(express.json());

// // - API routes
// app.get("/", (request, response) => response.status(200).send("hello world"));

// app.post("/payments/create", async (request, response) => {
//   const total = request.query.total;

//   console.log("Payment Request Received BOOM!!! for this amount >>> ", total);

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total, // subunits of the currency
//     currency: "usd",
//   });

//   // OK - Created
//   response.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

// // - Listen command
// exports.api = functions.https.onRequest(app);

// api url
//(http://localhost:5001/e-store-f8f5b/us-central1/api)
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  `sk_test_51LdchxSF6S4IYr0dA6Vduzu02U72xtXmJSF9QgR7lfbzgUet2yxWlo1aVDdsqIE5H6Bj4S3UvVg59SaFbt1oyx4w00H8zgC3yP`
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
