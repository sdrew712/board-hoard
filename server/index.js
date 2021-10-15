const express = require("express");
const app = express();
const { sendBoardData } = require("./db");

const port = 3001;

app.get("/api/boards", sendBoardData);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
