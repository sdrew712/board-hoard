const stripeClient = require("stripe")(process.env.SK_TEST);

export default stripeClient;
