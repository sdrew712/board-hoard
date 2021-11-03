import React, { useState, useEffect } from "react";
import { filterBoardsData } from "./boardsData";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./index.scss";

import Button from "@mui/material/Button";
import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";

import FilterButton from "./FilterButton";
import DropDown from "./DropDown";
import Search from "./Search";

const Filters = ({ getBoardsData, setBoardsData, isFiltered, setIsFiltered }) => {
  const { isMobile } = useWindowDimensions();

  const [brandFilterTerms, setBrandFilterTerms] = useState([]);
  const [categoryFilterTerms, setCategoryFilterTerms] = useState([]);
  const [flexFilterTerms, setFlexFilterTerms] = useState([]);
  const [sortByTerm, setSortByTerm] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // easter egg lul
  useEffect(() => {
    if (debouncedSearchTerm.toLowerCase() === "longboard") {
      alert("What are you even searching for?");
      setDebouncedSearchTerm("");
      setSearchTerm("");
    }
  }, [debouncedSearchTerm]);

  // if filtered is true, get filtered boards data and set it to state
  useEffect(() => {
    if (isFiltered === true) {
      filterBoardsData(brandFilterTerms, categoryFilterTerms, flexFilterTerms, debouncedSearchTerm, sortByTerm).then(
        (res) => {
          setBoardsData(Object.entries(res));
        }
      );
    }
  }, [
    setBoardsData,
    isFiltered,
    brandFilterTerms,
    categoryFilterTerms,
    flexFilterTerms,
    debouncedSearchTerm,
    sortByTerm,
  ]);

  //get all boards data and set it to state, clear filter terms
  const handleClearFilters = () => {
    getBoardsData().then((res) => {
      setBoardsData(Object.entries(res));
    });
    setIsFiltered(false);
    setBrandFilterTerms([]);
    setCategoryFilterTerms([]);
    setFlexFilterTerms([]);
    setSearchTerm("");
    setSortByTerm("");
  };

  //text for filters
  const brandFilterButtonText = ["Landyachtz", "Zenit", "Moonshine MFG", "Loaded", "Rayne"];
  const categoryFilterButtonText = ["Dance", "Freestyle", "Downhill"];
  const flexFilterButtonText = ["Soft", "Medium", "Stiff"];

  //map over filter buttons text and return filter buttons for each

  const brandFilterButtons = brandFilterButtonText.map((text) => (
    <FilterButton
      key={text}
      isFiltered={isFiltered}
      setIsFiltered={setIsFiltered}
      filterTerms={brandFilterTerms}
      setFilterTerms={setBrandFilterTerms}
      filterButtonText={text}
    />
  ));

  const categoryFilterButtons = categoryFilterButtonText.map((text) => (
    <FilterButton
      key={text}
      isFiltered={isFiltered}
      setIsFiltered={setIsFiltered}
      filterTerms={categoryFilterTerms}
      setFilterTerms={setCategoryFilterTerms}
      filterButtonText={text}
    />
  ));

  const flexFilterButtons = flexFilterButtonText.map((text) => (
    <FilterButton
      key={text}
      isFiltered={isFiltered}
      setIsFiltered={setIsFiltered}
      filterTerms={flexFilterTerms}
      setFilterTerms={setFlexFilterTerms}
      filterButtonText={text}
    />
  ));

  //returns either normal filters or dropdown depending on window size
  const handleFilterDisplay = () => {
    if (!isMobile()) {
      return (
        <div>
          <h2 className="main-font">Filters</h2>
          <div className="clear-button">
            <Button variant="contained" color="secondary" onClick={handleClearFilters}>
              Clear filters
            </Button>
          </div>

          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setIsFiltered={setIsFiltered}
            setDebouncedSearchTerm={setDebouncedSearchTerm}
          />

          <h2 className="main-font">brand</h2>
          <div>{brandFilterButtons}</div>

          <h2 className="main-font">category</h2>
          <div>{categoryFilterButtons}</div>

          <h2 className="main-font">flex</h2>
          <div>{flexFilterButtons}</div>

          <h2 className="main-font">Sort by</h2>
          <DropDown
            labelOptions={[
              { text: "Lowest Price", value: "asc" },
              { text: "Highest Price", value: "desc" },
            ]}
            filterTerm={sortByTerm}
            setFilterTerm={setSortByTerm}
            setIsFiltered={setIsFiltered}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography>Filters</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"}>
                <Button variant="contained" color="secondary" onClick={handleClearFilters}>
                  Clear filters
                </Button>

                <Search
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  setIsFiltered={setIsFiltered}
                  setDebouncedSearchTerm={setDebouncedSearchTerm}
                />

                <h2 className="main-font">brand</h2>
                <div>{brandFilterButtons}</div>

                <h2 className="main-font">category</h2>
                <div>{categoryFilterButtons}</div>

                <h2 className="main-font">flex</h2>
                <div>{flexFilterButtons}</div>

                <h2 className="main-font">Sort by</h2>
                <DropDown
                  labelOptions={[
                    { text: "Lowest Price", value: "asc" },
                    { text: "Highest Price", value: "desc" },
                  ]}
                  filterTerm={sortByTerm}
                  setFilterTerm={setSortByTerm}
                  setIsFiltered={setIsFiltered}
                />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      );
    }
  };

  return (
    <div id="filters">
      <div>{handleFilterDisplay()}</div>
    </div>
  );
};

export default Filters;
