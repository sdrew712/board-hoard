const express = require("express");
const app = express();
const cors = require("cors");
import { PrismaClient } from "@prisma/client";

app.use(cors());
app.use(express.json());
const prisma = new PrismaClient();

const port = 3001;

app.get("/api/boards", async (req: any, res: any) => {
  const allBoards = await prisma.boards.findMany();
  res.status(200).send(allBoards);
});

app.get("/api/filter", async (req: any, res: any) => {
  const brandsArray = req.query.brands.split(",");

  const brandsFilter = brandsArray.map((element: string) => {
    return { brand: element };
  });

  const filteredBoards = await prisma.boards.findMany({
    where: {
      OR: brandsFilter,
    },
  });

  res.status(200).send(filteredBoards);
});

app.get("/api/search", async (req: any, res: any) => {
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
