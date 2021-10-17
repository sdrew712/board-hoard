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

const handleFilter = async (filterTerm) => {
  try {
    const result = await axios.get(
      `http://localhost:3001/api/search?brand=${filterTerm}`
    );
    console.log(result.data);
    return result.data;
  } catch (err) {
    console.error(err);
  }
};

exports.handleFilter = handleFilter;
