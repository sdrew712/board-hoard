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

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
