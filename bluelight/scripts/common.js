function cancelTools(){openMouseTool=!1,openWindow=!1,openZoom=!1,openMeasure=!1,openWheel=!1,openRotate=!1,openAngle=0,getByid("textWC").style.display="none",getByid("textWW").style.display="none",magnifierDiv.style.display="none",getByid("MeasureLabel").style.display="none",getByid("AngleLabel").style.display="none",getByid("WindowLevelDiv").style.display="none",getByid("labelZoom").style.display="none",getByid("labelPlay").style.display="none",getByid("textZoom").style.display="none",getByid("textPlay").style.display="none",getByid("playvideo").src="../image/icon/black/b_CinePlay.png",getByid("WindowDefault").selected=!0,displayWindowLevel(),displayMark();for(var e=0;e<Viewport_Total;e++)GetViewport(e).openPlay=!1;PlayTimer()}function displayRuler(e){var t=e>=0?e:viewportNumber;try{var i=getClass("downRule"),a=GetViewport(t).offsetWidth;i[t].width=a,i[t].style.left="50%",i[t].style.transform="translateX(-50%)";var o=i[t].getContext("2d");o.clearRect(0,0,a,20),o.strokeStyle="#FFFFFF",o.lineWidth="2",o.beginPath();var r=0,n=GetViewport(t).canvas();o.moveTo(0+a/2-40*GetViewport(t).PixelSpacingX*(parseFloat(n.style.width)/GetViewport(t).imageWidth),10),o.lineTo(90*GetViewport(t).PixelSpacingX*(parseFloat(n.style.width)/GetViewport(t).imageWidth)+a/2-40*GetViewport(t).PixelSpacingX*(parseFloat(n.style.width)/GetViewport(t).imageWidth),10);for(var l=0;l<10;l++)o.moveTo(r+a/2-40*GetViewport(t).PixelSpacingX*(parseFloat(n.style.width)/GetViewport(t).imageWidth),0),o.lineTo(r+a/2-40*GetViewport(t).PixelSpacingX*(parseFloat(n.style.width)/GetViewport(t).imageWidth),20),o.stroke(),r+=10*GetViewport(t).PixelSpacingX*(parseFloat(n.style.width)/GetViewport(t).imageWidth);o.closePath()}catch(e){}displayRuler2(e)}function displayRuler2(e){var t=e>=0?e:viewportNumber;try{var i=getClass("leftRule"),a=GetViewport(t).offsetHeight;i[t].height=a,i[t].style.left=10+bordersize+"px",i[t].style.top="50%",i[t].style.transform="translateY(-50%)";var o=i[t].getContext("2d"),r=GetViewport(t).canvas();o.clearRect(0,0,20,a),o.strokeStyle="#FFFFFF",o.lineWidth="2",o.beginPath();var n=0;o.moveTo(0,0+a/2-40*GetViewport(t).PixelSpacingY*(parseFloat(r.style.height)/GetViewport(t).imageHeight)),o.lineTo(0,90*GetViewport(t).PixelSpacingY*(parseFloat(r.style.height)/GetViewport(t).imageHeight)-40*GetViewport(t).PixelSpacingY*(parseFloat(r.style.height)/GetViewport(t).imageHeight)+a/2),o.stroke();for(var l=0;l<10;l++)o.moveTo(0,n+a/2-40*GetViewport(t).PixelSpacingY*(parseFloat(r.style.height)/GetViewport(t).imageHeight)),o.lineTo(20,n+a/2-40*GetViewport(t).PixelSpacingY*(parseFloat(r.style.height)/GetViewport(t).imageHeight)),o.stroke(),n+=10*GetViewport(t).PixelSpacingY*(parseFloat(r.style.height)/GetViewport(t).imageHeight);o.closePath()}catch(e){}}function resetViewport(e){var t=e>=0?e:viewportNumber;GetViewport(t).NowCanvasSizeWidth=GetViewport(t).NowCanvasSizeHeight=null,GetViewport(t).newMousePointX=GetViewport(t).newMousePointY=GetViewport().rotateValue=0,GetViewport(t).windowCenterList=GetViewport(t).windowWidthList=null,null!=GetViewport(t).framesNumber&&(GetViewport(t).framesNumber=0)}function PictureOnclick(e){if(!openLeftImgClick)return;WindowOpen=!1,cancelTools(),resetViewport();let t=SearchUid2IndexBySeries(e),i=t[0],a=t[1];for(var o=0;o<Patient.Study[i].Series[a].SopAmount;o++){if(Patient.Study[i].Series[a].Sop[o].pdf){displayPDF(Patient.Study[i].Series[a].Sop[o].pdf);break}if(1==Patient.Study[i].Series[a].Sop[o].InstanceNumber){loadAndViewImage(Patient.Study[i].Series[a].Sop[o].imageId);break}o==Patient.Study[i].Series[a].SopAmount-1&&loadAndViewImage(Patient.Study[i].Series[a].Sop[o].imageId)}}function LeftImg(e){}function SetToLeft(e,t,i){var a=getByid("LeftPicture"),o=getClass("OutLeftImg");let r=null;for(var n=0;n<o.length;n++)o[n].PatientId==i&&(r=o[n]);var l;r?l=r:((l=document.createElement("DIV")).className="OutLeftImg",l.id="OutLeftImg"+i,l.style="border:"+bordersize+"px #FFA3FF groove;padding:1px 1px 1px 1px;",l.PatientId=i);var d=document.createElement("DIV");d.id="dicomDivListDIV"+dicomImageCount,d.className="LeftImg",t>=0&&(d.id="dicomDivListDIV"+t),d.style="width:65px;height:65px;border:"+bordersize+"px #D3D9FF groove;",d.series=e,d.draggable="true",d.style.touchAction="none";var s=document.createElement("DIV");s.id="dicomDivList"+dicomImageCount,s.className="dicomDivList",t>=0&&(s.id="dicomDivList"+t),s.style="width:65px;height:65px;",s.onclick=function(){PictureOnclick(d.series)},s.canvas=function(){return this.getElementsByClassName("LeftCanvas")[0]?this.getElementsByClassName("LeftCanvas")[0]:null},t>=0&&getByid("dicomDivList"+t)&&getByid("dicomDivList"+t).canvas()&&s.appendChild(getByid("dicomDivList"+t).canvas());var p=document.createElement("DIV");p.id="menu"+e;var g=[],m=[],y=[];let h=SearchUid2IndexBySeries(e),c=h[0],u=h[1];for(var f=0;f<Patient.Study[c].Series[u].SopAmount;f++)for(var w=0;w<PatientMark.length;w++)if(PatientMark[w].sop==Patient.Study[c].Series[u].Sop[f].SopUID)if(0==g.length)g.push(PatientMark[w].showName),m.push(PatientMark[w].color),y.push(PatientMark[w].hideName);else{for(var v=0,V=0;V<g.length;V++)y[V]==PatientMark[w].hideName&&(v=1);0==v&&(y.push(PatientMark[w].hideName),g.push(PatientMark[w].showName),m.push(PatientMark[w].color))}for(V=0;V<g.length;V++){d.style.height=parseInt(d.style.height)+35+"px";var x=document.createElement("LABEL");x.innerText=""+g[V],x.name=""+y[V],x.style="text-shadow:0px 0px 10px #fff, 0px 0px 10px #fff, 0px 0px 10px #fff, 0px 0px 10px #fff, 0px 0px 10px #fff, 0px 0px 10px #fff, 0px 0px 10px #fff;color:"+m[V]+";";var I=document.createElement("input");if(I.type="checkbox",I.id="dicomDivListLabel"+dicomImageCount+V,t>=0&&(I.id="dicomDivListLabel"+t+V),I.checked=!0,I.name=""+y[V],I.series="true",getByid("dicomDivListLabel"+t+V)){I.checked=getByid("dicomDivListLabel"+t+V).checked,I.series=getByid("dicomDivListLabel"+t+V).series;var S=getByid("dicomDivListLabel"+t+V);S.parentElement.removeChild(S)}x.oncontextmenu=function(e){e.preventDefault()},x.onmousedown=function(e){2==e.button&&jump2Mark(this.name)},I.onchange=function(){getByid("MeasureLabel").style.display="none",getByid("AngleLabel").style.display="none",this.series="true"==this.series?"false":"true";for(var e=0;e<Viewport_Total;e++)displayMark(e)},x.appendChild(I),p.appendChild(x),p.appendChild(document.createElement("br"))}return d.appendChild(s),d.appendChild(p),l.appendChild(d),r||a.appendChild(l),t>=0?getByid("dicomDivListDIV"+t).parentNode.replaceChild(d,getByid("dicomDivListDIV"+t)):getByid("dicomDivListDIV"+dicomImageCount).parentNode.replaceChild(d,getByid("dicomDivListDIV"+dicomImageCount)),getByid("LeftPicture").style="display: flex;flex-direction: column;position: absolute;z-index: 9",parseInt(getByid("LeftPicture").offsetHeight)+10>=window.innerHeight-document.getElementsByClassName("container")[0].offsetTop-2*bordersize&&(getByid("LeftPicture").style="overflow-y: scroll;display: flex;flex-direction: column;position: absolute;z-index: 9;height:"+(window.innerHeight-document.getElementsByClassName("container")[0].offsetTop-2*bordersize)+"px;"),getByid("dicomDivList"+dicomImageCount)}function SetWindowWL(e){if(getByid("MeasureLabel").style.display="none",getByid("AngleLabel").style.display="none",1==openLink){for(var t=0;t<Viewport_Total;t++)GetViewport(t).windowCenterList=parseInt(getByid("textWC").value),GetViewport(t).windowWidthList=parseInt(getByid("textWW").value);for(t=0;t<Viewport_Total;t++){GetViewport(t).openVerticalFlip=GetViewport().openVerticalFlip,GetViewport(t).openHorizontalFlip=GetViewport().openHorizontalFlip,GetViewport(t).openInvert=GetViewport().openInvert;var i=GetViewport(t).sop;(a=SearchUid2Json(i))&&(t==viewportNumber?loadAndViewImageByWindowLevwl(Patient.Study[a.studyuid].Series[a.sreiesuid].Sop[a.sopuid].imageId,parseInt(getByid("textWC").value),parseInt(getByid("textWW").value),e,t):loadAndViewImageByWindowLevwl(Patient.Study[a.studyuid].Series[a.sreiesuid].Sop[a.sopuid].imageId,parseInt(getByid("textWC").value),parseInt(getByid("textWW").value),!1,t))}}else{i=GetViewport().sop,GetViewport().windowCenterList=parseInt(getByid("textWC").value),GetViewport().windowWidthList=parseInt(getByid("textWW").value);var a=SearchUid2Json(i);loadAndViewImageByWindowLevwl(Patient.Study[a.studyuid].Series[a.sreiesuid].Sop[a.sopuid].imageId,parseInt(getByid("textWC").value),parseInt(getByid("textWW").value),e)}}function magnifierIng(e,t){var i=GetViewport().canvas(),a=parseFloat(getByid("textZoom").value);a<=25&&(getByid("textZoom").value=a=25),a>=400&&(getByid("textZoom").value=a=400),a/=100,magnifierWidth=parseFloat(GetViewport().imageWidth/parseFloat(i.style.width))*(magnifierWidth0/a),magnifierHeight=parseFloat(GetViewport().imageHeight/parseFloat(i.style.height))*(magnifierHeight0/a);var o=document.getElementById("magnifierCanvas"),r=o.getContext("2d");o.width=magnifierWidth,o.height=magnifierHeight,o.style.width=magnifierWidth0+"px",o.style.height=magnifierHeight0+"px",o.style.transform="rotate("+GetViewport().rotateValue+"deg)",r.clearRect(0,0,magnifierWidth,magnifierHeight);var n=Math.floor(e)-magnifierWidth/2,l=Math.floor(t)-magnifierHeight/2;r.drawImage(i,n,l,magnifierWidth,magnifierHeight,0,0,magnifierWidth,magnifierHeight),r.drawImage(GetViewportMark(),n,l,magnifierWidth,magnifierHeight,0,0,magnifierWidth,magnifierHeight)}function nextFrame(e,t){getByid("MeasureLabel").style.display="none",getByid("AngleLabel").style.display="none";var i=e;1==openLink&&(i=0,e=3);for(var a=i;a<=e;a++){var o=a,r=GetViewport(o).sop,n=!1;let e=SearchUid2Index(r),i=e[0],p=e[1],g=e[2];if(Patient.Study[i].Series[p].Sop[g].SopUID==r){var l=parseInt(Patient.Study[i].Series[p].Sop[g].InstanceNumber),d=sortInstance(r);if(1==d.length&&d[0].frames){for(var s=0;s<d[0].frames.length&&1!=n;s++)if(s==GetViewport(o).framesNumber){if(s+t<0){loadAndViewImage(d[0].imageId,o,d[0].frames.length+t),n=!0;break}if(s+t>=d[0].frames.length){loadAndViewImage(d[0].imageId,o,0),n=!0;break}loadAndViewImage(d[0].imageId,o,s+t),n=!0;break}}else for(s=0;s<d.length&&1!=n;s++)if(d[s].InstanceNumber==l){if(s+t<0){loadAndViewImage(d[d.length+t].imageId,o),n=!0;break}if(s+t>=d.length){loadAndViewImage(d[0].imageId,o),n=!0;break}loadAndViewImage(d[s+t].imageId,o),n=!0;break}}}}