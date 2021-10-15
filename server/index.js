const express = require("express");
const app = express();
const { sendBoardData } = require("./db");

const port = 3001;

// const getBoardData = async () => {
//   console.log("f u");
//   const result = await db.sendBoardData();
//   console.log(result);
// };

app.get("/api/boards", sendBoardData);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
