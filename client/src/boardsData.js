const { default: axios } = require("axios");

const getBoardsData = async () => {
  try {
    const result = await axios.get("http://localhost:3001/api/boards");
    return result;
  } catch (err) {
    console.error(err);
  }
};

exports.getBoardsData = getBoardsData;
