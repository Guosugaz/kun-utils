"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compressImgFile = exports.compressDataUrl = exports.fileToBase64 = void 0;
/*
 * @Description: 处理图片相关操作
 * @Author: Guosugaz
 * @LastEditors: Guosugaz
 * @Date: 2021-08-01 16:13:57
 * @LastEditTime: 2021-08-01 18:52:30
 */
var exts = ["png", "jpg", "jpeg", "git", "bmp", "svg", "webp", "jp"];
var switchQuality = function (size) {
    size = size / 1024;
    if (size < 300)
        return undefined;
    if (size < 500)
        return 0.7;
    if (500 <= size && size <= 1000)
        return 0.4;
    if (1000 < size && size <= 2000)
        return 0.35;
    if (2000 < size && size <= 4000)
        return 0.3;
    if (4000 < size && size <= 6000)
        return 0.2;
    if (6000 < size && size <= 7000)
        return 0.15;
    if (size > 7000)
        return 0.1;
    return undefined;
};
/**
 * @description: 转化File为Base64
 * @param {File} file
 * @return {string}
 */
function fileToBase64(file) {
    var fileData = "";
    if (window["createObjectURL"] !== undefined) {
        // 基础创建url的方法
        fileData = window["createObjectURL"](file);
    }
    else if (window.URL !== undefined) {
        // mozilla(firefox)
        fileData = window.URL.createObjectURL(file);
    }
    else if (window.webkitURL !== undefined) {
        // webkit or chrome
        fileData = window.webkitURL.createObjectURL(file);
    }
    return fileData;
}
exports.fileToBase64 = fileToBase64;
/**
 * @description: 检查文件是否为图片类型
 * @param {string} filename
 * @return {boolean}
 */
function checkFileFormat(filename) {
    var pointIndex = filename.lastIndexOf(".");
    if (!pointIndex)
        return false;
    var ext = filename.slice(pointIndex + 1).toLowerCase();
    return exts.indexOf(ext) >= 0;
}
var compressDataUrl = function (b64, fileType) {
    if (fileType === void 0) { fileType = "image/jpeg"; }
    return new Promise(function (resolve, reject) {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.onload = function () {
            var h = img.height, w = img.width, l = Math.max(w, h) / (w / h), percent = 1;
            if (l <= 1200 && l > 1000) {
                percent = 0.95;
            }
            else if (l > 1200 && l <= 1400) {
                percent = 0.9;
            }
            else if (l > 1400 && l <= 1500) {
                percent = 0.85;
            }
            else if (l > 1500 && l <= 1600) {
                percent = 0.75;
            }
            else if (l > 1600 && l <= 1700) {
                percent = 0.65;
            }
            else if (l > 1700 && l <= 2000) {
                percent = 0.65;
            }
            else if (l > 2000 && l <= 3000) {
                percent = 0.55;
            }
            else if (l > 3000) {
                percent = 0.5;
            }
            var _h = (canvas.height = h / percent);
            var _w = (canvas.width = w / percent);
            ctx.drawImage(img, 0, 0, _w, _h);
            resolve(canvas.toDataURL(fileType, switchQuality(b64.length)));
        };
        img.onerror = function (e) { return reject(e); };
        img.src = b64;
    });
};
exports.compressDataUrl = compressDataUrl;
/**
 * @description: 压缩图片File
 * @param {File} file
 * @return {*}
 */
function compressImgFile(file) {
    var filename = file.name;
    if (!checkFileFormat(file.name)) {
        return Promise.reject([filename, "image format error"]);
    }
    return new Promise(function (resolve, reject) {
        var fr = new FileReader();
        fr.onload = function () {
            var resultB64 = fr.result;
            if (resultB64 && typeof resultB64 === "string") {
                exports.compressDataUrl(resultB64, file.type)
                    .then(function (b64compressed) { return resolve([filename, b64compressed]); })
                    .catch(function (e) { return reject([filename, e]); });
            }
            else {
                reject([filename, "image read error"]);
            }
        };
        fr.readAsDataURL(file);
    });
}
exports.compressImgFile = compressImgFile;
