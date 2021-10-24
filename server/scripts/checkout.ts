import { Request, Response } from "express";
import { getAllBoards } from "./retrieveData";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { env } from "process";
const { SK_TEST } = env;

// @ts-ignore
const stripe = require("stripe")(SK_TEST);

export const checkout = async (req: Request, res: Response) => {
  const boards = await prisma.boards.findMany();

  // console.log(boards);

  boards.forEach(async (board) => {
    // const product = await stripe.products.create({
    //   id: board.id,
    //   name: board.name,
    // });
    // console.log(product);
    // const price = await stripe.prices.create({
    //   product: board.id,
    //   unit_amount: board.price,
    //   currency: "usd",
    // });
    // console.log(price);
  });

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
