require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//export that we're used to, event = receive, do something with it
exports.handler = async(event) => {
    try {
      const { amount } = JSON.parse(event.body);

      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        payment_method: 'pm_card_visa',
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ paymentIntent })
      }
    } catch (error) {
      console.log({ error });

      return {
        status: 400,
        body: JSON.stringify({ error })
      }
    }
}