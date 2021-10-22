const cors = require("cors");
import express from "express";
import { getAllBoards, getFilteredBoards } from "./scripts/retrieveData";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/boards", getAllBoards);

app.get("/api/filter", getFilteredBoards);

const port = 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
