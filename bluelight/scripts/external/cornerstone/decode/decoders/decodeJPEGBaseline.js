import JpegImage from"../../codecs/jpeg.js";function decodeJPEGBaseline(e,o){if(void 0===JpegImage)throw new Error("No JPEG Baseline decoder loaded");const a=new JpegImage;return a.parse(o),a.colorTransform=!1,8===e.bitsAllocated?(e.pixelData=a.getData(e.columns,e.rows),e):16===e.bitsAllocated?(e.pixelData=a.getData16(e.columns,e.rows),e):void 0}export default decodeJPEGBaseline;