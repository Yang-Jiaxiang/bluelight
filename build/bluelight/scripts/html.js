function html_onload(){document.documentElement.onmousemove=DivDraw,document.documentElement.ontouchmove=DivDraw,document.body.style.overscrollBehavior="none",getByid("openFile").onclick=function(){0!=this.enable&&getByid("myfile").click()},window.addEventListener("keydown",(function(e){var t=e.which;33===t?jump2UpOrEnd(getNowInstance()-parseInt(getAllSop().length/10)+1,void 0):34===t?jump2UpOrEnd(getNowInstance()+parseInt(getAllSop().length/10)+1,void 0):36===t?jump2UpOrEnd(0,"up"):35===t?jump2UpOrEnd(0,"end"):17===t&&(KeyCode_ctrl=!0)}),!0),window.addEventListener("keyup",(function(e){KeyCode_ctrl=!1}),!0),document.getElementsByTagName("BODY")[0].ondragover=function(e){e.preventDefault()},document.getElementsByTagName("BODY")[0].ondrop=function(e){function t(e){if(e.isDirectory){var i=e.createReader(),o=function(e){e.forEach((function(e){t(e)})),e.length>0&&i.readEntries(o)};i.readEntries(o)}else e.file((function(e){resetViewport();var t=URL.createObjectURL(e);"mht"==e.name.split(".").reverse()[0]?wadorsLoader(t):loadAndViewImage("wadouri:"+t),(100,new Promise((e=>setTimeout(e,100)))).then((()=>{readXML(t),readDicom(t,PatientMark,!0)}))}))}if(e.stopPropagation(),e.preventDefault(),e.dataTransfer&&e.dataTransfer.items)for(var i=e.dataTransfer.items,o=0;o<i.length;o++){var n=i[o].webkitGetAsEntry();n&&t(n)}},getByid("ClearMarkupButton").onclick=function(){PatientMark=[];for(var e=0;e<Viewport_Total;e++){var t=GetViewport(e).sop;loadAndViewImage(getImgaeIdFromSop(t),e)}},getByid("ExportButton2").onclick=function(){var e;(e=document.createElement("a")).download=GetViewport().imageId.replace("wadouri:","").replace("wadors:","").replace(/^.*(\\|\/|\:)/,""),0==e.download.includes(".dcm")&&(e.download=e.download+".dcm"),e.href=GetViewport().imageId.replace("wadouri:","").replace("wadors:",""),e.click()},getByid("ExportButton").onclick=function(){!function(){var e=document.createElement("a");e.download="dicom.png";var t=function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,t}(GetViewport().canvas()),i=t.getContext("2d");i.drawImage(GetViewport().canvas(),0,0),i.drawImage(GetViewportMark(),0,0),e.href=t.toDataURL(),e.click()}()},getByid("MouseOperation").onclick=function(){0!=this.enable&&(set_BL_model("MouseTool"),mouseTool(),drawBorder(this))},getByid("b_Scroll").onclick=function(){0!=this.enable&&(set_BL_model("scroll"),scroll(),drawBorder(this))},getByid("annotation1").onclick=function(){0!=this.enable&&("none"==getByid("SplitViewportDiv").style.display?getByid("SplitViewportDiv").style.display="":getByid("SplitViewportDiv").style.display="none")},getByid("MouseRotate").onclick=function(){0!=this.enable&&(set_BL_model("rotate"),rotate(),drawBorder(this))},getByid("WindowRevision").onclick=function(){0!=this.enable&&(set_BL_model("windowlevel"),windowlevel(),drawBorder(this))},getByid("openMeasureImg").onclick=function(){invertDisplayById("openMeasureDIv")},getByid("removeRuler").onclick=function(){var e=[];for(var t in PatientMark){var i=PatientMark[t];if("ruler"==i.hideName){for(var o=0;o<i.mark.length;o++)i.mark[o].type="delete";i.type="delete",e.push(i.sop),refreshMark(i)}}for(var t in PatientMark=PatientMark.filter((e=>"delete"!=e.type)),PatientMark)refreshMark(PatientMark[t])},getByid("zoom").onclick=function(){0!=this.enable&&(set_BL_model("zoom"),zoom(),drawBorder(this))},getByid("horizontal_flip").onclick=function(){0!=this.enable&&(GetViewport().openHorizontalFlip=!GetViewport().openHorizontalFlip,SetWindowWL(!0),displayMark())},getByid("vertical_flip").onclick=function(){0!=this.enable&&(GetViewport().openVerticalFlip=!GetViewport().openVerticalFlip,SetWindowWL(!0),displayMark())},getByid("color_invert").onclick=function(){0!=this.enable&&(GetViewport().openInvert=!GetViewport().openInvert,SetWindowWL(!0))},getByid("unlink").onclick=function(){0!=this.enable&&(openLink=!openLink,changeLinkImg())},getByid("MeasureRuler").onclick=function(){0!=this.enable&&(set_BL_model("measure"),measure(),drawBorder(this))},getByid("AngleRuler").onclick=function(){0!=this.enable&&(set_BL_model("angle"),angle(),drawBorder(this))},getByid("playvideo").onclick=function(){0!=this.enable&&(openAngle=0,drawBorder(this),GetViewport().openPlay=!GetViewport().openPlay,GetViewport().openPlay?(getByid("labelPlay").style.display="",getByid("textPlay").style.display=""):(getByid("labelPlay").style.display="none",getByid("textPlay").style.display="none"),PlayTimer())},getByid("MarkButton").onclick=function(){GetViewport().openMark=!GetViewport().openMark;for(var e=0;e<Viewport_Total;e++)GetViewportMark(e).getContext("2d").clearRect(0,0,GetViewport(e).imageWidth,GetViewport(e).imageHeight);for(e=0;e<Viewport_Total;e++)displayMark(e);changeMarkImg()},getByid("annotation").onclick=function(){0!=this.enable&&(openAnnotation=!openAnnotation,displayAnnotation())},getByid("MarkupImg").onclick=function(){if(0!=this.enable){openDisplayMarkup=!openDisplayMarkup;var e=function(){if(GetViewport().style.overflowY="hidden",GetViewport().style.overflowX="hidden",1==getByid("DICOMTagsSelect").selected)displayDicomTagsList();else if(1==getByid("AIMSelect").selected)displayAIM();else for(var e=0;e<Viewport_Total;e++)dropTable(e)};"none"==getByid("MarkStyleDiv").style.display?getByid("MarkStyleDiv").style.display="":getByid("MarkStyleDiv").style.display="none",getByid("TableSelect").onchange=e,e()}},getByid("rwdImgTag").onclick=function(){openRWD=!openRWD,EnterRWD()},getByid("markFillCheck").onclick=function(){for(var e=0;e<Viewport_Total;e++)displayMark(e)},getByid("MarkcolorSelect").onchange=function(){for(var e=0;e<Viewport_Total;e++)displayMark(e)},getByid("WindowLevelSelect").onchange=function(){if(1==getByid("WindowDefault").selected)return getByid("textWC").value=GetViewport().windowCenterList=GetViewport().windowCenter,getByid("textWW").value=GetViewport().windowWidthList=GetViewport().windowWidth,SetWindowWL(),void(WindowOpen=!0);for(var e=0;e<getClass("WindowSelect").length;e++)if(1==getClass("WindowSelect")[e].selected){GetViewport().windowCenterList=getByid("textWC").value=parseInt(getClass("WindowSelect")[e].getAttribute("wc")),GetViewport().windowWidthList=getByid("textWW").value=parseInt(getClass("WindowSelect")[e].getAttribute("ww")),SetWindowWL(),WindowOpen=!0;break}},getByid("textWC").onchange=function(){GetViewport().windowCenterList=parseInt(getByid("textWC").value),getByid("WindowCustom").selected=!0,SetWindowWL(),WindowOpen=!0},getByid("textWW").onchange=function(){GetViewport().windowWidthList=parseInt(getByid("textWW").value),getByid("WindowCustom").selected=!0,SetWindowWL(),WindowOpen=!0},getByid("textPlay").onchange=function(){parseInt(getByid("textPlay").value)<=1?getByid("textPlay").value=1:parseInt(getByid("textPlay").value)>=60?getByid("textPlay").value=60:parseInt(getByid("textPlay").value)>=1||(getByid("textPlay").value=10),PlayTimer()},getByid("labelZoom").onchange=function(){zoom<=25&&(getByid("textZoom").value=zoom=25),zoom>=400&&(getByid("textZoom").value=zoom=400),SetWindowWL()},getByid("markAlphaText").onchange=function(){parseInt(getByid("markAlphaText").value)<=1?getByid("markAlphaText").value=1:parseInt(getByid("markAlphaText").value)>=100?getByid("markAlphaText").value=100:parseInt(getByid("markAlphaText").value)<100||(getByid("markAlphaText").value=100);for(var e=0;e<Viewport_Total;e++)displayMark(e)},getByid("markSizeText").onchange=function(){parseFloat(getByid("markSizeText").value)<=.1?getByid("markSizeText").value=.1:parseInt(getByid("markSizeText").value)>=10?getByid("markSizeText").value=10:parseInt(getByid("markSizeText").value)<10||(getByid("markSizeText").value=1);for(var e=0;e<Viewport_Total;e++)displayMark(e)},getByid("myfile").onchange=function(){for(var e=0;e<this.files.length;e++){let t=new FileReader;t.readAsDataURL(this.files[e]),t.onloadend=function(){resetViewport(),loadAndViewImage("wadouri:"+t.result),(100,new Promise((e=>setTimeout(e,100)))).then((()=>{readXML(t.result),readDicom(t.result,PatientMark,!0)}))}}},addEvent2SplitViewport(),getByid("MouseOperation").click()}function addEvent2SplitViewport(){let e=getClass("split_radio");for(var t=0;t<e.length;t++)e[t].onchange=function(){1==getByid("radio_1x1").checked?(Viewport_row=1,Viewport_col=1):1==getByid("radio_1x2").checked?(Viewport_row=1,Viewport_col=2):1==getByid("radio_2x1").checked?(Viewport_row=2,Viewport_col=1):1==getByid("radio_2x2").checked?(Viewport_row=2,Viewport_col=2):1==getByid("radio_3x3").checked?(Viewport_row=3,Viewport_col=3):1==getByid("radio_4x4").checked?(Viewport_row=4,Viewport_col=4):(Viewport_row=1,Viewport_col=1),getByid("MouseOperation").click(),SetTable(),window.onresize()}}function changeMarkImg(){getByid("MeasureLabel").style.display="none",getByid("AngleLabel").style.display="none",1==GetViewport().openMark?getByid("MarkButton").src="../image/icon/black/fist0.png":getByid("MarkButton").src="../image/icon/black/fist1.png"}function changeLinkImg(){1==openLink?getByid("unlink").src="../image/icon/black/b_Link.png":getByid("unlink").src="../image/icon/black/b_unlink translation synchronization.png"}function drawBorder(e){e!=getByid("b_Scroll")&&(openChangeFile=!1),Css(getByid("MouseOperation"),"border",""),Css(getByid("WindowRevision"),"border",""),Css(getByid("MeasureRuler"),"border",""),Css(getByid("MouseRotate"),"border",""),Css(getByid("playvideo"),"border",""),Css(getByid("zoom"),"border",""),Css(getByid("b_Scroll"),"border",""),Css(getByid("AngleRuler"),"border",""),Css(e,"border","3px #FFFFFF solid"),Css(e,"borderRadius","3px 3px 3px 3px")}function img2darkByClass(e,t){let i=getClass("img");for(let o=0;o<i.length;o++)i[o].classList.contains(e)||t?(i[o].style.opacity=1,i[o].enable=!0):(i[o].style.opacity=.25,i[o].enable=!1)}