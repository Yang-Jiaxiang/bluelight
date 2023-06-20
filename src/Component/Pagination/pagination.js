import { Box, Select, FormControl, MenuItem, InputLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import useStyles from "./style.js";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import "./style.css";

const PaginationComponent = ({ paginationForm, setPaginationForm }) => {
  const classes = useStyles();
  const onChangePageCurrent = (page) => {
    setPaginationForm({ ...paginationForm, current: page });
  };

  return (
    <Box className={classes.root}>
      <Box>
        <Pagination
          style={{ marginRight: "10px" }}
          className="pagination-data"
          showTotal={(total, range) =>
            `Showing ${range[0]}-${range[1]} of ${total}`
          }
          onChange={onChangePageCurrent}
          total={paginationForm.total}
          current={paginationForm.current}
          pageSize={paginationForm.pageSize}
          itemRender={(current, type, originalElement) => {
            if (type === "prev") {
              return <NavigateBeforeIcon />;
            }
            if (type === "next") {
              return <NavigateNextIcon />;
            }
            return originalElement;
          }}
        />
      </Box>
      <Box>
        <FormControl
          sx={{ m: 1, minWidth: 120 }}
          size="small"
          variant="standard"
        >
          <InputLabel id="demo-simple-select-label">PageSize</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={paginationForm.pageSize}
            label="Age"
            onChange={(e) =>
              setPaginationForm({
                ...paginationForm,
                pageSize: e.target.value,
              })
            }
          >
            {[5, 10, 20].map((item) => {
              return (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default PaginationComponent;
