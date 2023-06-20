import { apiGetSeriesTag, apiGetInstances } from "../Axios/pacsServer";
import moment from "moment";

const studiesGetSeriesTag = async (studies) => {
  const response = await apiGetSeriesTag({
    QIDO: `${studies.DICOMWebServer.target}${studies.DICOMWebServer.QIDO}`,
    studyInstanceUID: studies["0020000D"].Value[0],
  });
  return response.data;
};

export const sortByDate = (data) => {
  const sortedData = data.sort((a, b) => {
    const dateA = moment(a["00080020"].Value[0], "YYYYMMDD", true).isValid()
      ? moment(a["00080020"].Value[0], "YYYYMMDD", true)
      : moment("19000101", "YYYYMMDD", true);
    const dateB = moment(b["00080020"].Value[0], "YYYYMMDD", true).isValid()
      ? moment(b["00080020"].Value[0], "YYYYMMDD", true)
      : moment("19000101", "YYYYMMDD", true);

    return dateB - dateA;
  });
  return sortedData;
};

export const getSeriesInstancesSartEnd = async (allStudies, paginationForm) => {
  const start = (paginationForm.current - 1) * paginationForm.pageSize;
  const end = start + paginationForm.pageSize;

  const studys = await Promise.all(
    allStudies.slice(start, end).map(async (item) => {
      const series = await studiesGetSeriesTag(item);
      return { ...item, series };
    })
  );

  const resultsSeries = await Promise.all(
    studys.map(async (study) => {
      const results = await Promise.all(
        study.series.map(async (series) => {
          const response = await apiGetInstances({
            QIDO: `${study.DICOMWebServer.target}${study.DICOMWebServer.QIDO}`,
            studyInstanceUID: study["0020000D"].Value[0],
            seriesInstanceUID: series["0020000E"].Value[0],
          });
          return { ...series, instances: response.data };
        })
      );
      return { ...study, series: results };
    })
  );

  const results = resultsSeries.map((item) => {
    const stydyInstanceUID = item["0020000D"].Value[0];
    const seriesInstanceUID = item.series[0]["0020000E"].Value[0];
    const SOPInstanceUID = item.series[0].instances[0]["00080018"].Value[0];

    const imageURL = `${item.DICOMWebServer.target}${item.DICOMWebServer["WADO-URI"]}/wado?requestType=WADO&studyUID=${stydyInstanceUID}&seriesUID=${seriesInstanceUID}&objectUID=${SOPInstanceUID}&contentType=image/jpeg`;
    return {
      ...item,
      imageURL,
    };
  });

  return results;
};

export const formatDate = (date) => {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}${month}${day}`;
};

export const mappingDataset = (dataArray) => {
  // 合并所有的数组项
  const mergedArray = dataArray.flat();

  // 使用Set数据结构来过滤出唯一值
  const uniqueValues = [
    ...new Set(mergedArray.map((item) => item["0020000D"].Value[0])),
  ];

  // 根据唯一值来过滤出对应的数据集
  const dataset = uniqueValues.map((studyInstanceUID) => {
    const studys = mergedArray.filter(
      (item) => item["0020000D"].Value[0] === studyInstanceUID
    );
    const serverOF = studys.map((item) => item.server);
    return { ...studys[0], server: serverOF };
  });

  return dataset;
};
