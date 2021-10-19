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

const handleFilter = async (filterTerms) => {
  // console.log(typeof filterTerms);

  try {
    const result = await axios.get(
      `http://localhost:3001/api/search?brands=${filterTerms}`
    );
    return result.data;
  } catch (err) {
    console.error(err);
  }
};

exports.handleFilter = handleFilter;
