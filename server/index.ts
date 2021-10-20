import { Request, Response } from "express";
const express = require("express");
const app = express();
const cors = require("cors");
import { PrismaClient } from "@prisma/client";

app.use(cors());
app.use(express.json());
const prisma = new PrismaClient();

const port = 3001;

app.get("/api/boards", async (req: Request, res: Response) => {
  const allBoards = await prisma.boards.findMany();
  res.status(200).send(allBoards);
});

app.get("/api/filter", async (req: Request, res: Response) => {
  const userSelectedBrands: any = req.query.brandFilterTerms;
  const userSelectedCategories: any = req.query.categoryFilterTerms;

  const brandFilterArray: Array<any> = [];
  const categoryFilterArray: Array<any> = [];

  userSelectedBrands?.forEach((brand: string) => {
    brandFilterArray.push({ brand: brand });
  });

  userSelectedCategories?.forEach((category: string) => {
    categoryFilterArray.push({
      category: {
        contains: category,
      },
    });
  });

  let filteredBoards: Array<object> = [];

  if (brandFilterArray.length > 0) {
    filteredBoards = await prisma.boards.findMany({
      where: {
        OR: brandFilterArray,
        AND: categoryFilterArray,
      },
    });
  } else if (categoryFilterArray.length > 0) {
    filteredBoards = await prisma.boards.findMany({
      where: {
        OR: categoryFilterArray,
        AND: brandFilterArray,
      },
    });
  }

  res.status(200).send(filteredBoards);
});

app.get("/api/search", async (req: Request, res: Response) => {
  const searchTerm = req.query.term;

  const searchResults = await prisma.boards.findMany({
    where: {
      OR: [
        {
          name: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          brand: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          category: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
      ],
    },
  });
  res.status(200).send(searchResults);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
