import {
  Box,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Fab,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import useStyles from "./style.js";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import PreviewIcon from "@mui/icons-material/Preview";
import pacsServerConfig from "../../../../public/bluelight/data/config.json";

import "./style.css";

const PaginationComponent = ({ paginationForm, setPaginationForm }) => {
  const DICOMServerConfig = pacsServerConfig.DICOMWebServersConfig;
  const classes = useStyles();
  const onChangePageCurrent = (page) => {
    setPaginationForm({ ...paginationForm, current: page });
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.leftAlign}>
        <Fab
          variant="extended"
          sx={{
            textTransform: "none",
            color: "#e3e3e3",
            backgroundImage: "linear-gradient(45deg, #3e508c 30%, #21CBF3 90%)",
            "@media (max-width: 1080px)": {
              "& span": {
                display: "none",
              },
            },
          }}
          onClick={() => {
            const iframeURL = `${DICOMServerConfig[0].target_wsi}`;
            window.open(iframeURL, "_blank");
          }}
        >
          <PreviewIcon />
          <span style={{ marginLeft: "1rem" }}>Open Viewer</span>
        </Fab>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
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
    </Box>
  );
};

export default PaginationComponent;
