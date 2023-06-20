import Request from "./APIConfig";

const apiGetStudy = ({ DICOMWebServers, params }) =>
  Request.get(`${DICOMWebServers.target}${DICOMWebServers.QIDO}/studies`, {
    params,
  });

const apiGetSeriesTag = ({ QIDO, studyInstanceUID }) =>
  Request.get(`${QIDO}/studies/${studyInstanceUID}/series`);

const apiGetInstances = ({ QIDO, studyInstanceUID, seriesInstanceUID }) =>
  Request.get(
    `${QIDO}/studies/${studyInstanceUID}/series/${seriesInstanceUID}/instances`
  );

export { apiGetStudy, apiGetSeriesTag, apiGetInstances };
