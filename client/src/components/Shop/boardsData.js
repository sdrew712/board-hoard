import axios from "axios";

//get all boards
export const getBoardsData = async () => {
  try {
    const result = await axios.get("http://localhost:3001/api/boards");
    return result.data;
  } catch (err) {
    console.error(err);
  }
};

//get boards that match filter terms
export const filterBoardsData = async (
  brandFilterTerms,
  categoryFilterTerms,
  flexFilterTerms,
  searchTerm,
  sortByTerm
) => {
  try {
    const result = await axios.get("http://localhost:3001/api/filter", {
      params: {
        brandFilterTerms,
        categoryFilterTerms,
        flexFilterTerms,
        searchTerm,
        sortByTerm,
      },
    });
    return result.data;
  } catch (err) {
    console.error(err);
  }
};

//get single board by id
export const getSingleBoard = async (id) => {
  try {
    const result = await axios.get("http://localhost:3001/api/board", {
      params: {
        id,
      },
    });
    return result.data;
  } catch (err) {
    console.error(err);
  }
};
