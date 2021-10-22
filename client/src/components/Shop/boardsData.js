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

const filterBoardsData = async (
  brandFilterTerms,
  categoryFilterTerms,
  flexFilterTerms,
  searchTerm
) => {
  try {
    const result = await axios.get(`http://localhost:3001/api/filter`, {
      params: {
        brandFilterTerms,
        categoryFilterTerms,
        flexFilterTerms,
        searchTerm,
      },
    });
    return result.data;
  } catch (err) {
    console.error(err);
  }
};

exports.filterBoardsData = filterBoardsData;
