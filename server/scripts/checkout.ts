import { Request, Response } from "express";
import stripe from "./stripe";

export const checkout = async (req: Request, res: Response) => {
  const cart = JSON.parse(req.body.cart);

  const lineItems: Array<object> = [];

  //iterate over data to insert mutliple values to cart
  cart.forEach((cartItem: any) => {
    lineItems.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: cartItem.name,
        },
        //stripe requires cents, so change to cent amount
        unit_amount: cartItem.price * 100,
      },
      adjustable_quantity: {
        enabled: true,
      },
      quantity: cartItem.quantity,
      description: `Length: ${cartItem.length}" Flex: ${cartItem.flex}`,
    });
  });

  //create stripe session and redirect user to it
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/shop",
  });
  res.redirect(303, session.url);
};
