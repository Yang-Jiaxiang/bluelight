var openMPR2=!1,o3dPixelData=[],o3dPixelData2=[],o3dImage=[],thicknessList_MPR=[],Thickness_MPR=0;function loadMPR2(){var e=document.createElement("SPAN");e.id="ImgMPR2_span",e.innerHTML='<img class="img MPR2 MPR_icon" alt="3d" id="ImgMPR2" src="../image/icon/black/b_LocalizerLines.png" width="50" height="50">',getByid("icon-list").appendChild(e)}function loadMPR2_UI(){var e;getByid("MouseOperation_MPR2")||((e=document.createElement("IMG")).src=getByid("MouseOperation").src,e.id="MouseOperation_MPR2",e.className="MPR_icon",e.width=e.height="50",e.style.filter="sepia(100%)",getByid("MouseOperation_span").appendChild(e)),getByid("WindowRevision_MPR")||((e=document.createElement("IMG")).src=getByid("WindowRevision").src,e.id="WindowRevision_MPR",e.className="img MPR_icon_hide",e.width=e.height="50",e.style.filter="sepia(100%)",getByid("WindowRevision_span").appendChild(e)),getByid("b_Scroll_MPR")||((e=document.createElement("IMG")).src=getByid("b_Scroll").src,e.id="b_Scroll_MPR",e.className="img MPR_icon_hide",e.width=e.height="50",e.style.filter="sepia(100%)",getByid("b_Scroll_span").appendChild(e)),getByid("MouseRotate_MPR")||((e=document.createElement("IMG")).src=getByid("MouseRotate").src,e.id="MouseRotate_MPR",e.className="img MPR_icon_hide",e.width=e.height="50",e.style.filter="sepia(100%)",getByid("MouseRotate_span").appendChild(e)),getByid("ImgMPR2_MPR")||((e=document.createElement("IMG")).src=getByid("ImgMPR2").src,e.id="ImgMPR2_MPR",e.className="MPR_icon",e.width=e.height="50",e.style.filter="sepia(100%)",getByid("ImgMPR2_span").appendChild(e))}function enterMPR_UI2(){getByid("MouseOperation_MPR2").style.display="",getByid("WindowRevision_MPR").style.display="",getByid("b_Scroll_MPR").style.display="",getByid("MouseRotate_MPR").style.display="",getByid("ImgMPR2_MPR").style.display="",getByid("MouseOperation").style.display="none",getByid("WindowRevision").style.display="none",getByid("WindowLevelDiv").style.display="none",getByid("b_Scroll").style.display="none",getByid("MouseRotate").style.display="none",getByid("ImgMPR2").style.display="none",openLeftImgClick=!1}function exitMPR2_UI(){getByid("MouseOperation_MPR2").style.display="none",getByid("WindowRevision_MPR").style.display="none",getByid("b_Scroll_MPR").style.display="none",getByid("MouseRotate_MPR").style.display="none",getByid("ImgMPR2_MPR").style.display="none",getByid("MouseOperation").style.display="",getByid("WindowRevision").style.display="",getByid("WindowLevelDiv").style.display="",getByid("b_Scroll").style.display="",getByid("MouseRotate").style.display="",getByid("ImgMPR2").style.display="",openLeftImgClick=!0}function drawBorderMPR(e){for(var t=getClass("MPR_icon"),i=0;i<t.length;i++)Css(t[i],"border","");Css(e,"border","3px #FFFFFF solid"),Css(e,"borderRadius","3px 3px 3px 3px")}loadMPR2(),loadMPR2_UI(),getByid("MouseOperation_MPR2").style.display="none",getByid("WindowRevision_MPR").style.display="none",getByid("b_Scroll_MPR").style.display="none",getByid("MouseRotate_MPR").style.display="none",getByid("ImgMPR2_MPR").style.display="none";var MPRWheel=function(e){};function exitMPR2(){if(1!=openMPR2){exitMPR2_UI(),VIEWPORT.fixRow=VIEWPORT.fixCol=null,VIEWPORT.lockViewportList=[],window.removeEventListener("resize",resizeVR,!1),GetViewport(0).removeEventListener("wheel",MPRWheel,!1),GetViewport(1).removeEventListener("wheel",MPRWheel,!1),GetViewport(2).removeEventListener("wheel",MPRWheel,!1),GetViewport(0).removeChild(getByid("canvas0_MPR")),GetViewport(1).removeChild(getByid("canvas1_MPR")),GetViewport(2).removeChild(getByid("canvas2_MPR")),cancelTools(),openMouseTool=!0,drawBorder(getByid("MouseOperation")),getByid("ImgMPR2").src="../image/icon/black/b_LocalizerLines.png";for(var e=0;e<Viewport_Total;e++)GetViewport(e).removeEventListener("contextmenu",contextmenuF,!1),GetViewport(e).removeEventListener("mousemove",Mousemove,!1),GetViewport(e).removeEventListener("mousedown",Mousedown,!1),GetViewport(e).removeEventListener("mouseup",Mouseup,!1),GetViewport(e).removeEventListener("mouseout",Mouseout,!1),GetViewport(e).removeEventListener("wheel",Wheel,!1),GetViewport(e).removeEventListener("mousedown",thisF,!1),GetViewport(e).removeEventListener("touchstart",touchstartF,!1),GetViewport(e).removeEventListener("touchend",touchendF,!1),GetViewport(e).addEventListener("touchstart",thisF,!1),GetViewport(e).addEventListener("mousedown",thisF,!1);viewportNumber=0,window.onresize(),o3DListLength=0;var t=SearchUid2Json(GetViewport(0).sop);t&&loadAndViewImage(Patient.Study[t.studyuid].Series[t.sreiesuid].Sop[t.sopuid].imageId,0),o3dPixelData=[],o3dPixelData2=[],o3dImage=[],thicknessList_MPR=[],getByid("MouseOperation").click()}}function initMPR2(){if(0!=openMPR2){getByid("MouseOperation_MPR2").click(),enterMPR_UI2(),VIEWPORT.fixRow=1,VIEWPORT.fixCol=3,openLink=!1,changeLinkImg(),openAnnotation=!1,displayAnnotation(),getByid("SplitViewportDiv").style.display="none",cancelTools(),getByid("ImgMPR2").src="../image/icon/black/b_AdvancedMode_on.png";var e=GetViewport().sop;SetTable(1,3);var t=SearchUid2Json(e);GetViewport().NowCanvasSizeWidth=GetViewport().NowCanvasSizeHeight=null;for(var i=0;i<3;i++)GetViewport(i).canvas().style.display=GetViewportMark(i).style.display="none";viewportNumber=0,loadAndViewImage(Patient.Study[t.studyuid].Series[t.sreiesuid].Sop[t.sopuid].imageId),VIEWPORT.lockViewportList=[0,1,3],window.addEventListener("resize",resizeVR,!1);for(var a=0;a<Viewport_Total;a++)GetViewport(a).removeEventListener("contextmenu",contextmenuF,!1),GetViewport(a).removeEventListener("mousemove",Mousemove,!1),GetViewport(a).removeEventListener("mousedown",Mousedown,!1),GetViewport(a).removeEventListener("mouseup",Mouseup,!1),GetViewport(a).removeEventListener("mouseout",Mouseout,!1),GetViewport(a).removeEventListener("wheel",Wheel,!1),GetViewport(a).removeEventListener("mousedown",thisF,!1),GetViewport(a).removeEventListener("touchstart",touchstartF,!1),GetViewport(a).removeEventListener("touchend",touchendF,!1),GetViewport(a).removeEventListener("touchstart",thisF,!1);GetViewport().addEventListener("contextmenu",contextmenuF,!1),GetViewport().addEventListener("mouseout",Mouseout,!1),GetViewport(3).addEventListener("mousemove",mousemove3D,!1),GetViewport(3).addEventListener("mousedown",mousedown3D,!1),GetViewport(3).addEventListener("mouseup",mouseup3D,!1),GetViewport(3).addEventListener("contextmenu",contextmenuF,!1);var n=sortInstance(e);o3DListLength=n.length,Thickness_MPR=0;var o=1e29;openRendering=!0,img2darkByClass("Rendering",!openRendering),thicknessList_MPR=[],o3dPixelData=[],o3dPixelData2=[],Thickness_MPR=-Thickness_MPR+o;for(var s=0;s<n.length;s++){const e=s,t=getPatientbyImageID[n[e].imageId].image,i=getPatientbyImageID[n[e].imageId].pixelData;o3dPixelData.push(i),o3dImage.push(t);for(var r=new Array(t.height),d=0;d<t.height;d++)r[d]=new Uint8ClampedArray(4*t.width);r=h(o3dImage[o3dImage.length-1],o3dPixelData[o3dPixelData.length-1],r),o3dPixelData2.push(r);try{var l=parseFloat(t.data.string("x00200032").split("\\")[2])*GetViewport().PixelSpacingX;thicknessList_MPR.push(l),l<Thickness_MPR&&(Thickness_MPR=l),l<o&&(o=l),o3Dcount=n.length}catch(e){return catchError=!0,1==openMPR2&&(openMPR2=!1,alert("Error, this image may not support 3D.")),openRendering=!1,void getByid("ImgMPR2").click("error")}}display3dImage2Canvas()}function h(e,t,i){var a=e.windowWidth,n=e.windowCenter;1==getByid("o3DAngio").selected?(a=332,n=287):1==getByid("o3DAirways").selected&&(a=409,n=-538);var o=n+a/2,s=n-a/2,r=e.intercept;CheckNull(r)&&(r=0);var d=e.slope;CheckNull(d)&&(d=1);for(var l=255/(o-s)*d,h=(-s+r)/(o-s)*255,p=0,g=0;g<i.length;g++)for(var v=0,w=0;v<i[g].length/4;v++,w+=4,p++)i[g][w+0]=i[g][w+1]=i[g][w+2]=t[p]*l+h,i[g][w+3]=255;return i}}function trueMousedownClick(e){1==e.which?this.MouseLeftClick=!0:2==e.which?this.MouseMiddleClick=!0:3==e.which&&(this.MouseRightClick=!0)}function falseMousedownClick(e){this.MouseLeftClick=!1,this.MouseMiddleClick=!1,this.MouseRightClick=!1}function getVrDistance(){var e=0;return e+=thicknessList_MPR[thicknessList_MPR.length-1]-Thickness_MPR-(thicknessList_MPR[0]-Thickness_MPR),0==(e/=o3dPixelData2.length)&&(e=1),e<0&&(e*=-1),e}function Line_forMPR(e,t,i,a){if(e&&t){var n=Math.sqrt((e[0]-t[0])*(e[0]-t[0])+(e[1]-t[1])*(e[1]-t[1])),o=e[0]>t[0]?t[0]:e[0],s=e[1]>t[1]?t[1]:e[1],r=e[0]<t[0]?t[0]:e[0],d=e[1]<t[1]?t[1]:e[1],l=[];if(e[0]==o&&e[1]==s)for(var h=0;h<parseInt(n);h++){var p=parseInt(o+(r-o)/n*h),g=parseInt(s+(d-s)/n*h);p>=i[0]&&g>=i[1]&&p<a[0]&&g<a[1]&&l.push([p,g])}else if(e[0]==r&&e[1]==d)for(h=0;h<parseInt(n);h++)p=parseInt(r-(r-o)/n*h),g=parseInt(d-(d-s)/n*h),p>=i[0]&&g>=i[1]&&p<a[0]&&g<a[1]&&l.push([p,g]);else if(e[0]==o&&e[1]==d)for(h=0;h<parseInt(n);h++)p=parseInt(o+(r-o)/n*h),g=parseInt(d-(d-s)/n*h),p>=i[0]&&g>=i[1]&&p<a[0]&&g<a[1]&&l.push([p,g]);else if(e[0]==r&&e[1]==s)for(h=0;h<parseInt(n);h++)p=parseInt(r-(r-o)/n*h),g=parseInt(s+(d-s)/n*h),p>=i[0]&&g>=i[1]&&p<a[0]&&g<a[1]&&l.push([p,g]);return l}}function display3dImage2Canvas(){var e=getVrDistance(),t=document.createElement("CANVAS");t.id="canvas0_MPR",t.width=GetViewport().imageWidth,t.height=GetViewport().imageHeight,GetViewport(0).appendChild(t),t.MouseLeftClick=!1,t.MouseRightClick=!1,t.rotate=0,t.addEventListener("mousedown",trueMousedownClick,!1),t.addEventListener("mousemove",mpr2Canvas0,!1),t.addEventListener("mouseup",falseMousedownClick,!1),t.oncontextmenu=function(e){e.preventDefault()};var i=document.createElement("CANVAS");i.id="canvas1_MPR",i.width=GetViewport().imageWidth,i.height=e*o3dPixelData2.length,GetViewport(1).appendChild(i),i.MouseLeftClick=!1,i.MouseRightClick=!1,i.rotate=0,i.addEventListener("mousedown",trueMousedownClick,!1),i.addEventListener("mousemove",mpr2Canvas1,!1),i.addEventListener("mouseup",falseMousedownClick,!1),i.oncontextmenu=function(e){e.preventDefault()};var a=document.createElement("CANVAS");for(var n of(a.id="canvas2_MPR",a.width=e*o3dPixelData2.length,a.height=GetViewport().imageHeight,GetViewport(2).appendChild(a),a.MouseLeftClick=!1,a.MouseRightClick=!1,a.rotate=0,a.addEventListener("mousedown",trueMousedownClick,!1),a.addEventListener("mousemove",mpr2Canvas2,!1),a.addEventListener("mouseup",falseMousedownClick,!1),a.oncontextmenu=function(e){e.preventDefault()},getClass("DicomCanvas")))n.style.display="none";i.reflesh=function(t){var i=getByid("canvas0_MPR"),a=getByid("canvas1_MPR");if(getByid("canvas2_MPR"),null==t&&(t=a.Line),null!=t){var n=a.getContext("2d").getImageData(0,0,a.width,a.height);if(n.data.fill(0),i.rotatePoint1)for(var o=o3dPixelData2.length/a.height,s=0,r=0;s<a.height;s++,r+=4)for(var d=0,l=0;d<i.rotateList1.length;d++,l+=4)null!=o3dPixelData2[parseInt(s*o)]&&(n.data[s*(4*a.width)+l]=o3dPixelData2[parseInt(s*o)][i.rotateList1[d][1]][4*parseInt(i.rotateList1[parseInt(1*d)][0])+0],n.data[s*(4*a.width)+l+1]=o3dPixelData2[parseInt(s*o)][i.rotateList1[d][1]][4*parseInt(i.rotateList1[parseInt(1*d)][0])+1],n.data[s*(4*a.width)+l+2]=o3dPixelData2[parseInt(s*o)][i.rotateList1[d][1]][4*parseInt(i.rotateList1[parseInt(1*d)][0])+2],n.data[s*(4*a.width)+l+3]=o3dPixelData2[parseInt(s*o)][i.rotateList1[d][1]][4*parseInt(i.rotateList1[parseInt(1*d)][0])+3]);a.getContext("2d").putImageData(n,0,0),a.style.height=o3dPixelData2.length*(1*e/1)+"px",a.style.width=a.width+"px",a.style.position="absolute",a.style.top="50%",a.style.left="50%",a.style.margin="-"+parseInt(a.style.height)/2+"px 0 0 -"+parseInt(a.style.width)/2+"px",a.Line=t}},a.reflesh=function(t){var i=getByid("canvas0_MPR"),a=(getByid("canvas1_MPR"),getByid("canvas2_MPR"));if(null==t&&(t=a.Line),null!=t){var n=o3dPixelData2.length/a.width,o=a.getContext("2d").getImageData(0,0,a.width,a.height);if(o.data.fill(0),i.rotatePoint2){n=o3dPixelData2.length/a.width;for(var s=0,r=0;s<i.rotateList2.length;s++,r+=4)for(var d=0,l=0;d<a.height;d++,l+=4)null!=o3dPixelData2[parseInt(d*n)]&&(o.data[s*(4*a.width)+l]=o3dPixelData2[parseInt(d*n)][i.rotateList2[s][1]][4*parseInt(i.rotateList2[parseInt(1*s)][0])+0],o.data[s*(4*a.width)+l+1]=o3dPixelData2[parseInt(d*n)][i.rotateList2[s][1]][4*parseInt(i.rotateList2[parseInt(1*s)][0])+1],o.data[s*(4*a.width)+l+2]=o3dPixelData2[parseInt(d*n)][i.rotateList2[s][1]][4*parseInt(i.rotateList2[parseInt(1*s)][0])+2],o.data[s*(4*a.width)+l+3]=o3dPixelData2[parseInt(d*n)][i.rotateList2[s][1]][4*parseInt(i.rotateList2[parseInt(1*s)][0])+3])}a.getContext("2d").putImageData(o,0,0),a.style.width=o3dPixelData2.length*(1*e/1)+"px",a.style.height=a.height+"px",a.style.position="absolute",a.style.top="50%",a.style.left="50%",a.style.margin="-"+parseInt(a.style.height)/2+"px 0 0 -"+parseInt(a.style.width)/2+"px",a.Line=t}},t.reflesh=function(e){var t=getByid("canvas0_MPR");if(getByid("canvas1_MPR"),getByid("canvas2_MPR"),null==e&&(e=t.Line),null!=e){var i=t.getContext("2d").getImageData(0,0,t.width,t.height);i.data.fill(0);for(var a=0,n=0;a<i.height;a++,n+=4)for(var o=0,s=0;o<i.width;o++,s+=4)i.data[a*(4*i.width)+s]=o3dPixelData2[e][a][s+0],i.data[a*(4*i.width)+s+1]=o3dPixelData2[e][a][s+1],i.data[a*(4*i.width)+s+2]=o3dPixelData2[e][a][s+2],i.data[a*(4*i.width)+s+3]=o3dPixelData2[e][a][s+3];t.getContext("2d").putImageData(i,0,0),t.style.height=t.height+"px",t.style.width=t.width+"px",t.style.position="absolute",t.style.top="50%",t.style.left="50%",t.style.margin="-"+parseInt(t.style.height)/2+"px 0 0 -"+parseInt(t.style.width)/2+"px",t.Line=e}},a.drawLine=function(e,t){var i=getByid("canvas0_MPR"),a=getByid("canvas1_MPR"),n=getByid("canvas2_MPR");null==e&&(e=n.drawLineX),null==t&&(t=n.drawLineY);var o=0,s=0;[x0,s]=rotatePoint(e,-a.width-i.width-n.width,e,t,n.rotate),[o,y0]=rotatePoint(-a.height-i.height-n.height,t,e,t,n.rotate),[wi,y1]=rotatePoint(a.width+i.width+n.width,t,e,t,n.rotate),[x1,he]=rotatePoint(e,a.height+i.height+n.height,e,t,n.rotate);var r=n.getContext("2d");r.lineWidth=3,r.strokeStyle="pink",r.beginPath(),r.moveTo(o,y0),r.lineTo(wi,y1),r.stroke(),r.strokeStyle="yellow",r.beginPath(),r.moveTo(x0,s),r.lineTo(x1,he),r.stroke(),n.drawLineX=e,n.drawLineY=t},i.drawLine=function(e,t,i=!1){getByid("canvas0_MPR");var a=getByid("canvas1_MPR"),n=(getByid("canvas2_MPR"),e),o=t;null==e&&(n=a.drawLineX),null==t&&(o=a.drawLineY),o*=a.height/parseFloat(a.style.height),n*=a.width/parseFloat(a.style.width);var s=0,r=0;[x0,r]=rotatePoint(n,0,n,o,a.rotate),[s,y0]=rotatePoint(0,o,n,o,a.rotate),[wi,y1]=rotatePoint(a.width,o,n,o,a.rotate),[x1,he]=rotatePoint(n,a.height,n,o,a.rotate);var d=a.getContext("2d");d.lineWidth=3,d.strokeStyle="yellow",d.beginPath(),d.moveTo(s,y0),d.lineTo(wi,y1),d.stroke(),d.strokeStyle="blue",d.beginPath(),d.moveTo(x0,r),d.lineTo(x1,he),d.stroke(),a.drawLineX=null==e?a.drawLineX:e,a.drawLineY=null==t?a.drawLineY:t},t.drawLine=function(e,t,i=!1,a=void 0,n=void 0){var o=getByid("canvas0_MPR"),s=(getByid("canvas1_MPR"),getByid("canvas2_MPR"),e),r=t;null==e&&(s=o.drawLineX),null==t&&(r=o.drawLineY),r*=o.height/parseFloat(o.style.height),s*=o.width/parseFloat(o.style.width);var d=0,l=0;[x0,l]=rotatePoint(null==n?s:n,-o.height,s,r,o.rotate),[d,y0]=rotatePoint(-o.width,null==a?r:a,s,r,o.rotate),[wi,y1]=rotatePoint(2*o.width,null==a?r:a,s,r,o.rotate),[x1,he]=rotatePoint(null==n?s:n,2*o.height,s,r,o.rotate),1!=i&&o.rotateList1&&o.rotateList2||(o.rotateList1=Line_forMPR([d,y0],[wi,y1],[0,0],[o.width,o.height]),o.rotatePoint1=[o.rotateList1[0],o.rotateList1[o.rotateList1.length-1]],o.rotateList2=Line_forMPR([x0,l],[x1,he],[0,0],[o.width,o.height]),o.rotatePoint2=[o.rotateList2[0],o.rotateList2[o.rotateList2.length-1]]);var h=o.getContext("2d");h.lineWidth=3,h.strokeStyle="pink",h.beginPath(),h.moveTo(d,y0),h.lineTo(wi,y1),h.stroke(),h.strokeStyle="blue",h.beginPath(),h.moveTo(x0,l),h.lineTo(x1,he),h.stroke(),o.drawLineX=null==e?o.drawLineX:e,o.drawLineY=null==t?o.drawLineY:t},t.style.height=t.height+"px",i.style.height=i.height+"px",a.style.height=a.height+"px",t.style.width=t.width+"px",i.style.width=i.width+"px",a.style.width=a.width+"px",i.drawLine(parseInt(i.width/2),parseInt(i.height/2)),a.drawLine(parseInt(o3dPixelData2.length/2),parseInt(t.height/2)),t.drawLine(parseInt(t.width/2),parseInt(t.height/2)),i.drawLine(parseInt(i.width/2),parseInt(i.height/2)),a.drawLine(parseInt(o3dPixelData2.length/2),parseInt(t.height/2)),t.drawLine(parseInt(t.width/2),parseInt(t.height/2)),t.reflesh(parseInt(o3dPixelData2.length/2)),i.reflesh(parseInt(t.height/2)),a.reflesh(parseInt(t.width/2)),i.drawLine(parseInt(i.width/2),parseInt(i.height/2)),a.drawLine(parseInt(o3dPixelData2.length/2),parseInt(t.height/2)),t.drawLine(parseInt(t.width/2),parseInt(t.height/2)),i.drawLine(parseInt(i.width/2),parseInt(i.height/2)),a.drawLine(parseInt(o3dPixelData2.length/2),parseInt(t.height/2)),t.drawLine(parseInt(t.width/2),parseInt(t.height/2))}function rotatePoint(e,t,i,a,n){var o=n*Math.PI/180,s=e-i,r=t-a;return[s*Math.cos(o)-r*Math.sin(o)+i,s*Math.sin(o)+r*Math.cos(o)+a]}function refleshAndDrawMpr2(){var e=getByid("canvas0_MPR"),t=getByid("canvas1_MPR"),i=getByid("canvas2_MPR");e.reflesh(),t.reflesh(),i.reflesh(),e.drawLine(void 0,void 0,!0),i.drawLine(void 0,void 0),t.drawLine(void 0,void 0)}function mpr2Canvas0(e){var t=getByid("canvas0_MPR");if(1==getByid("canvas0_MPR").MouseRightClick)return getByid("canvas0_MPR").rotate+=10,void refleshAndDrawMpr2();if(0!=t.MouseLeftClick){var i=parseFloat(t.style.height)/parseFloat(GetViewport().imageHeight),a=parseFloat(t.style.width)/parseFloat(GetViewport().imageWidth),n=null!=e.offsetX?e.offsetX:e.originalEvent.layerX,o=null!=e.offsetY?e.offsetY:e.originalEvent.layerY;n/=a,o/=i;var s=getVrDistance(),r=getByid("canvas0_MPR"),d=getByid("canvas1_MPR"),l=getByid("canvas2_MPR");d.width=GetViewport().imageWidth,d.height=r.rotateList1.length,l.width=s*o3dPixelData2.length,l.height=GetViewport().imageHeight,r.drawLine(parseInt(n),parseInt(o),!0),r.reflesh(),d.reflesh(parseInt(o)),l.reflesh(parseInt(n)),r.drawLine(parseInt(n),parseInt(o)),l.drawLine(void 0,parseInt(o)),d.drawLine(parseInt(n),void 0)}}function mpr2Canvas1(e){var t=getByid("canvas0_MPR"),i=getByid("canvas1_MPR"),a=getByid("canvas2_MPR");if(getByid("canvas0_MPR"),1!=getByid("canvas1_MPR").MouseRightClick&&0!=getByid("canvas1_MPR").MouseLeftClick){var n=null!=e.offsetX?e.offsetX:e.originalEvent.layerX,o=null!=e.offsetY?e.offsetY:e.originalEvent.layerY,s=getVrDistance();t.width=GetViewport().imageWidth,t.height=GetViewport().imageHeight,a.width=s*o3dPixelData2.length,a.height=GetViewport().imageHeight,a.style.width=(Thickness_MPR<0?-Thickness_MPR:Thickness_MPR)+"px",t.drawLine(void 0,void 0,!0,void 0,parseInt(n)),i.reflesh(),t.reflesh(parseInt(o/s)),a.reflesh(parseInt(n)),i.drawLine(parseInt(n),parseInt(o)),a.drawLine(parseInt(o),void 0),t.drawLine(void 0,void 0,!1,void 0,parseInt(n))}}function mpr2Canvas2(e){var t=getByid("canvas0_MPR");if(1!=getByid("canvas2_MPR").MouseRightClick&&0!=getByid("canvas2_MPR").MouseLeftClick){var i=parseFloat(t.style.height)/parseFloat(GetViewport().imageHeight),a=parseFloat(t.style.width)/parseFloat(GetViewport().imageWidth),n=null!=e.offsetX?e.offsetX:e.originalEvent.layerX,o=null!=e.offsetY?e.offsetY:e.originalEvent.layerY;n/=a,o/=i;var s=getVrDistance(),r=getByid("canvas0_MPR"),d=getByid("canvas1_MPR"),l=getByid("canvas2_MPR");d.width=GetViewport().imageWidth,d.height=s*o3dPixelData2.length,r.width=GetViewport().imageWidth,r.height=GetViewport().imageHeight,d.style.height=(Thickness_MPR<0?-Thickness_MPR:Thickness_MPR)+"px",r.drawLine(void 0,void 0,!0,parseInt(o),void 0),r.reflesh(parseInt(n/s)),d.reflesh(parseInt(o)),l.reflesh(),l.drawLine(parseInt(n),parseInt(o)),r.drawLine(void 0,void 0,!1,parseInt(o),void 0),d.drawLine(void 0,parseInt(n))}}getByid("MouseOperation_MPR2").onclick=function(){if(0!=this.enable&&"mouseTool_MPR2"!=BL_mode){set_BL_model("mouseTool_MPR2");for(var e=0;e<3;e++)GetViewport(e).removeEventListener("mousemove",Mousemove,!1),GetViewport(e).removeEventListener("mousedown",Mousedown,!1),GetViewport(e).removeEventListener("mouseup",Mouseup,!1),GetViewport(e).removeEventListener("touchstart",touchstartF,!1),GetViewport(e).removeEventListener("touchmove",touchmoveF,!1),GetViewport(e).removeEventListener("touchend",touchendF,!1),GetViewport(e).removeEventListener("wheel",Wheel,!1);for(e=0;e<3;e++)GetViewport(e).addEventListener("wheel",MPRWheel,!1);drawBorderMPR(this)}},getByid("ImgMPR2_MPR").onclick=function(e){openMPR2=!1,"error"==e&&(openMPR2=!1),img2darkByClass("MPR2",!openMPR2),0==openMPR2&&exitMPR2()},getByid("ImgMPR2").onclick=function(e){if(openMPR2=!0,"error"==e&&(openMPR2=!1),img2darkByClass("MPR2",!openMPR2),1==openMPR2){initMPR2();for(var t=0;t<3;t++)GetViewport(t).canvas().style.display=GetViewportMark(t).style.display="none"}};