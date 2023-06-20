import React, { useEffect, useState } from "react";
import { Modal, Box, Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import useStyles from "./style";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  height: "70%",
  width: "90%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "1rem",
  boxShadow: 24,
  p: 4,
};

const TableModal = ({ handleModalOpenStudy, sethandleModalOpenStudy }) => {
  const classes = useStyles();
  const columns = [
    {
      field: "0020000E",
      headerName: "SeriesInstanceUID",
      renderCell: (params) => params.row["0020000E"].Value[0],
      width: 400,
    },
    {
      field: "00200011",
      headerName: "SeriesNumber",
      renderCell: (params) => params.row["00200011"].Value[0],
      width: 200,
    },
    {
      field: "0008103E",
      headerName: "SeriesDescription",
      renderCell: (params) =>
        params.row["0008103E"].Value ? params.row["0008103E"].Value[0] : "null",
      width: 200,
    },
    {
      field: "00080060",
      headerName: "Modality",
      renderCell: (params) => params.row["00080060"].Value[0],
      width: 150,
    },
    {
      field: "00080061",
      headerName: "OpenSeries",
      renderCell: (params) => (
        <Button
          variant="outlined"
          endIcon={<OpenInNewIcon />}
          onClick={() => {
            const iframeURL = `${handleModalOpenStudy.study.DICOMWebServer.target_wsi}?StudyInstanceUID=${params.row["0020000D"].Value[0]}&SeriesInstanceUID=${params.row["0020000E"].Value[0]}`;
            window.open(iframeURL, "_blank");
          }}
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
        >
          Open Series
        </Button>
      ),
      width: 200,
    },
    {
      field: "instances",
      headerName: "Instances",
      renderCell: (params) => <>{params.row.instances.length}</>,
      width: 150,
    },
  ];
  const handleClose = () => sethandleModalOpenStudy(null);

  return (
    <Modal
      open={handleModalOpenStudy !== null}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <DataGrid
          className={classes.dataGrid}
          rows={handleModalOpenStudy ? handleModalOpenStudy.series : []}
          columns={columns}
          disableColumnMenu
          components={{
            // 自訂底部工具欄，隱藏顯示的資訊
            Footer: () => null,
          }}
        />
      </Box>
    </Modal>
  );
};

export default TableModal;
