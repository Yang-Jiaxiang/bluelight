//代表MPR模式為開啟狀態
var openMPR2 = false;
var o3dPixelData = [];
var o3dPixelData2 = [];
var o3dImage = [];

var thicknessList_MPR = [];
var Thickness_MPR = 0;
function loadMPR2() {
    var span = document.createElement("SPAN");
    span.id = "ImgMPR2_span";
    span.innerHTML = `<img class="img MPR2 MPR_icon" alt="3d" id="ImgMPR2" src="../image/icon/black/b_LocalizerLines.png" width="50" height="50">`;
    getByid("icon-list").appendChild(span);

    /*var span = document.createElement("SPAN");
    span.innerHTML = `<label style="color: #ffffff;" id="mprLightLabel">position<input type="checkbox" checked="true" name="mprLight"
    id="mprLight"></label>`
    getByid("page-header").appendChild(span);
    getByid("mprLightLabel").style.display = "none";*/
}
loadMPR2();

function loadMPR2_UI() {
    if (!getByid("MouseOperation_MPR2")) {
        var img = document.createElement("IMG");
        img.src = getByid("MouseOperation").src;
        img.id = "MouseOperation_MPR2";
        img.className = "MPR_icon";
        img.width = img.height = "50";
        img.style.filter = "sepia(100%)"
        getByid("MouseOperation_span").appendChild(img);
    }
    if (!getByid("WindowRevision_MPR")) {
        var img = document.createElement("IMG");
        img.src = getByid("WindowRevision").src;
        img.id = "WindowRevision_MPR";
        img.className = "img MPR_icon_hide";
        img.width = img.height = "50";
        img.style.filter = "sepia(100%)"
        getByid("WindowRevision_span").appendChild(img);
    }
    if (!getByid("b_Scroll_MPR")) {
        var img = document.createElement("IMG");
        img.src = getByid("b_Scroll").src;
        img.id = "b_Scroll_MPR";
        img.className = "img MPR_icon_hide";
        img.width = img.height = "50";
        img.style.filter = "sepia(100%)"
        getByid("b_Scroll_span").appendChild(img);
    }
    if (!getByid("MouseRotate_MPR")) {
        var img = document.createElement("IMG");
        img.src = getByid("MouseRotate").src;
        img.id = "MouseRotate_MPR";
        img.className = "img MPR_icon_hide";
        img.width = img.height = "50";
        img.style.filter = "sepia(100%)"
        getByid("MouseRotate_span").appendChild(img);
    }
    if (!getByid("ImgMPR2_MPR")) {
        var img = document.createElement("IMG");
        img.src = getByid("ImgMPR2").src;
        img.id = "ImgMPR2_MPR";
        img.className = "MPR_icon";
        img.width = img.height = "50";
        img.style.filter = "sepia(100%)"
        getByid("ImgMPR2_span").appendChild(img);
    }
}
loadMPR2_UI();
getByid("MouseOperation_MPR2").style.display = "none";
getByid("WindowRevision_MPR").style.display = "none";
getByid("b_Scroll_MPR").style.display = "none";
getByid("MouseRotate_MPR").style.display = "none";
getByid("ImgMPR2_MPR").style.display = "none";
//getByid("WindowLevelDiv_MPR").style.display = "none";

function enterMPR_UI2() {
    getByid("MouseOperation_MPR2").style.display = "";
    getByid("WindowRevision_MPR").style.display = "";
    getByid("b_Scroll_MPR").style.display = "";
    getByid("MouseRotate_MPR").style.display = "";
    getByid("ImgMPR2_MPR").style.display = "";
    //getByid("WindowLevelDiv_MPR").style.display = "";
    getByid("MouseOperation").style.display = "none";
    getByid("WindowRevision").style.display = "none";
    getByid("WindowLevelDiv").style.display = "none";
    getByid("b_Scroll").style.display = "none";
    getByid("MouseRotate").style.display = "none";
    getByid("ImgMPR2").style.display = "none";
    openLeftImgClick = false;
}

function exitMPR2_UI() {
    getByid("MouseOperation_MPR2").style.display = "none";
    getByid("WindowRevision_MPR").style.display = "none";
    getByid("b_Scroll_MPR").style.display = "none";
    getByid("MouseRotate_MPR").style.display = "none";
    getByid("ImgMPR2_MPR").style.display = "none";
    //getByid("WindowLevelDiv_MPR").style.display = "none";
    getByid("MouseOperation").style.display = "";
    getByid("WindowRevision").style.display = "";
    getByid("WindowLevelDiv").style.display = "";
    getByid("b_Scroll").style.display = "";
    getByid("MouseRotate").style.display = "";
    getByid("ImgMPR2").style.display = "";
    openLeftImgClick = true;
}

function drawBorderMPR(element) {
    var MPR_icon = getClass("MPR_icon");
    for (var i = 0; i < MPR_icon.length; i++) Css(MPR_icon[i], 'border', "");
    Css(element, 'border', 3 + "px #FFFFFF solid");
    Css(element, 'borderRadius', "3px 3px 3px 3px");
}

var MPRWheel = function (e) { }

getByid("MouseOperation_MPR2").onclick = function () {
    if (this.enable == false) return;
    //BL_mode = 'mouseTool_MPR2';
    if (BL_mode == 'mouseTool_MPR2') return;
    set_BL_model('mouseTool_MPR2');
    for (var c = 0; c < 3; c++) {
        GetViewport(c).removeEventListener("mousemove", Mousemove, false);
        GetViewport(c).removeEventListener("mousedown", Mousedown, false);
        GetViewport(c).removeEventListener("mouseup", Mouseup, false);
        GetViewport(c).removeEventListener("touchstart", touchstartF, false);
        GetViewport(c).removeEventListener("touchmove", touchmoveF, false);
        GetViewport(c).removeEventListener("touchend", touchendF, false);
        GetViewport(c).removeEventListener("wheel", Wheel, false);
    }
    //GetViewport(2).addEventListener("mousemove", Mousemove, false);
    //GetViewport(2).addEventListener("mousedown", Mousedown, false);
    //GetViewport(2).addEventListener("mouseup", Mouseup, false);
    //GetViewport(2).addEventListener("touchstart", TouchstartF, false);
    ///GetViewport(2).addEventListener("touchmove", TouchmoveF, false);
    //GetViewport(2).addEventListener("touchend", TouchendF, false);
    for (var c = 0; c < 3; c++)  GetViewport(c).addEventListener("wheel", MPRWheel, false);
    drawBorderMPR(this);
}

getByid("ImgMPR2_MPR").onclick = function (catchError) {
    //if (this.enable == false) return;
    openMPR2 = false;
    if (catchError == "error") openMPR2 = false;
    img2darkByClass("MPR2", !openMPR2);
    if (openMPR2 == false) {
        exitMPR2();
    }
}

getByid("ImgMPR2").onclick = function (catchError) {
    //if (this.enable == false) return;
    openMPR2 = true;
    if (catchError == "error") openMPR2 = false;
    img2darkByClass("MPR2", !openMPR2);
    if (openMPR2 == true) {
        initMPR2();
        for (var c = 0; c < 3; c++) GetViewport(c).canvas().style.display = GetViewportMark(c).style.display = "none";
    }
}
function exitMPR2() {
    if (openMPR2 == true) return;
    exitMPR2_UI();
    VIEWPORT.fixRow = VIEWPORT.fixCol = null;

    VIEWPORT.lockViewportList = [];
    window.removeEventListener("resize", resizeVR, false);
    GetViewport(0).removeEventListener("wheel", MPRWheel, false);
    GetViewport(1).removeEventListener("wheel", MPRWheel, false);
    GetViewport(2).removeEventListener("wheel", MPRWheel, false);
    GetViewport(0).removeChild(getByid("canvas0_MPR"));
    GetViewport(1).removeChild(getByid("canvas1_MPR"));
    GetViewport(2).removeChild(getByid("canvas2_MPR"));
    cancelTools();
    openMouseTool = true;
    drawBorder(getByid("MouseOperation"));
    getByid("ImgMPR2").src = "../image/icon/black/b_LocalizerLines.png";
    //getByid("3dDisplay").style.display = "none";
    //getByid("mprLightLabel").style.display = "none";

    for (var i = 0; i < Viewport_Total; i++) {
        GetViewport(i).removeEventListener("contextmenu", contextmenuF, false);
        GetViewport(i).removeEventListener("mousemove", Mousemove, false);
        GetViewport(i).removeEventListener("mousedown", Mousedown, false);
        GetViewport(i).removeEventListener("mouseup", Mouseup, false);
        GetViewport(i).removeEventListener("mouseout", Mouseout, false);
        GetViewport(i).removeEventListener("wheel", Wheel, false);
        GetViewport(i).removeEventListener("mousedown", thisF, false);
        GetViewport(i).removeEventListener("touchstart", touchstartF, false);
        GetViewport(i).removeEventListener("touchend", touchendF, false);
        GetViewport(i).addEventListener("touchstart", thisF, false);
        GetViewport(i).addEventListener("mousedown", thisF, false);
    }
    viewportNumber = 0;
    window.onresize();
    //SetTable();
    o3DListLength = 0;

    var uid0 = SearchUid2Json(GetViewport(0).sop);
    if (uid0) loadAndViewImage(Patient.Study[uid0.studyuid].Series[uid0.sreiesuid].Sop[uid0.sopuid].imageId, 0);

    o3dPixelData = [];
    o3dPixelData2 = [];
    o3dImage = [];
    thicknessList_MPR = [];

    getByid("MouseOperation").click();
}
function initMPR2() {
    if (openMPR2 == false) return;
    getByid("MouseOperation_MPR2").click();
    enterMPR_UI2();

    VIEWPORT.fixRow = 1; VIEWPORT.fixCol = 3;
    openLink = false;
    changeLinkImg();
    openAnnotation = false;
    displayAnnotation();
    //getByid("3dDisplay").style.display = "";
    //getByid("mprLightLabel").style.display = "";
    getByid("SplitViewportDiv").style.display = "none";
    cancelTools();
    getByid("ImgMPR2").src = "../image/icon/black/b_AdvancedMode_on.png";
    var sop = GetViewport().sop;
    SetTable(1, 3);//如果MPR2模式正在開啟，固定1x3
    var uid = SearchUid2Json(sop);
    //NowResize = true;
    GetViewport().NowCanvasSizeWidth = GetViewport().NowCanvasSizeHeight = null;
    for (var c = 0; c < 3; c++)
        GetViewport(c).canvas().style.display = GetViewportMark(c).style.display = "none";
    viewportNumber = 0;
    loadAndViewImage(Patient.Study[uid.studyuid].Series[uid.sreiesuid].Sop[uid.sopuid].imageId);
    VIEWPORT.lockViewportList = [0, 1, 3];
    window.addEventListener("resize", resizeVR, false);
    for (var i1 = 0; i1 < Viewport_Total; i1++) {
        GetViewport(i1).removeEventListener("contextmenu", contextmenuF, false);
        GetViewport(i1).removeEventListener("mousemove", Mousemove, false);
        GetViewport(i1).removeEventListener("mousedown", Mousedown, false);
        GetViewport(i1).removeEventListener("mouseup", Mouseup, false);
        GetViewport(i1).removeEventListener("mouseout", Mouseout, false);
        GetViewport(i1).removeEventListener("wheel", Wheel, false);
        GetViewport(i1).removeEventListener("mousedown", thisF, false);
        GetViewport(i1).removeEventListener("touchstart", touchstartF, false);
        GetViewport(i1).removeEventListener("touchend", touchendF, false);
        GetViewport(i1).removeEventListener("touchstart", thisF, false);
    }
    GetViewport().addEventListener("contextmenu", contextmenuF, false);
    GetViewport().addEventListener("mouseout", Mouseout, false);
    GetViewport(3).addEventListener("mousemove", mousemove3D, false);
    GetViewport(3).addEventListener("mousedown", mousedown3D, false);
    GetViewport(3).addEventListener("mouseup", mouseup3D, false);
    GetViewport(3).addEventListener("contextmenu", contextmenuF, false);

    var list = sortInstance(sop);

    o3DListLength = list.length;
    Thickness_MPR = 0;
    var big = 100000000000000000000000000000;

    openRendering = true;
    img2darkByClass("Rendering", !openRendering);

    thicknessList_MPR = [];
    function loadImageDataForMPR(image, pixelData, pixelData2) {

        var windowWidth = image.windowWidth;
        var windowCenter = image.windowCenter;
        if (getByid("o3DAngio").selected == true) {
            windowWidth = 332;
            windowCenter = 287;
        } else if (getByid("o3DAirways").selected == true) {
            //如果是肺氣管模型，使用對應的Window Level
            windowWidth = 409;
            windowCenter = -538;
        }
        var high = windowCenter + (windowWidth / 2);
        var low = windowCenter - (windowWidth / 2);
        var intercept = image.intercept;
        if (CheckNull(intercept)) intercept = 0;
        var slope = image.slope;
        if (CheckNull(slope)) slope = 1;

        var multiplication = 255 / ((high - low)) * slope;
        var addition = (- low + intercept) / (high - low) * 255;
        var j = 0;
        for (var h = 0; h < pixelData2.length; h++) {
            for (var w = 0, w4 = 0; w < pixelData2[h].length / 4; w++, w4 += 4, j++) {
                pixelData2[h][w4 + 0] = pixelData2[h][w4 + 1] = pixelData2[h][w4 + 2] = pixelData[j] * multiplication + addition;
                pixelData2[h][w4 + 3] = 255;
            }
        }
        return pixelData2;
    }

    o3dPixelData = [];
    o3dPixelData2 = [];
    Thickness_MPR = -Thickness_MPR + big;
    for (var l = 0; l < list.length; l++) {
        const l2 = l;
        const image = getPatientbyImageID[list[l2].imageId].image;
        const pixelData = getPatientbyImageID[list[l2].imageId].pixelData;
        o3dPixelData.push(pixelData);
        o3dImage.push(image);

        var Arr_ = new Array(image.height);
        for (var h = 0; h < image.height; h++) {
            Arr_[h] = new Uint8ClampedArray(image.width * 4);
        }

        Arr_ = loadImageDataForMPR(o3dImage[o3dImage.length - 1], o3dPixelData[o3dPixelData.length - 1], Arr_);
        o3dPixelData2.push(Arr_);
        try {
            var thickness = parseFloat(image.data.string('x00200032').split("\\")[2]) * GetViewport().PixelSpacingX;
            thicknessList_MPR.push(thickness);
            if (thickness < Thickness_MPR) Thickness_MPR = thickness;
            if (thickness < big) big = thickness;
            o3Dcount = list.length;
        } catch (ex) {
            catchError = true;
            if (openMPR2 == true) {
                openMPR2 = false;
                alert("Error, this image may not support 3D.");
            };
            openRendering = false;
            getByid("ImgMPR2").click('error');
            return;
        };
    }

    display3dImage2Canvas();
    return;
}
function trueMousedownClick(e) {
    if (e.which == 1) this.MouseLeftClick = true;
    else if (e.which == 2) this.MouseMiddleClick = true;
    else if (e.which == 3) this.MouseRightClick = true;
}
function falseMousedownClick(e) {
    this.MouseLeftClick = false;
    this.MouseMiddleClick = false;
    this.MouseRightClick = false;
}

function getVrDistance() {
    var VrDistance = 0;
    VrDistance += thicknessList_MPR[thicknessList_MPR.length - 1] - Thickness_MPR - (thicknessList_MPR[0] - Thickness_MPR);
    VrDistance /= o3dPixelData2.length;
    if (VrDistance == 0) VrDistance = 1;
    if (VrDistance < 0) VrDistance *= -1;
    return VrDistance;
}
function Line_forMPR(point1, point2, pointMin, pointMax) {
    if (!point1 || !point2) return;
    var distance = (Math.sqrt(((point1[0] - point2[0]) * (point1[0] - point2[0]) + (point1[1] - point2[1]) * (point1[1] - point2[1]))));

    var Reduce_X = point1[0] > point2[0] ? point2[0] : point1[0];
    var Reduce_Y = point1[1] > point2[1] ? point2[1] : point1[1];
    var Up_X = point1[0] < point2[0] ? point2[0] : point1[0];
    var Up_Y = point1[1] < point2[1] ? point2[1] : point1[1];
    var list = [];
    if (point1[0] == Reduce_X && point1[1] == Reduce_Y) {
        for (var i = 0; i < parseInt(distance); i++) {
            var x = parseInt(Reduce_X + ((Up_X - Reduce_X) / distance) * i);
            var y = parseInt(Reduce_Y + ((Up_Y - Reduce_Y) / distance) * i);
            if (x >= pointMin[0] && y >= pointMin[1] && x < pointMax[0] && y < pointMax[1])
                list.push([x, y]);
        }
    } else if (point1[0] == Up_X && point1[1] == Up_Y) {
        for (var i = 0; i < parseInt(distance); i++) {
            var x = parseInt(Up_X - ((Up_X - Reduce_X) / distance) * i);
            var y = parseInt(Up_Y - ((Up_Y - Reduce_Y) / distance) * i);
            if (x >= pointMin[0] && y >= pointMin[1] && x < pointMax[0] && y < pointMax[1])
                list.push([x, y]);
        }
    } else if (point1[0] == Reduce_X && point1[1] == Up_Y) {
        for (var i = 0; i < parseInt(distance); i++) {
            var x = parseInt(Reduce_X + ((Up_X - Reduce_X) / distance) * i);
            var y = parseInt(Up_Y - ((Up_Y - Reduce_Y) / distance) * i);
            if (x >= pointMin[0] && y >= pointMin[1] && x < pointMax[0] && y < pointMax[1])
                list.push([x, y]);
        }
    } else if (point1[0] == Up_X && point1[1] == Reduce_Y) {
        for (var i = 0; i < parseInt(distance); i++) {
            var x = parseInt(Up_X - ((Up_X - Reduce_X) / distance) * i);
            var y = parseInt(Reduce_Y + ((Up_Y - Reduce_Y) / distance) * i);
            if (x >= pointMin[0] && y >= pointMin[1] && x < pointMax[0] && y < pointMax[1])
                list.push([x, y]);
        }
    }
    return list;
};
function display3dImage2Canvas() {
    var VrDistance = getVrDistance();

    var canvas0 = document.createElement("CANVAS");
    canvas0.id = "canvas0_MPR";
    canvas0.width = GetViewport().imageWidth;
    canvas0.height = GetViewport().imageHeight;

    GetViewport(0).appendChild(canvas0);

    canvas0.MouseLeftClick = false;
    canvas0.MouseRightClick = false;
    canvas0.rotate = 0;
    canvas0.addEventListener("mousedown", trueMousedownClick, false);
    canvas0.addEventListener("mousemove", mpr2Canvas0, false);
    canvas0.addEventListener("mouseup", falseMousedownClick, false);
    canvas0.oncontextmenu = function (e) { e.preventDefault(); };

    var canvas1 = document.createElement("CANVAS");
    canvas1.id = "canvas1_MPR";
    canvas1.width = GetViewport().imageWidth;
    canvas1.height = VrDistance * o3dPixelData2.length;//GetViewport().imageHeight;

    GetViewport(1).appendChild(canvas1);

    canvas1.MouseLeftClick = false;
    canvas1.MouseRightClick = false;
    canvas1.rotate = 0;
    canvas1.addEventListener("mousedown", trueMousedownClick, false);
    canvas1.addEventListener("mousemove", mpr2Canvas1, false);
    canvas1.addEventListener("mouseup", falseMousedownClick, false);
    canvas1.oncontextmenu = function (e) { e.preventDefault(); };


    var canvas2 = document.createElement("CANVAS");
    canvas2.id = "canvas2_MPR";
    canvas2.width = VrDistance * o3dPixelData2.length;//o3dPixelData2.length;
    canvas2.height = GetViewport().imageHeight;

    GetViewport(2).appendChild(canvas2);

    canvas2.MouseLeftClick = false;
    canvas2.MouseRightClick = false;
    canvas2.rotate = 0;
    canvas2.addEventListener("mousedown", trueMousedownClick, false);
    canvas2.addEventListener("mousemove", mpr2Canvas2, false);
    canvas2.addEventListener("mouseup", falseMousedownClick, false);
    canvas2.oncontextmenu = function (e) { e.preventDefault(); };

    for (var c of getClass("DicomCanvas")) c.style.display = "none";

    canvas1.reflesh = function (line) {
        var canvas0 = getByid("canvas0_MPR");
        var canvas1 = getByid("canvas1_MPR");
        var canvas2 = getByid("canvas2_MPR");
        if (line == undefined) line = canvas1.Line;
        if (line == undefined) return;
        var pixelData1 = canvas1.getContext("2d").getImageData(0, 0, canvas1.width, canvas1.height);
        pixelData1.data.fill(0);
        if (canvas0.rotatePoint1) {
            var offsetY = (o3dPixelData2.length / canvas1.height);
            //var offsetX = (canvas1.width / canvas0.rotateList1.length);
            for (var h = 0, h4 = 0; h < canvas1.height; h++, h4 += 4) {
                for (var w = 0, w4 = 0; w < canvas0.rotateList1.length; w++, w4 += 4) {
                    if (o3dPixelData2[parseInt(h * offsetY)] == undefined) continue;
                    pixelData1.data[h * (canvas1.width * 4) + w4] = o3dPixelData2[parseInt(h * offsetY)][canvas0.rotateList1[w][1]][parseInt(canvas0.rotateList1[parseInt(w * 1)][0]) * 4 + 0];
                    pixelData1.data[h * (canvas1.width * 4) + w4 + 1] = o3dPixelData2[parseInt(h * offsetY)][canvas0.rotateList1[w][1]][parseInt(canvas0.rotateList1[parseInt(w * 1)][0]) * 4 + 1];
                    pixelData1.data[h * (canvas1.width * 4) + w4 + 2] = o3dPixelData2[parseInt(h * offsetY)][canvas0.rotateList1[w][1]][parseInt(canvas0.rotateList1[parseInt(w * 1)][0]) * 4 + 2];
                    pixelData1.data[h * (canvas1.width * 4) + w4 + 3] = o3dPixelData2[parseInt(h * offsetY)][canvas0.rotateList1[w][1]][parseInt(canvas0.rotateList1[parseInt(w * 1)][0]) * 4 + 3];
                }
            }
        }

        canvas1.getContext("2d").putImageData(pixelData1, 0, 0);
        canvas1.style.height = o3dPixelData2.length * (1 * VrDistance / 1) + "px";
        canvas1.style.width = canvas1.width + "px";
        canvas1.style.position = "absolute";
        canvas1.style.top = "50%"; canvas1.style.left = "50%";
        canvas1.style.margin = "-" + (parseInt(canvas1.style.height) / 2) + "px 0 0 -" + (parseInt(canvas1.style.width) / 2) + "px";
        canvas1.Line = line;
    }

    canvas2.reflesh = function (line) {
        var canvas0 = getByid("canvas0_MPR");
        var canvas1 = getByid("canvas1_MPR");
        var canvas2 = getByid("canvas2_MPR");
        if (line == undefined) line = canvas2.Line;
        if (line == undefined) return;
        var offsetX = (o3dPixelData2.length / canvas2.width);
        var pixelData2 = canvas2.getContext("2d").getImageData(0, 0, canvas2.width, canvas2.height);
        pixelData2.data.fill(0);
        if (canvas0.rotatePoint2) {
            //var offsetY = (o3dPixelData2.length / canvas2.height);
            var offsetX = (o3dPixelData2.length / canvas2.width);
            for (var h = 0, h4 = 0; h < canvas0.rotateList2.length; h++, h4 += 4) {
                for (var w = 0, w4 = 0; w < canvas2.height; w++, w4 += 4) {
                    if (o3dPixelData2[parseInt(w * offsetX)] == undefined) continue;
                    pixelData2.data[h * (canvas2.width * 4) + w4] = o3dPixelData2[parseInt(w * offsetX)][canvas0.rotateList2[h][1]][parseInt(canvas0.rotateList2[parseInt(h * 1)][0]) * 4 + 0];
                    pixelData2.data[h * (canvas2.width * 4) + w4 + 1] = o3dPixelData2[parseInt(w * offsetX)][canvas0.rotateList2[h][1]][parseInt(canvas0.rotateList2[parseInt(h * 1)][0]) * 4 + 1];
                    pixelData2.data[h * (canvas2.width * 4) + w4 + 2] = o3dPixelData2[parseInt(w * offsetX)][canvas0.rotateList2[h][1]][parseInt(canvas0.rotateList2[parseInt(h * 1)][0]) * 4 + 2];
                    pixelData2.data[h * (canvas2.width * 4) + w4 + 3] = o3dPixelData2[parseInt(w * offsetX)][canvas0.rotateList2[h][1]][parseInt(canvas0.rotateList2[parseInt(h * 1)][0]) * 4 + 3];
                }
            }
        }
        canvas2.getContext("2d").putImageData(pixelData2, 0, 0);

        canvas2.style.width = o3dPixelData2.length * (1 * VrDistance / 1) + "px";
        canvas2.style.height = canvas2.height + "px";
        canvas2.style.position = "absolute";
        canvas2.style.top = "50%"; canvas2.style.left = "50%";
        canvas2.style.margin = "-" + (parseInt(canvas2.style.height) / 2) + "px 0 0 -" + (parseInt(canvas2.style.width) / 2) + "px";
        canvas2.Line = line;
    }

    canvas0.reflesh = function (line) {
        var canvas0 = getByid("canvas0_MPR");
        var canvas1 = getByid("canvas1_MPR");
        var canvas2 = getByid("canvas2_MPR");
        if (line == undefined) line = canvas0.Line;
        if (line == undefined) return;
        var pixelData0 = canvas0.getContext("2d").getImageData(0, 0, canvas0.width, canvas0.height);
        pixelData0.data.fill(0);
        for (var h = 0, h4 = 0; h < pixelData0.height; h++, h4 += 4) {
            for (var w = 0, w4 = 0; w < pixelData0.width; w++, w4 += 4) {
                pixelData0.data[h * (pixelData0.width * 4) + w4] = o3dPixelData2[line][h][w4 + 0];
                pixelData0.data[h * (pixelData0.width * 4) + w4 + 1] = o3dPixelData2[line][h][w4 + 1];
                pixelData0.data[h * (pixelData0.width * 4) + w4 + 2] = o3dPixelData2[line][h][w4 + 2];
                pixelData0.data[h * (pixelData0.width * 4) + w4 + 3] = o3dPixelData2[line][h][w4 + 3];
            }
        }
        canvas0.getContext("2d").putImageData(pixelData0, 0, 0);

        canvas0.style.height = canvas0.height + "px";
        canvas0.style.width = canvas0.width + "px";
        canvas0.style.position = "absolute";
        canvas0.style.top = "50%"; canvas0.style.left = "50%";
        canvas0.style.margin = "-" + (parseInt(canvas0.style.height) / 2) + "px 0 0 -" + (parseInt(canvas0.style.width) / 2) + "px";
        canvas0.Line = line;
    }
    canvas2.drawLine = function (x, y) {
        var canvas0 = getByid("canvas0_MPR");
        var canvas1 = getByid("canvas1_MPR");
        var canvas2 = getByid("canvas2_MPR");
        if (x == undefined) x = canvas2.drawLineX;
        if (y == undefined) y = canvas2.drawLineY;
        var zeroX = 0, zeroY = 0;

        [x0, zeroY] = rotatePoint(x, -canvas1.width - canvas0.width - canvas2.width, x, y, canvas2.rotate);
        [zeroX, y0] = rotatePoint(-canvas1.height - canvas0.height - canvas2.height, y, x, y, canvas2.rotate);

        [wi, y1] = rotatePoint(canvas1.width + canvas0.width + canvas2.width, y, x, y, canvas2.rotate);
        [x1, he] = rotatePoint(x, canvas1.height + canvas0.height + canvas2.height, x, y, canvas2.rotate);

        var ctx = canvas2.getContext("2d");
        ctx.lineWidth = 3;
        ctx.strokeStyle = "pink";
        ctx.beginPath();
        ctx.moveTo(zeroX, y0);
        ctx.lineTo(wi, y1);
        ctx.stroke();
        ctx.strokeStyle = "yellow";
        ctx.beginPath();
        ctx.moveTo(x0, zeroY);
        ctx.lineTo(x1, he);
        ctx.stroke();
        canvas2.drawLineX = x;
        canvas2.drawLineY = y;
    }
    canvas1.drawLine = function (originX, originY, setRotate = false) {
        var canvas0 = getByid("canvas0_MPR");
        var canvas1 = getByid("canvas1_MPR");
        var canvas2 = getByid("canvas2_MPR");
        var x = originX, y = originY;
        if (originX == undefined) x = canvas1.drawLineX;
        if (originY == undefined) y = canvas1.drawLineY;
        var numH = canvas1.height / parseFloat(canvas1.style.height);
        y *= numH;
        var numW = canvas1.width / parseFloat(canvas1.style.width);
        x *= numW;

        var zeroX = 0, zeroY = 0;
        [x0, zeroY] = rotatePoint(x, 0, x, y, canvas1.rotate);
        [zeroX, y0] = rotatePoint(0, y, x, y, canvas1.rotate);

        [wi, y1] = rotatePoint(canvas1.width, y, x, y, canvas1.rotate);
        [x1, he] = rotatePoint(x, canvas1.height, x, y, canvas1.rotate);

        var ctx = canvas1.getContext("2d");
        ctx.lineWidth = 3;
        ctx.strokeStyle = "yellow";
        ctx.beginPath();
        ctx.moveTo(zeroX, y0);
        ctx.lineTo(wi, y1);
        ctx.stroke();
        ctx.strokeStyle = "blue";
        ctx.beginPath();
        ctx.moveTo(x0, zeroY);
        ctx.lineTo(x1, he);
        ctx.stroke();
        canvas1.drawLineX = originX == undefined ? canvas1.drawLineX : originX;
        canvas1.drawLineY = originY == undefined ? canvas1.drawLineY : originY;
    }
    canvas0.drawLine = function (originX, originY, setRotate = false, pinkOffset = undefined, blueOffset = undefined) {
        var canvas0 = getByid("canvas0_MPR");
        var canvas1 = getByid("canvas1_MPR");
        var canvas2 = getByid("canvas2_MPR");
        var x = originX, y = originY;
        if (originX == undefined) x = canvas0.drawLineX;
        if (originY == undefined) y = canvas0.drawLineY;
        var numH = canvas0.height / parseFloat(canvas0.style.height);
        y *= numH;
        var numW = canvas0.width / parseFloat(canvas0.style.width);
        x *= numW;
        var zeroX = 0, zeroY = 0;
        [x0, zeroY] = rotatePoint(blueOffset == undefined ? x : blueOffset, -canvas0.height, x, y, canvas0.rotate);//blue
        [zeroX, y0] = rotatePoint(-canvas0.width, pinkOffset == undefined ? y : pinkOffset, x, y, canvas0.rotate);//pink

        [wi, y1] = rotatePoint(canvas0.width * 2, pinkOffset == undefined ? y : pinkOffset, x, y, canvas0.rotate);//pink
        [x1, he] = rotatePoint(blueOffset == undefined ? x : blueOffset, canvas0.height * 2, x, y, canvas0.rotate);//blue
        /*if(x==canvas0.drawLineX){
            [zeroX, y0] = rotatePoint(0, canvas0.drawLineY, x, canvas0.drawLineY, -canvas0.rotate);//pink
            [wi, y1] = rotatePoint(canvas0.width, canvas0.drawLineY, x, canvas0.drawLineY, canvas0.rotate);//pink
        }*/

        if (setRotate == true || !canvas0.rotateList1 || !canvas0.rotateList2) {
            canvas0.rotateList1 = Line_forMPR([zeroX, y0], [wi, y1], [0, 0], [canvas0.width, canvas0.height]);
            canvas0.rotatePoint1 = [canvas0.rotateList1[0], canvas0.rotateList1[canvas0.rotateList1.length - 1]];
            canvas0.rotateList2 = Line_forMPR([x0, zeroY], [x1, he], [0, 0], [canvas0.width, canvas0.height]);
            canvas0.rotatePoint2 = [canvas0.rotateList2[0], canvas0.rotateList2[canvas0.rotateList2.length - 1]];
        }

        var ctx = canvas0.getContext("2d");
        ctx.lineWidth = 3;
        ctx.strokeStyle = "pink";
        ctx.beginPath();
        ctx.moveTo(zeroX, y0);
        ctx.lineTo(wi, y1);
        ctx.stroke();
        ctx.strokeStyle = "blue";
        ctx.beginPath();
        ctx.moveTo(x0, zeroY);
        ctx.lineTo(x1, he);
        ctx.stroke();
        canvas0.drawLineX = originX == undefined ? canvas0.drawLineX : originX;
        canvas0.drawLineY = originY == undefined ? canvas0.drawLineY : originY;
    }
    //canvas1.rotate = 45;
    canvas0.style.height = canvas0.height + "px";
    canvas1.style.height = canvas1.height + "px";
    canvas2.style.height = canvas2.height + "px";
    canvas0.style.width = canvas0.width + "px";
    canvas1.style.width = canvas1.width + "px";
    canvas2.style.width = canvas2.width + "px";

    canvas1.drawLine(parseInt(canvas1.width / 2), parseInt(canvas1.height / 2));
    canvas2.drawLine(parseInt(o3dPixelData2.length / 2), parseInt(canvas0.height / 2));
    canvas0.drawLine(parseInt(canvas0.width / 2), parseInt(canvas0.height / 2));
    canvas1.drawLine(parseInt(canvas1.width / 2), parseInt(canvas1.height / 2));
    canvas2.drawLine(parseInt(o3dPixelData2.length / 2), parseInt(canvas0.height / 2));
    canvas0.drawLine(parseInt(canvas0.width / 2), parseInt(canvas0.height / 2));
    canvas0.reflesh(parseInt(o3dPixelData2.length / 2));
    canvas1.reflesh(parseInt(canvas0.height / 2));
    canvas2.reflesh(parseInt(canvas0.width / 2));
    canvas1.drawLine(parseInt(canvas1.width / 2), parseInt(canvas1.height / 2));
    canvas2.drawLine(parseInt(o3dPixelData2.length / 2), parseInt(canvas0.height / 2));
    canvas0.drawLine(parseInt(canvas0.width / 2), parseInt(canvas0.height / 2));
    canvas1.drawLine(parseInt(canvas1.width / 2), parseInt(canvas1.height / 2));
    canvas2.drawLine(parseInt(o3dPixelData2.length / 2), parseInt(canvas0.height / 2));
    canvas0.drawLine(parseInt(canvas0.width / 2), parseInt(canvas0.height / 2));
}

function rotatePoint(x, y, cx, cy, angle) {
    // 將角度轉換為弧度
    var radian = angle * Math.PI / 180;
    // 計算相對於中心點的偏移量
    var offsetX = x - cx;
    var offsetY = y - cy;
    // 進行旋轉計算
    var rotatedX = offsetX * Math.cos(radian) - offsetY * Math.sin(radian);
    var rotatedY = offsetX * Math.sin(radian) + offsetY * Math.cos(radian);
    // 將旋轉後的座標加回中心點的位置
    var newX = rotatedX + cx;
    var newY = rotatedY + cy;
    // 返回旋轉後的座標
    return [newX, newY];//{ x: newX, y: newY };
}

function refleshAndDrawMpr2() {
    var canvas0 = getByid("canvas0_MPR");
    var canvas1 = getByid("canvas1_MPR");
    var canvas2 = getByid("canvas2_MPR");
    canvas0.reflesh(); canvas1.reflesh(); canvas2.reflesh();
    canvas0.drawLine(undefined, undefined, true);
    canvas2.drawLine(undefined, undefined);
    canvas1.drawLine(undefined, undefined);
}

function mpr2Canvas0(event) {

    var canvasC = getByid("canvas0_MPR");
    if (getByid("canvas0_MPR").MouseRightClick == true) {
        getByid("canvas0_MPR").rotate += 10;
        refleshAndDrawMpr2();
        return;
    }
    if (canvasC.MouseLeftClick == false) return;
    var numH = (parseFloat(canvasC.style.height) / parseFloat(GetViewport().imageHeight));
    var numW = (parseFloat(canvasC.style.width) / parseFloat(GetViewport().imageWidth));
    var currX11 = (event.offsetX != null) ? event.offsetX : event.originalEvent.layerX;
    var currY11 = (event.offsetY != null) ? event.offsetY : event.originalEvent.layerY;
    currX11 /= numW;
    currY11 /= numH;
    var VrDistance = getVrDistance();

    var canvas0 = getByid("canvas0_MPR");
    var canvas1 = getByid("canvas1_MPR");
    var canvas2 = getByid("canvas2_MPR");

    canvas1.width = GetViewport().imageWidth;
    canvas1.height = canvas0.rotateList1.length;// VrDistance * o3dPixelData2.length;;//o3dPixelData2.length;

    canvas2.width = VrDistance * o3dPixelData2.length;
    canvas2.height = GetViewport().imageHeight;

    //canvas1.style.height = ((Thickness_MPR < 0 ? -Thickness_MPR : Thickness_MPR)) + "px";
    //canvas2.style.width = ((Thickness_MPR < 0 ? -Thickness_MPR : Thickness_MPR)) + "px";

    canvas0.drawLine(parseInt(currX11), parseInt(currY11), true);
    canvas0.reflesh();
    canvas1.reflesh(parseInt(currY11));
    canvas2.reflesh(parseInt(currX11));

    canvas0.drawLine(parseInt(currX11), parseInt(currY11));
    canvas2.drawLine(undefined, parseInt(currY11));
    canvas1.drawLine(parseInt(currX11), undefined);
}


function mpr2Canvas1(event) {
    var canvas0 = getByid("canvas0_MPR");
    var canvas1 = getByid("canvas1_MPR");
    var canvas2 = getByid("canvas2_MPR");
    var canvasC = getByid("canvas0_MPR");
    if (getByid("canvas1_MPR").MouseRightClick == true) {
        //getByid("canvas1_MPR").rotate += 10;
        //refleshAndDrawMpr2();
        return;
    }
    if (getByid("canvas1_MPR").MouseLeftClick == false) return;
    //var numH = (parseFloat(canvasC.style.height) / parseFloat(GetViewport().imageHeight));
    //var numW = (parseFloat(canvasC.style.width) / parseFloat(GetViewport().imageWidth));

    var currX11 = (event.offsetX != null) ? event.offsetX : event.originalEvent.layerX;
    var currY11 = (event.offsetY != null) ? event.offsetY : event.originalEvent.layerY;
    //currX11 /= numW;
    //currY11 /= numH;
    var VrDistance = getVrDistance();



    canvas0.width = GetViewport().imageWidth;
    canvas0.height = GetViewport().imageHeight;

    canvas2.width = VrDistance * o3dPixelData2.length;

    canvas2.height = GetViewport().imageHeight;

    canvas2.style.width = ((Thickness_MPR < 0 ? -Thickness_MPR : Thickness_MPR)) + "px";

    canvas0.drawLine(undefined, undefined, true, undefined, parseInt(currX11));
    canvas1.reflesh();
    canvas0.reflesh(parseInt(currY11 / VrDistance));
    canvas2.reflesh(parseInt(currX11));


    canvas1.drawLine(parseInt(currX11), parseInt(currY11));
    canvas2.drawLine(parseInt(currY11), undefined);
    canvas0.drawLine(undefined, undefined, false, undefined, parseInt(currX11));
}



function mpr2Canvas2(event) {

    var canvasC = getByid("canvas0_MPR");
    if (getByid("canvas2_MPR").MouseRightClick == true) {
        //getByid("canvas2_MPR").rotate += 10;
        //refleshAndDrawMpr2();
        return;
    }
    if (getByid("canvas2_MPR").MouseLeftClick == false) return;
    var numH = (parseFloat(canvasC.style.height) / parseFloat(GetViewport().imageHeight));
    var numW = (parseFloat(canvasC.style.width) / parseFloat(GetViewport().imageWidth));
    var currX11 = (event.offsetX != null) ? event.offsetX : event.originalEvent.layerX;
    var currY11 = (event.offsetY != null) ? event.offsetY : event.originalEvent.layerY;
    currX11 /= numW;
    currY11 /= numH;
    var VrDistance = getVrDistance();

    var canvas0 = getByid("canvas0_MPR");
    var canvas1 = getByid("canvas1_MPR");
    var canvas2 = getByid("canvas2_MPR");

    canvas1.width = GetViewport().imageWidth;
    canvas1.height = VrDistance * o3dPixelData2.length;//o3dPixelData2.length;

    canvas0.width = GetViewport().imageWidth;
    canvas0.height = GetViewport().imageHeight;

    canvas1.style.height = ((Thickness_MPR < 0 ? -Thickness_MPR : Thickness_MPR)) + "px";

    canvas0.drawLine(undefined, undefined, true, parseInt(currY11), undefined);
    canvas0.reflesh(parseInt(currX11 / VrDistance));
    canvas1.reflesh(parseInt(currY11));
    canvas2.reflesh();


    canvas2.drawLine(parseInt(currX11), parseInt(currY11));
    canvas0.drawLine(undefined, undefined, false, parseInt(currY11), undefined);
    canvas1.drawLine(undefined, parseInt(currX11));
}

