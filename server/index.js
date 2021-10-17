const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const { sendBoardData, searchBoardData } = require("./db");

const port = 3001;

app.get("/api/boards", sendBoardData);
app.get("/api/search", searchBoardData);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
