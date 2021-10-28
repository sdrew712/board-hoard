import React, { useState, useEffect } from "react";
import { filterBoardsData } from "./boardsData";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";

import FilterButton from "./FilterButton";
import DropDown from "./DropDown";
import Search from "./Search";

const Filters = ({ getBoardsData, setBoardsData, isFiltered, setIsFiltered }) => {
  const { width } = useWindowDimensions();

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

  const handleFilterDisplay = () => {
    if (width > 768) {
      return (
        <div>
          <h2>Filters</h2>
          <button onClick={handleClearFilters}>Clear filters</button>
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setIsFiltered={setIsFiltered}
            setDebouncedSearchTerm={setDebouncedSearchTerm}
          />
          <h2>brand</h2>
          <FilterButton
            setIsFiltered={setIsFiltered}
            filterTerms={brandFilterTerms}
            setFilterTerms={setBrandFilterTerms}
            filterButtonText="Landyachtz"
          />
          <FilterButton
            setIsFiltered={setIsFiltered}
            filterTerms={brandFilterTerms}
            setFilterTerms={setBrandFilterTerms}
            filterButtonText="Zenit"
          />
          <FilterButton
            setIsFiltered={setIsFiltered}
            filterTerms={brandFilterTerms}
            setFilterTerms={setBrandFilterTerms}
            filterButtonText="Moonshine MFG"
          />
          <FilterButton
            setIsFiltered={setIsFiltered}
            filterTerms={brandFilterTerms}
            setFilterTerms={setBrandFilterTerms}
            filterButtonText="Loaded"
          />
          <FilterButton
            setIsFiltered={setIsFiltered}
            filterTerms={brandFilterTerms}
            setFilterTerms={setBrandFilterTerms}
            filterButtonText="Rayne"
          />
          <h2>category</h2>
          <FilterButton
            setIsFiltered={setIsFiltered}
            filterTerms={categoryFilterTerms}
            setFilterTerms={setCategoryFilterTerms}
            filterButtonText="Dance"
          />
          <FilterButton
            setIsFiltered={setIsFiltered}
            filterTerms={categoryFilterTerms}
            setFilterTerms={setCategoryFilterTerms}
            filterButtonText="Freestyle"
          />
          <FilterButton
            setIsFiltered={setIsFiltered}
            filterTerms={categoryFilterTerms}
            setFilterTerms={setCategoryFilterTerms}
            filterButtonText="Downhill"
          />
          <h2>flex</h2>
          <FilterButton
            setIsFiltered={setIsFiltered}
            filterTerms={flexFilterTerms}
            setFilterTerms={setFlexFilterTerms}
            filterButtonText="Soft"
          />
          <FilterButton
            setIsFiltered={setIsFiltered}
            filterTerms={flexFilterTerms}
            setFilterTerms={setFlexFilterTerms}
            filterButtonText="Medium"
          />
          <FilterButton
            setIsFiltered={setIsFiltered}
            filterTerms={flexFilterTerms}
            setFilterTerms={setFlexFilterTerms}
            filterButtonText="Stiff"
          />
          <h2>Sort by</h2>
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
              <Typography>
                <button onClick={handleClearFilters}>Clear filters</button>
                <div>
                  <Search
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    setIsFiltered={setIsFiltered}
                    setDebouncedSearchTerm={setDebouncedSearchTerm}
                  />

                  <h2>brand</h2>
                  <FilterButton
                    setIsFiltered={setIsFiltered}
                    filterTerms={brandFilterTerms}
                    setFilterTerms={setBrandFilterTerms}
                    filterButtonText="Landyachtz"
                  />
                  <FilterButton
                    setIsFiltered={setIsFiltered}
                    filterTerms={brandFilterTerms}
                    setFilterTerms={setBrandFilterTerms}
                    filterButtonText="Zenit"
                  />
                  <FilterButton
                    setIsFiltered={setIsFiltered}
                    filterTerms={brandFilterTerms}
                    setFilterTerms={setBrandFilterTerms}
                    filterButtonText="Moonshine MFG"
                  />
                  <FilterButton
                    setIsFiltered={setIsFiltered}
                    filterTerms={brandFilterTerms}
                    setFilterTerms={setBrandFilterTerms}
                    filterButtonText="Loaded"
                  />
                  <FilterButton
                    setIsFiltered={setIsFiltered}
                    filterTerms={brandFilterTerms}
                    setFilterTerms={setBrandFilterTerms}
                    filterButtonText="Rayne"
                  />

                  <h2>category</h2>
                  <FilterButton
                    setIsFiltered={setIsFiltered}
                    filterTerms={categoryFilterTerms}
                    setFilterTerms={setCategoryFilterTerms}
                    filterButtonText="Dance"
                  />
                  <FilterButton
                    setIsFiltered={setIsFiltered}
                    filterTerms={categoryFilterTerms}
                    setFilterTerms={setCategoryFilterTerms}
                    filterButtonText="Freestyle"
                  />
                  <FilterButton
                    setIsFiltered={setIsFiltered}
                    filterTerms={categoryFilterTerms}
                    setFilterTerms={setCategoryFilterTerms}
                    filterButtonText="Downhill"
                  />

                  <h2>flex</h2>
                  <FilterButton
                    setIsFiltered={setIsFiltered}
                    filterTerms={flexFilterTerms}
                    setFilterTerms={setFlexFilterTerms}
                    filterButtonText="Soft"
                  />
                  <FilterButton
                    setIsFiltered={setIsFiltered}
                    filterTerms={flexFilterTerms}
                    setFilterTerms={setFlexFilterTerms}
                    filterButtonText="Medium"
                  />
                  <FilterButton
                    setIsFiltered={setIsFiltered}
                    filterTerms={flexFilterTerms}
                    setFilterTerms={setFlexFilterTerms}
                    filterButtonText="Stiff"
                  />

                  <h2>Sort by</h2>
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
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      );
    }
  };

  return (
    <div style={{ float: "left" }}>
      <div>{handleFilterDisplay()}</div>
    </div>
  );
};

export default Filters;
