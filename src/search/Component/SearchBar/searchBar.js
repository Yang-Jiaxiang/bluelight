import React, { useState } from "react";
import {
  Grid,
  Button,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import useStyles from "./searchBarStyle.js";
import FormRender from "./formRender.js";
import SearBarParams from "../../Assets/Json/searchBarParams.json";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

const SearchBar = ({ formData, setFormData }) => {
  const classes = useStyles();
  const [tempFormData, setTempFormData] = useState(formData);
  const [expand, setExpand] = useState(false);

  function formatDate(date) {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}${month}${day}`;
  }

  const handleSubmit = () => {
    setFormData(tempFormData);
  };

  const handleClear = () => {
    const initFormData = {
      StudyDate:
        formatDate(new Date("2001-01-01")) + "-" + formatDate(new Date()),
    };
    setTempFormData(initFormData);
    setFormData(initFormData);
  };

  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };

  return (
    <Box sx={{ marginBottom: "1rem" }}>
      <Accordion expanded={expand} className={classes.accordion}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              onClick={toggleAcordion}
              style={{ cursor: "pointer", color: "white" }}
            />
          }
          aria-controls="panel1a-content"
        >
          <Grid container spacing={1}>
            {SearBarParams.filter((filterParam) => filterParam.preset)
              .slice(0, 3)
              .map((filterParam) => {
                return (
                  <FormRender
                    key={filterParam.key}
                    formParam={filterParam}
                    type={filterParam.type}
                    tempFormData={tempFormData}
                    setTempFormData={setTempFormData}
                  />
                );
              })}

            <Grid item xs={12} md={6} lg={3}>
              <Box className={classes.buttonRoot}>
                <Button
                  className={classes.button}
                  sx={{
                    background: "linear-gradient(to right, #00a8b1, #00c3a2)",
                  }}
                  startIcon={<SearchIcon />}
                  variant="contained"
                  onClick={() => {
                    handleSubmit();
                    setExpand(false);
                  }}
                >
                  Search
                </Button>
                <Button
                  className={classes.button}
                  startIcon={<CleaningServicesIcon />}
                  sx={{
                    color: "#EB455F",
                  }}
                  onClick={handleClear}
                >
                  Clear
                </Button>
              </Box>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1}>
            {SearBarParams.filter((filterParam) => filterParam.preset)
              .slice(3)
              .map((filterParam) => {
                return (
                  <FormRender
                    key={filterParam.key}
                    formParam={filterParam}
                    type={filterParam.type}
                    tempFormData={tempFormData}
                    setTempFormData={setTempFormData}
                  />
                );
              })}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default SearchBar;
