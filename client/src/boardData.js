const { default: axios } = require("axios");

const getBoardData = async () => {
  await axios
    .get("http://localhost:3001/api/boards")
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
getBoardData();

exports.getBoardData = getBoardData;
