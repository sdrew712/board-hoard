import { Request, Response } from "express";
import stripe from "./stripe";

export const checkout = async (req: Request, res: Response) => {
  const cart = JSON.parse(req.body.cart);
  console.log(cart);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cart",
  });
  res.redirect(303, session.url);
};
