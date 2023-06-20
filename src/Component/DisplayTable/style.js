import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  headerCell: {
    position: "relative",
    "& .MuiDataGrid-columnHeaderTitle": {
      visibility: "hidden",
    },
    "& .MuiDataGrid-sortIcon": {
      display: "none",
    },
  },
  dataGrid: {
    boxShadow: 2,
    border: "none",
    position: "relative",
    "& .MuiDataGrid-columnHeaderTitle": {
      visibility: "hidden",
    },
    "& .MuiDataGrid-sortIcon": {
      display: "none",
    },
    "&:hover .MuiDataGrid-sortIcon": {
      display: "none",
    },
    "& .MuiDataGrid-cell:hover": {
      color: "primary.main",
    },
    "& .MuiDataGrid-row:hover": {
      backgroundColor: "transparent",
    },
    "& .MuiDataGrid-row.Mui-selected": {
      backgroundColor: "transparent",
    },
    "& .MuiDataGrid-row.Mui-selected:hover": {
      backgroundColor: "transparent",
    },
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
    },
    "& .MuiDataGrid-columnHeaderTitleContainer .MuiDataGrid-columnHeaderSortIcon":
      {
        fontSize: "1.2rem",
      },
    "& .MuiDataGrid-columnHeaderTitleContainer .MuiDataGrid-columnHeaderSortIcon":
      {
        display: "none", // 隱藏排序圖示
      },
  },
}));

export default useStyles;
