const initOptions = {
  host: "localhost",
  port: 5432,
  database: "boardhoard",
  user: "postgres",
  password: "postgres",
  max: 3, // use up to 30 connections
};

const pgp = require("pg-promise")();
const db = pgp(initOptions);

const sendBoardData = (req, res) => {
  db.result("SELECT * FROM boards")
    .then((result) => {
      res.status(200).send(result.rows);
    })
    .catch((error) => {
      console.error("ERROR:", error);
    });
};

exports.sendBoardData = sendBoardData;

const searchBoardData = (req, res) => {
  console.log(req.query.searchTerm);
  db.result(`SELECT * FROM boards WHERE brand = 'Landyachtz'`)
    .then((result) => {
      res.status(200).send(result.rows);
    })
    .catch((error) => {
      console.error("ERROR:", error);
    });
};
exports.searchBoardData = searchBoardData;
