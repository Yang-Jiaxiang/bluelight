import React, { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Box, Chip, Button, Badge } from "@mui/material";
import { apiGetSeriesTag } from "../../Axios/pacsServer.js";
import TableModal from "../TableModal/TableModal.js";
import moment from "moment";
import useStyles from "./style.js";

const DisplayTable = ({ DICOMData }) => {
  const classes = useStyles();
  const [handleModalOpenStudy, sethandleModalOpenStudy] = useState(null);
  const columns = [
    {
      field: "previewImage",
      headerName: "Preview Image",
      width: 150,
      renderCell: (params) => (
        <Box style={{ cursor: "pointer" }}>
          <img
            src={params.row.imageURL}
            width={150}
            height={100}
            onClick={() => {
              const iframeURL = `${params.row.DICOMWebServer.target_wsi}?StudyInstanceUID=${params.row["0020000D"].Value[0]}`;
              window.open(iframeURL, "_blank");
            }}
          />
        </Box>
      ),
    },
    {
      field: "00100020",
      headerName: "PatientID",
      width: 150,
      renderCell: (params) => <>{params.row["00100020"].Value[0] || null}</>,
    },
    {
      field: "00100010",
      headerName: "PatientName",
      width: 150,
      renderCell: (params) => (
        <>{params.row["00100010"].Value[0].Alphabetic || null}</>
      ),
    },
    {
      field: "00080050",
      headerName: "AccessionNumber",
      width: 200,
      renderCell: (params) => (
        <>
          {params.row["00080050"].Value
            ? params.row["00080050"].Value[0]
            : null}
        </>
      ),
    },
    {
      field: "server",
      headerName: "servers",
      width: 300,
      renderCell: (params) => (
        <Box sx={{ display: "flex", flexWrap: "wrap" }} spacing={1}>
          {params.row.server.map((item) => (
            <Chip
              label={item.value}
              key={item.value}
              sx={{ marginRight: ".5rem" }}
              onClick={() => {
                console.log(item.value);
                console.log(item.URL);
                const iframeURL = `${item.URL}?StudyInstanceUID=${params.row["0020000D"].Value[0]}`;
                window.open(iframeURL, "_blank");
              }}
            />
          ))}
        </Box>
      ),
    },
    {
      field: "00100040",
      headerName: "PatientSex",
      width: 150,
      renderCell: (params) => <>{params.row["00100040"].Value[0]}</>,
    },
    {
      field: "00080020",
      headerName: "StudyDate",
      width: 150,
      renderCell: (params) => {
        if (
          moment(params.row["00080020"].Value[0], "YYYYMMDD", true).isValid()
        ) {
          return (
            <Box>
              <Box>
                {moment(params.row["00080020"].Value[0], "YYYYMMDD").format(
                  "YYYY/MM/DD"
                )}
              </Box>
              <Box sx={{ fontSize: ".8rem", color: "gray.main" }}>
                {moment(params.row["00080020"].Value[0], "YYYYMMDD").format(
                  "HH:mm:ss"
                )}
              </Box>
            </Box>
          );
        } else {
          return (
            <Box>
              <Box>
                {new Date(params.row["00080020"].Value[0]).toLocaleDateString()}
              </Box>
              <Box sx={{ fontSize: ".8rem", color: "gray.main" }}>
                {new Date(params.row["00080020"].Value[0]).toLocaleTimeString()}
              </Box>
            </Box>
          );
        }
      },
    },
    {
      field: "series",
      headerName: "Series",
      width: 150,
      renderCell: (params) => (
        <Badge
          sx={{
            overflow: "visible",
            maxWidth: "max-content",
            "& .MuiBadge-badge": {
              backgroundColor: "#9e9e9e",
            },
            "& .MuiTabs-scroller": { overflow: "visible !important" },
          }}
          badgeContent={params.row.series.length}
        >
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              fontSize: ".8rem",
              borderColor: "#000",
              backgroundColor: "#000",
              color: "#fff",
              "&:hover": {
                color: "#000",
                borderColor: "#000",
              },
            }}
            onClick={() =>
              sethandleModalOpenStudy({
                series: params.row.series.map((item, index) => {
                  return { ...item, id: index };
                }),
                study: params.row,
              })
            }
          >
            Series
          </Button>
        </Badge>
      ),
    },
  ];

  return (
    <Box>
      <DataGrid
        className={classes.dataGrid}
        getRowHeight={(params) => 100}
        rows={DICOMData}
        columns={columns}
        disableColumnMenu
        components={{
          // 自訂底部工具欄，隱藏顯示的資訊
          Footer: () => null,
        }}
      />
      <TableModal
        handleModalOpenStudy={handleModalOpenStudy}
        sethandleModalOpenStudy={sethandleModalOpenStudy}
      />
    </Box>
  );
};

export default DisplayTable;
