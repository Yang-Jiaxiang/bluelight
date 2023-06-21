import React, { useState, useEffect } from "react";
import { apiGetStudy } from "./Axios/pacsServer.js";
import pacsServerConfig from "../../public/bluelight/data/config.json";
import DisplayTable from "./Component/DisplayTable/displayTable.js";
import SearchBar from "./Component/SearchBar/searchBar.js";
import PaginationComponent from "./Component/Pagination/pagination.js";
import { Box } from "@mui/material";
import {
  getSeriesInstancesSartEnd,
  formatDate,
  mappingDataset,
  sortByDate,
} from "./Script/index.js";
import useStyles from "./style.js";

const DICOMServerConfig = pacsServerConfig.DICOMWebServersConfig;

const App = () => {
  const classes = useStyles();
  const [DICOMData, setDicomData] = useState([]);
  const [formData, setFormData] = useState({
    StudyDate:
      formatDate(new Date("2001-01-01")) + "-" + formatDate(new Date()),
  });
  const [paginationForm, setPaginationForm] = useState({
    pageSize: 10,
    current: 1,
  });
  const [tableDICOMData, setTableDICOMData] = useState([]);
  // 根据配置文件来获取数据
  const requests = DICOMServerConfig.map(async (DICOMWebServer) => {
    const response = await apiGetStudy({
      DICOMWebServers: DICOMWebServer,
      params: { limit: 999, ...formData },
    });
    if (!response.data) {
      return [];
    } else {
      return response.data.map((item) => {
        return {
          ...item,
          server: DICOMWebServer.AETitle,
          DICOMWebServer: DICOMWebServer,
        };
      });
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataArray = await Promise.all(requests);
        const dataset = mappingDataset(dataArray).map((item, index) => {
          return { ...item, id: item["0020000D"].Value[0] };
        });
        setDicomData(sortByDate(dataset));
        setTableDICOMData(
          await getSeriesInstancesSartEnd(dataset, paginationForm)
        );
      } catch (error) {
        console.error("Error fetching DICOM data:", error);
      }
    };

    fetchData();
  }, [formData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTableDICOMData(
          await getSeriesInstancesSartEnd(DICOMData, paginationForm)
        );
      } catch (error) {
        console.error("Error fetching DICOM data:", error);
      }
    };
    fetchData();
  }, [paginationForm]);

  return (
    <Box className={classes.root}>
      <SearchBar formData={formData} setFormData={setFormData} />

      <Box className={classes.tableRoot}>
        <Box className={classes.table}>
          <DisplayTable DICOMData={tableDICOMData} />
        </Box>
        <PaginationComponent
          paginationForm={{ ...paginationForm, total: DICOMData.length }}
          setPaginationForm={setPaginationForm}
        />
      </Box>
    </Box>
  );
};

export default App;
