/**
 * @description: 下载文件
 * @param {BlobPart} blod流
 * @param {string} file 文件名
 * @param {Type} type 文件类型
 * @return {void}
 */
export var downloadFile = function (data, fileName, type) {
    if (type === void 0) { type = "xls"; }
    var blob = new Blob([data], {
        type: "application/vnd.ms-excel;charset=UTF-8"
    });
    var url = window.URL.createObjectURL(blob);
    var downloadElement = document.createElement("a"); // 创建a标签
    downloadElement.href = url;
    // eslint-disable-next-line
    downloadElement.download = fileName + "_" + parseInt(String(new Date().getTime() / 1000)) + "." + type;
    document.body.appendChild(downloadElement);
    downloadElement.click();
    document.body.removeChild(downloadElement); // 下载完成移除元素
    window.URL.revokeObjectURL(url); // 释放掉blob对象
};
