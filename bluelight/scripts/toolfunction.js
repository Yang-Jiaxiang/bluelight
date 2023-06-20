function CreateUid(e){var t="2.16.886.119.102568.9.",r=new Date;return t+=r.getFullYear()+"."+(r.getMonth()+1)+"."+r.getDate()+".",t+=r.getHours()+1+"."+r.getMinutes()+"."+r.getSeconds()+"."+r.getMilliseconds()+".",t+=securePassword(1,99999,1)+".",t+=securePassword(1,99,1)+".",t+=securePassword(1,9999,1)+".",(t+=0==e||"study"==e?securePassword(1,2,1):1==e||"series"==e?securePassword(3,4,1):2==e||"sop"==e?securePassword(5,6,1):securePassword(7,8,1)).length%2!=0&&(t+=0),t}function CreateSecurePassword(){var e="xml_",t=new Date;return e+=t.getFullYear()+"y"+(t.getMonth()+1)+"m"+t.getDate()+"d",e+=t.getHours()+1+"h"+t.getMinutes()+"mm"+t.getSeconds()+"ss"+t.getMilliseconds()+"mmm",(e+=securePassword(1,999,1)+"b")+(securePassword(1,999,1)+"l")}function securePassword(e,t,r){r||(r=1);var n=(t-e)/r+1,i=Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0]/4294967295*n)*r+e;return i<e&&(i=e),i>t&&(i=t),i}function random(e,t,r){r||(r=1);var n=(t-e)/r+1,i=Math.floor(Math.random()*n)*r+e;return i<e&&(i=e),i>t&&(i=t),i}function invertDisplayById(e){(e||getByid(e))&&("none"==getByid(e).style.display?getByid(e).style.display="":getByid(e).style.display="none")}function getCurrPoint(e){var t=GetViewport().canvas();return t?[parseFloat(parseFloat(e.pageX-t.getBoundingClientRect().left-0)*(GetViewport().imageWidth/parseFloat(t.style.width))),parseFloat(parseFloat(e.pageY-t.getBoundingClientRect().top-0)*(GetViewport().imageHeight/parseFloat(t.style.height)))]:[0,0]}function Css(e,t,r){return null==r?e.style[t]:e.style[t]=r}function Ipx(e){return parseInt(e)+"px"}function Fpx(e){return parseFloat(e)+"px"}function ToPx(e){return e+"px"}function getByid(e){return document.getElementById(e)}function getClass(e){return document.getElementsByClassName(e)}function CheckNull(e){return null==e||null==e}function Null2Empty(e){return null!=e&&null!=e||(e=""),e}function getViewprtStretchSize(e,t,r){var n=(parseFloat(r.clientWidth)-2*bordersize)/parseFloat(e),i=(parseFloat(r.clientHeight)-2*bordersize)/parseFloat(t),o=i<n?i:n;return[e*=o,t*=o]}function getViewportFixSize(e,t,r,n){for(;e>window.innerWidth-100-2*bordersize&&e>=10;)e-=5;for(;t>window.innerHeight-document.getElementsByClassName("container")[0].offsetTop-2*bordersize&&t>=10;)t-=5;return[e/n,t/r]}function getStretchSize(e,t,r){if(e>window.innerWidth||t>window.innerHeight-document.getElementsByClassName("container")[0].offsetTop-2*bordersize)for(;(e>window.innerWidth||t>window.innerHeight-document.getElementsByClassName("container")[0].offsetTop-2*bordersize)&&(t*=.99,!((e*=.99)<10||t<10)););else if(window.innerWidth>window.innerHeight-document.getElementsByClassName("container")[0].offsetTop-2*bordersize){var n=(window.innerHeight-document.getElementsByClassName("container")[0].offsetTop-2*bordersize)/parseFloat(t);t*=n,e*=n}return[e,t]}function getFixSize(e,t,r){for(;e>window.innerWidth-100-2*bordersize&&e>=10;)e-=5;for(;t>window.innerHeight-document.getElementsByClassName("container")[0].offsetTop-2*bordersize&&t>=10;)t-=5;return[e,t]}function GetmouseX(e){return e.pageX?e.pageX:e.clientX?e.clientX+(document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft):null}function GetmouseY(e){return e.pageY?e.pageY:e.clientY?e.clientY+(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop):null}function SearchUid2Json(e){for(var t=0;t<Patient.StudyAmount;t++)for(var r=0;r<Patient.Study[t].SeriesAmount;r++)for(var n=0;n<Patient.Study[t].Series[r].SopAmount;n++)if(Patient.Study[t].Series[r].Sop[n].SopUID==e)return{studyuid:t,sreiesuid:r,sopuid:n}}function SearchUid2Index(e){for(var t=0;t<Patient.StudyAmount;t++)for(var r=0;r<Patient.Study[t].SeriesAmount;r++)for(var n=0;n<Patient.Study[t].Series[r].SopAmount;n++)if(Patient.Study[t].Series[r].Sop[n].SopUID==e)return[t,r,n]}function SearchUid2IndexBySeries(e){for(var t=0;t<Patient.StudyAmount;t++)for(var r=0;r<Patient.Study[t].SeriesAmount;r++)if(Patient.Study[t].Series[r].SeriesUID==e)return[t,r]}function SearchNowUid(){let e=GetViewport().sop;for(var t=0;t<Patient.StudyAmount;t++)for(var r=0;r<Patient.Study[t].SeriesAmount;r++)for(var n=0;n<Patient.Study[t].Series[r].SopAmount;n++)if(Patient.Study[t].Series[r].Sop[n].SopUID==e)return{studyuid:Patient.Study[t],sreiesuid:Patient.Study[t].Series[r],sopuid:e}}function GetNowUid(){let e=GetViewport().sop;for(var t=0;t<Patient.StudyAmount;t++)for(var r=0;r<Patient.Study[t].SeriesAmount;r++)for(var n=0;n<Patient.Study[t].Series[r].SopAmount;n++)if(Patient.Study[t].Series[r].Sop[n].SopUID==e)return{study:Patient.Study[t].StudyUID,sreies:Patient.Study[t].Series[r].SeriesUID,sop:Patient.Study[t].Series[r].Sop[n].SopUID}}function sortInstance(e){let t=SearchUid2Index(e),r=t[0],n=t[1],i=t[2];if(Patient.Study[r].Series[n].Sop[i].SopUID==e){for(var o=[],a=(parseInt(Patient.Study[r].Series[n].Sop[i].InstanceNumber),0);a<Patient.Study[r].Series[n].Sop.length;a++)o.push(Patient.Study[r].Series[n].Sop[a]);for(var s=0;s<o.length;s++)for(var u=0;u<o.length;u++)if(parseInt(o[s].InstanceNumber)<parseInt(o[u].InstanceNumber)){var d=o[s];o[s]=o[u],o[u]=d}return o}}function getAllSop(e){let t;function r(e,t,r){var n=[];for(r=0;r<Patient.Study[e].Series[t].SopAmount;r++)n.push(Patient.Study[e].Series[t].Sop[r].SopUID);return n}t=e||GetViewport().sop;for(var n=0;n<Patient.StudyAmount;n++)for(var i=0;i<Patient.Study[n].SeriesAmount;i++)for(var o=0;o<Patient.Study[n].Series[i].SopAmount;o++)if(Patient.Study[n].Series[i].Sop[o].SopUID==t)return r(n,i,o)}function getImgaeIdFromSop(e){for(var t=0;t<Patient.StudyAmount;t++)for(var r=0;r<Patient.Study[t].SeriesAmount;r++)for(var n=0;n<Patient.Study[t].Series[r].SopAmount;n++)if(e==Patient.Study[t].Series[r].Sop[n].SopUID)return Patient.Study[t].Series[r].Sop[n].imageId}function getNowInstance(){for(var e=0,t=GetViewport().sop,r=0;r<Patient.StudyAmount;r++)for(var n=0;n<Patient.Study[r].SeriesAmount;n++)for(var i=0;i<Patient.Study[r].Series[n].SopAmount;i++)if(Patient.Study[r].Series[n].Sop[i].SopUID==t)for(var o=parseInt(Patient.Study[r].Series[n].Sop[i].InstanceNumber),a=sortInstance(t),s=0;s<a.length;s++)a[s].InstanceNumber==o&&(e=s);return e}function rotateCalculation(e){var t=GetViewport().canvas();if(!t)return[0,0];let r=GetViewport().imageWidth/2,n=GetViewport().imageHeight/2;t.style.transform="translate("+Fpx(GetViewport().newMousePointX)+","+Fpx(GetViewport().newMousePointY)+")";let i=(e.pageX-t.getBoundingClientRect().left-0)*(GetViewport().imageWidth/parseFloat(t.style.width)),o=(e.pageY-t.getBoundingClientRect().top-0)*(GetViewport().imageHeight/parseFloat(t.style.height));t.style.transform="translate("+Fpx(GetViewport().newMousePointX)+","+Fpx(GetViewport().newMousePointY)+")rotate("+GetViewport().rotateValue+"deg)";let a=GetViewport().rotateValue*(Math.PI/180),s=Math.cos(a),u=Math.sin(a),d=s*(o-n)-u*(i-r)+n;return i=s*(i-r)+u*(o-n)+r,o=d,[i,o]}function rotatePoint(e,t,r){let n=r[0],i=r[1];currX=e[0],currY=e[1];let o=t*(Math.PI/180),a=Math.cos(o),s=Math.sin(o),u=a*(currX-n)+s*(currY-i)+n,d=a*(currY-i)-s*(currX-n)+i;return currX=u,currY=d,[currX,currY]}function GetViewport(e){return getByid(e?"MyDicomDiv"+(e+0):0===e?"MyDicomDiv0":"MyDicomDiv"+(viewportNumber+0))}function GetViewportMark(e){return getByid(e?"MarkCanvas"+(e-0):0===e?"MarkCanvas0":"MarkCanvas"+(viewportNumber-0))}function jump2UpOrEnd(e,t){let r=SearchUid2Index(GetViewport().sop),n=r[0],i=r[1];r[2];for(var o=99999999,a=-9999999,s=0;s<Patient.Study[n].Series[i].SopAmount;s++){var u=parseInt(Patient.Study[n].Series[i].Sop[s].InstanceNumber);u<o?o=u:u>a&&(a=u)}for("up"==t?e=o:"end"==t?e=a:(e>a&&(e=a),e<o&&(e=o)),s=0;s<Patient.Study[n].Series[i].SopAmount;s++)if(parseInt(Patient.Study[n].Series[i].Sop[s].InstanceNumber)==e)return void loadAndViewImage(getImgaeIdFromSop(Patient.Study[n].Series[i].Sop[s].SopUID))}function jump2Mark(e){let t=SearchUid2Index(GetViewport().sop);if(!t)return;let r=t[0],n=t[1];t[2];for(var i=0;i<PatientMark.length;i++)if(PatientMark[i].series==Patient.Study[r].Series[n].SeriesUID&&PatientMark[i].showName==e)for(var o=0;o<PatientMark[i].mark.length;o++){let e=0;if(e=checkMark(r,n,i),0!=e)return void loadAndViewImage(getImgaeIdFromSop(PatientMark[i].sop))}}function checkMark2(e,t){for(var r=0;r<dicomImageCount;r++)if(getByid("dicomDivListDIV"+r)&&getByid("dicomDivListDIV"+r).series==e){var n=document.querySelectorAll("#dicomDivListDIV"+r+" label input");for(var i in n)if(n[i].name==t.hideName&&"true"==n[i].series)return 1}return 0}function checkMark(e,t,r){let n=0;for(var i=0;i<dicomImageCount;i++)if(getByid("dicomDivListDIV"+i)&&getByid("dicomDivListDIV"+i).series==Patient.Study[e].Series[t].SeriesUID){var o=document.querySelectorAll("#dicomDivListDIV"+i+" label input");for(var a in o)if(o[a].name==PatientMark[r].hideName&&"true"==o[a].series)return n=1,n}return n}function refreshMark(e,t){if(0!=t){var r=SearchUid2Index(e.sop);if(r){for(var n,i=r[0],o=r[1],a=(r[2],0);a<dicomImageCount;a++)getByid("dicomDivListDIV"+a)&&getByid("dicomDivListDIV"+a).series==Patient.Study[i].Series[o].SeriesUID&&(n=a);SetToLeft(Patient.Study[i].Series[o].SeriesUID,n,Patient.Study[i].PatientId);for(var s=0;s<Viewport_Total;s++)displayMark(s)}}}function refreshMarkFromSop(e){var t=SearchUid2Index(e);if(t){for(var r,n=t[0],i=t[1],o=(t[2],0);o<dicomImageCount;o++)getByid("dicomDivListDIV"+o)&&getByid("dicomDivListDIV"+o).series==Patient.Study[n].Series[i].SeriesUID&&(r=o);SetToLeft(Patient.Study[n].Series[i].SeriesUID,r,Patient.Study[n].PatientId);for(var a=0;a<Viewport_Total;a++)displayMark(a)}}function dropTable(e){var t;getByid("DicomTagsTable"+(e+1))&&(t=getByid("DicomTagsTable"+(e+1))).parentElement.removeChild(t),getByid("AimTable"+(e+1))&&(t=getByid("AimTable"+(e+1))).parentElement.removeChild(t)}function getDistance(e,t){return Math.sqrt(e*e+t*t)}function getRotationPoint(e,t){for(var r=-999999,n=-999999,i=999999,o=999999,a=0;a<e.markX.length;a+=1)parseInt(e.markX[a])>=r&&(r=parseInt(e.markX[a])),parseInt(e.markX[a])<=i&&(i=parseInt(e.markX[a]));for(a=0;a<e.markY.length;a+=1)parseInt(e.markY[a])>=n&&(n=parseInt(e.markY[a])),parseInt(e.markY[a])<=o&&(o=parseInt(e.markY[a]));return 1==t?[(r+i)/2,(n+o)/2]:[r,i,n,o]}function ConvertGraphicColor(e,t,r){var n=e+"\\"+t+"\\"+r;return"0\\32896\\32896"==n?["#000000","T7"]:"0\\32896\\33153"==n?["#0000FF","T8"]:"393\\32998\\32947"==n?["#844200","T9"]:"0\\33153\\33153"==n?["#00FFFF","T10"]:"0\\33153\\32896"==n?["#00FF00","T11"]:"655\\32896\\33153"==n?["#FF00FF","T12"]:"655\\33025\\32896"==n?["#FFA500","L1"]:"328\\32896\\33025"==n?["#663399","L2"]:"655\\32896\\32896"==n?["#FF0000","L3"]:"655\\33153\\32896"==n?["#FFFF00","L4"]:"655\\33153\\33153"==n?["#FFFFFF","L5"]:void 0}function SetGraphicColor(e){return"#000000"==e?"0\\32896\\32896":"#0000FF"==e?"0\\32896\\33153":"#844200"==e?"393\\32998\\32947":"#00FFFF"==e?"0\\33153\\33153":"#00FF00"==e?"0\\33153\\32896":"#FF00FF"==e?"655\\32896\\33153":"#FFA500"==e?"655\\33025\\32896":"#663399"==e?"328\\32896\\33025":"#FF0000"==e?"655\\32896\\32896":"#FFFF00"==e?"655\\33153\\32896":"#FFFFFF"==e?"655\\33153\\33153":"0\\32896\\33153"}function equal_TOL(e,t,r){return void 0===r&&(r=1),Math.abs(e-t)<=r}