let MARKER={};function compatibleMark(a){if(!a.point&&(a.point=[],a.markX&&a.markY))for(var e=a.markX.length>=a.markY.length?a.markX.length:a.markY.length,t=0;t<e;t++)a.point.push([a.markX[t],a.markY[t]]);return a}function getColorFrom16(a,e,t,r){function l(a){var e=a.toString(16);return 1==e.length?"0"+e:e}return 16==r&&(a=parseInt(a/256),e=parseInt(e/256),t=parseInt(t/256)),function(a,e,t){return"#"+l(a)+l(e)+l(t)}(a,e,t)}function getRGBFrom0xFF(a,e,t){function r(a){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}var l=r(a).r,o=r(a).g,i=r(a).b;return 1==t&&(l=255-l,o=255-o,i=255-i),1==e?[l,o,i]:getColorFrom16(l,o,i,8)}function setMarkColor(a,e){if(getByid("WhiteSelect").selected)a.strokeStyle=a.fillStyle="#FFFFFF";else if(getByid("BlueSelect").selected)a.strokeStyle=a.fillStyle="#0000FF";else if(getByid("RedSelect").selected)a.strokeStyle=a.fillStyle="#FF0000";else if(getByid("GreenSelect").selected)a.strokeStyle=a.fillStyle="#00FF00";else if(getByid("YellowSelect").selected)a.strokeStyle=a.fillStyle="#FFFF00";else if(getByid("BrownSelect").selected)a.strokeStyle=a.fillStyle="#844200";else if(getByid("OrangeSelect").selected)a.strokeStyle=a.fillStyle="#FFA500";else{if(!getByid("PurpleSelect").selected)return!!e&&(a.strokeStyle=a.fillStyle=e,!0);a.strokeStyle=a.fillStyle="#663399"}return!0}function setImageOrientation2MarkCanvas(a,e){var t=e.getTransform(),r=!1;return 0==CheckNull(a.imageOrientationX)&&0==CheckNull(a.imageOrientationY)&&0==CheckNull(a.imageOrientationZ)&&(e.setTransform(new DOMMatrix([a.imageOrientationX,-a.imageOrientationX2,0,a.imagePositionX*a.PixelSpacingX,-a.imageOrientationY,a.imageOrientationY2,0,a.imagePositionY*a.PixelSpacingY,a.imageOrientationZ,a.imageOrientationZ2,0,a.imagePositionZ,0,0,0,1])),r=!0),t=e.getTransform(),1==a.openHorizontalFlip&&1==a.openVerticalFlip?(e.setTransform(t.scaleSelf(-1,-1)),e.setTransform(t.translateSelf(-parseInt(a.imageWidth),parseInt(-a.imageHeight)))):1==a.openHorizontalFlip?(e.setTransform(t.scaleSelf(-1,1)),e.setTransform(t.translateSelf(-parseInt(a.imageWidth),0))):1==a.openVerticalFlip?(e.setTransform(t.scaleSelf(1,-1,1)),e.setTransform(t.translateSelf(0,-parseInt(a.imageHeight)))):(e.setTransform(t.scaleSelf(1,1,1)),e.setTransform(t.translateSelf(0,0))),r&&e.setTransform(t.invertSelf()),e}function restoreImageOrientation2MarkCanvas(a){a.setTransform(1,0,0,1,0,0),a.scale(1,1),a.globalAlpha=1}function drawSEG(a,e,t){var r=a.getContext("2d");r.globalAlpha=parseFloat(getByid("markAlphaText").value)/100,function(a,e,t=0,r=0,l=!1,o=!1){a.save(),a.setTransform(l?-1:1,0,0,o?-1:1,t+(l?e.width:0),r+(o?e.height:0)),a.drawImage(e,0,0),a.restore()}(r,e.canvas,0,0,t.openHorizontalFlip,t.openVerticalFlip),r.globalAlpha=1;var l=r.globalCompositeOperation;r.globalCompositeOperation="source-in",1==setMarkColor(r)&&r.fillRect(0,0,t.imageWidth,t.imageHeight),r.globalCompositeOperation=l,r.restore()}function drawOverLay(a,e,t){var r=a.getContext("2d");r.globalAlpha=parseFloat(getByid("markAlphaText").value)/100,function(a,e,t=0,r=0,l=!1,o=!1){a.save(),a.setTransform(l?-1:1,0,0,o?-1:1,t+(l?e.width:0),r+(o?e.height:0)),a.drawImage(e,0,0),a.restore()}(r,e.canvas,0,0,t.openHorizontalFlip,t.openVerticalFlip),r.globalAlpha=1;var l=r.globalCompositeOperation;r.globalCompositeOperation="source-in",1==setMarkColor(r)&&r.fillRect(0,0,t.imageWidth,t.imageHeight),r.globalCompositeOperation=l,r.restore()}function drawXML_mark(a,e,t){var r=a.getContext("2d");r.globalAlpha=parseFloat(getByid("markAlphaText").value)/100;var l=r.globalAlpha;r.globalAlpha=1,r.font=12*parseInt(r.lineWidth)+"px Arial",r.fillStyle="red";for(var o=0;o<e.markX.length;o+=2){r.strokeStyle=""+e.parent.color,r.beginPath();var i=1*e.markX[o],n=1*e.markY[o],s=(e.markX.length,1*e.markX[o+1]),p=1*e.markY[o+1];r.fillText(""+t,i<s?i:s,n<p?n-5:p-5),r.rect(i,n,s-i,p-n),r.stroke(),r.closePath()}r.globalAlpha=l}function drawTEXT(a,e,t){var r=a.getContext("2d");r.globalAlpha=parseFloat(getByid("markAlphaText").value)/100,setMarkColor(r,"#FFFF00"),e.parent.color&&(r.strokeStyle=r.fillStyle=""+e.parent.color);try{for(var l=0;l<e.markX.length;l+=1){r.beginPath();for(var o=1*e.markX[l],i=1*e.markY[l+1],n=0,s=0,p=e.GSPS_Text.split("\n"),g=0;g<p.length;g++){var m=o+12*p[g].length>a.width?o+12*p[g].length-a.width:0,h=i+12*p[g].length>a.height?i+12*p[g].length-a.height:0;m>n&&(n=m),h>s&&(s=h)}if(o-=n,i-=s,e.GSPS_Text&&0==l){r.font="12px Arial",r.fillStyle="red";var k=r.globalAlpha;for(r.globalAlpha=1,p=e.GSPS_Text.split("\n"),g=0;g<p.length;g++)r.fillText(p[g],o,i-7-3*(p.length-1)*4+3*g*4);r.globalAlpha=k}r.stroke(),r.closePath()}}catch(a){console.log(a)}}function drawPOLYLINE(a,e,t){var r=a.getContext("2d");r.globalAlpha=parseFloat(getByid("markAlphaText").value)/100,setMarkColor(r),e.parent.color&&(r.strokeStyle=r.fillStyle=""+e.parent.color);for(var l=0;l<e.markX.length;l+=1){r.beginPath();var o=1*e.markX[l],i=1*e.markY[l],n=1*e.markX[l+1],s=1*e.markY[l+1];if(e.RotationAngle&&e.RotationPoint&&([o,i]=rotatePoint([o,i],e.RotationAngle,e.RotationPoint),[n,s]=rotatePoint([n,s],e.RotationAngle,e.RotationPoint)),e.GSPS_Text&&0==l){r.font=4*parseInt(r.lineWidth)+"px Arial",r.fillStyle="red";var p=r.globalAlpha;r.globalAlpha=1,r.fillText(""+e.GSPS_Text,o<n?o:n,i<s?i-7:s-7),r.globalAlpha=p}var g=r.globalAlpha;r.globalAlpha=1,r.moveTo(o,i),r.lineTo(n,s),r.stroke(),r.globalAlpha=g,e.GraphicFilled&&"Y"==e.GraphicFilled&&(r.fillStyle="#FFFF88",r.fill(),console.log(o,i,n,s)),r.closePath()}}function drawINTERPOLATED(a,e,t){var r=a.getContext("2d");r.globalAlpha=parseFloat(getByid("markAlphaText").value)/100,setMarkColor(r),e.parent.color&&(r.strokeStyle=r.fillStyle=""+e.parent.color);for(var l=(e.markX[0]+e.markX[2])/2,o=(e.markY[0]+e.markY[2])/2,i=0;i<e.markX.length-1;i+=1){r.beginPath();var n=1*e.markX[i],s=1*e.markY[i],p=1*e.markX[i+1],g=1*e.markY[i+1];e.RotationAngle&&e.RotationPoint&&([n,s]=rotatePoint([n,s],e.RotationAngle,e.RotationPoint),[p,g]=rotatePoint([p,g],e.RotationAngle,e.RotationPoint));var m=r.globalAlpha;r.globalAlpha=1;var h=Math.sqrt(Math.pow(n-l,2)+Math.pow(s-o,2)),k=180/Math.PI*Math.atan2(n-l,s+o),f=180/Math.PI*Math.atan2(p-l,g+o);if(r.arc(l,o,h,2*Math.PI/k,2*Math.PI/f),r.stroke(),r.globalAlpha=m,r.closePath(),e.GSPS_Text&&0==i){r.font=4*parseInt(r.lineWidth)+"px Arial",r.fillStyle="red";var c=r.globalAlpha;r.globalAlpha=1,r.fillText(""+e.GSPS_Text,n<p?n:p,s<g?s-7:g-7),r.globalAlpha=c}}}function drawELLIPSE(a,e,t){var r=a.getContext("2d");r.globalAlpha=parseFloat(getByid("markAlphaText").value)/100;for(var l=0;l<e.markX.length;l+=1){r.beginPath();var o=1*e.markX[l],i=(e.markY[l],e.markX.length,e.markX[l+1],1*e.markY[l+1]),n=1*e.markX[l+2],s=(e.markY[l+2],e.markX[l+3],1*e.markY[l+3]);r.ellipse((o+n)/2,(i+s)/2,Math.abs(o-n),Math.abs(i-s),0*Math.PI/180,0,2*Math.PI),r.stroke(),getByid("markFillCheck").checked&&r.fill(),r.closePath()}}function drawCIRCLE(a,e,t){var r=a.getContext("2d");r.globalAlpha=parseFloat(getByid("markAlphaText").value)/100,setMarkColor(r),e.parent.color&&(r.strokeStyle=r.fillStyle=""+e.parent.color);for(var l=0;l<e.markX.length;l+=2){var o=1*e.markX[l],i=1*e.markY[l],n=1*e.markX[l+1],s=1*e.markY[l+1];r.beginPath();var p=r.globalAlpha;r.globalAlpha=1;var g=getDistance(Math.abs(o-n),Math.abs(i-s));r.arc(o,i,g,0,2*Math.PI),r.stroke(),r.globalAlpha=p,r.closePath()}}function drawTwoDimensionPolyline(a,e,t){var r=a.getContext("2d");r.globalAlpha=parseFloat(getByid("markAlphaText").value)/100,e.parent.color&&(r.strokeStyle=r.fillStyle=""+e.parent.color),setMarkColor(r);for(var l=0;l<e.markX.length;l++)r.beginPath(),x1=e.markX[l],y1=e.markY[l],o2=l==e.markX.length-1?0:l+1,x2=e.markX[o2],y2=e.markY[o2],r.moveTo(x1,y1),r.lineTo(x2,y2),r.stroke(),r.closePath();r.fill(),r.closePath()}function drawTwoDimensionMultiPoint(a,e,t){var r=a.getContext("2d");r.globalAlpha=parseFloat(getByid("markAlphaText").value)/100,e.parent.color&&(r.strokeStyle=r.fillStyle=""+e.parent.color),setMarkColor(r);for(var l=0;l<e.markX.length;l++){r.beginPath();var o=e.markX[l],i=e.markY[l],n=l==e.markX.length-1?0:l+1,s=e.markX[n],p=e.markY[n];r.moveTo(o,i),r.lineTo(s,p),r.stroke(),r.closePath()}}function drawTwoDimensionEllipse(a,e,t){var r=a.getContext("2d");r.globalAlpha=parseFloat(getByid("markAlphaText").value)/100,e.parent.color&&(r.strokeStyle=r.fillStyle=""+e.parent.color),setMarkColor(r);for(var l=0;l<e.markX.length;l++){r.beginPath();var o=e.markX[l+0],i=e.markY[l+0],n=e.markX[l+2],s=e.markY[l+2],p=e.markX[l+1],g=e.markY[l+1],m=e.markX[l+3],h=e.markY[l+3],k=Math.sqrt(Math.pow(o-p,2)+Math.pow(i-g,2))/2,f=Math.sqrt(Math.pow(n-m,2)+Math.pow(s-h,2))/2;r.ellipse(p,g,k,f,0*Math.PI/180,0,2*Math.PI),getByid("markFillCheck").checked&&r.fill(),r.stroke(),r.closePath();break}}function drawRTSS(a,e,t){var r=a.getContext("2d");setImageOrientation2MarkCanvas(t,r),r.globalAlpha=parseFloat(getByid("markAlphaText").value)/100,e.parent.color&&(r.strokeStyle=r.fillStyle=""+e.parent.color),setMarkColor(r);for(var l=0;l<e.markX.length;l++){r.beginPath();var o=Math.ceil((e.markX[l]-t.imagePositionX)*t.PixelSpacingX),i=Math.ceil((e.markY[l]-t.imagePositionY)*t.PixelSpacingY),n=l==e.markX.length-1?0:l+1,s=Math.ceil((e.markX[n]-t.imagePositionX)*t.PixelSpacingX),p=Math.ceil((e.markY[n]-t.imagePositionY)*t.PixelSpacingY);r.moveTo(o,i),r.lineTo(s,p),r.globalAlpha=1,r.stroke(),r.globalAlpha=parseFloat(getByid("markAlphaText").value)/100,r.closePath()}if(getByid("markFillCheck").checked){for(r.beginPath(),l=0;l<e.markX.length;l++)o=Math.ceil((e.markX[l]-t.imagePositionX)*t.PixelSpacingX),i=Math.ceil((e.markY[l]-t.imagePositionY)*t.PixelSpacingY),n=l==e.markX.length-1?0:l+1,s=Math.ceil((e.markX[n]-t.imagePositionX)*t.PixelSpacingX),p=Math.ceil((e.markY[n]-t.imagePositionY)*t.PixelSpacingY),0==l?(r.moveTo(o,i),r.lineTo(s,p)):(r.lineTo(o,i),r.lineTo(s,p));r.fill(),r.closePath()}restoreImageOrientation2MarkCanvas(r)}function drawTextAnnotationEntity(a,e,t){var r=a.getContext("2d");setImageOrientation2MarkCanvas(t,r),r.globalAlpha=parseFloat(getByid("markAlphaText").value)/100,e.parent.color&&(r.strokeStyle=r.fillStyle=""+e.parent.color),setMarkColor(r);for(var l=0;l<e.markX.length;l++){r.moveTo(parseInt(e.markX[l]),parseInt(e.markY[l])),r.lineTo(parseInt(e.markX[l+1]),parseInt(e.markY[l+1])),r.stroke(),r.save(),r.translate(e.markX[l],e.markY[l]);var o=Math.atan2(e.markY[l]-e.markY[l+1],e.markX[l]-e.markX[l+1])+Math.PI/2;r.rotate(o),r.moveTo(0,0),r.lineTo(-3,7),r.lineTo(3,7),r.fill(),r.restore(),r.closePath();break}restoreImageOrientation2MarkCanvas(r)}function getMarkSize(a,e){var t=parseFloat(getByid("markSizeText").value),r=2*parseFloat(a.width)/parseFloat(Css(a,"width"));return 1==e&&r<=0?((r=parseFloat(Css(a,"width"))/parseFloat(a.width))<=1.5&&(r=1.5),r*=Math.abs(parseFloat(a.width)/parseFloat(Css(a,"width")))):1==e?r*=Math.abs(parseFloat(Css(a,"width"))/parseFloat(a.width)):r<=0&&(r=parseFloat(Css(a,"width"))/parseFloat(a.width)),r<=1.5&&(r=1.5),2*Math.abs(r)*t}function displayMark(a){if(openLink)for(var e=0;e<Viewport_Total;e++)GetViewport(e).openMark=GetViewport().openMark;var t=a>=0?a:viewportNumber,r=GetViewport(t),l=GetViewportMark(t);if(r.openMark){var o=l.getContext("2d");o.clearRect(0,0,r.imageWidth,r.imageHeight),o.strokeStyle=o.fillStyle="#FF0000",o.lineJoin=o.lineCap="round",o.lineWidth=""+getMarkSize(l,!1),setMarkColor(o);var i=PatientMark.filter((a=>a.sop==r.sop)),n=i.filter((a=>checkMark2(r.SeriesInstanceUID,a)));for(var s of i)for(var p of s.mark)p.point||(p=compatibleMark(p));for(var s of n)for(var p of s.mark)p.parent=s,"SEG"==p.type?drawSEG(l,p,r):"Overlay"==p.type&&drawOverLay(l,p,r);for(var s of n)for(var p of s.mark)p.parent=s,"XML_mark"==p.type?drawXML_mark(l,p,s.showName):"TEXT"==p.type?drawTEXT(l,p,r):"POLYLINE"==p.type?drawPOLYLINE(l,p,r):"INTERPOLATED"==p.type?drawINTERPOLATED(l,p,r):"ELLIPSE"==p.type?drawELLIPSE(l,p,r):"CIRCLE"==p.type?drawCIRCLE(l,p,r):"TwoDimensionPolyline"==p.type?drawTwoDimensionPolyline(l,p,r):"TwoDimensionMultiPoint"==p.type?drawTwoDimensionMultiPoint(l,p,r):"TwoDimensionEllipse"==p.type&&drawTwoDimensionEllipse(l,p,r);for(var s of n)for(var p of s.mark)p.parent=s,"RTSS"==p.type?drawRTSS(l,p,r):"TextAnnotationEntity"==p.type&&drawTextAnnotationEntity(l,p,r);for(var s of n)for(var p of s.mark)p.parent=s,MARKER.drawMark({canvas:l,mark:p,showName:s.showName})}}MARKER.drawMarkList=[],MARKER.drawMark=function(a){for(var e=0;e<MARKER.drawMarkList.length;e++)MARKER[MARKER.drawMarkList[e]](a)};