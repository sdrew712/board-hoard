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

app.get("/api/search", async (req: any, res: any) => {
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

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
