const { default: axios } = require("axios");

const getBoardsData = async () => {
  try {
    const result = await axios.get("http://localhost:3001/api/boards");
    return result.data;
  } catch (err) {
    console.error(err);
  }
};

exports.getBoardsData = getBoardsData;

const filterBoardsData = async (filterTerms) => {
  try {
    const result = await axios.get(
      `http://localhost:3001/api/filter?brands=${filterTerms}`
    );
    return result.data;
  } catch (err) {
    console.error(err);
  }
};

exports.filterBoardsData = filterBoardsData;

const searchBoardsData = async (searchTerm) => {
  try {
    const result = await axios.get(
      `http://localhost:3001/api/filter?${searchTerm}`
    );
    return result.data;
  } catch (err) {
    console.error(err);
  }
};

exports.searchBoardsData = searchBoardsData;
