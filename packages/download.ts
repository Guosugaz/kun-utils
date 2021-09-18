/*
 * @Description:
 * @Author: Guosugaz
 * @LastEditors: Guosugaz
 * @Date: 2021-08-01 16:59:02
 * @LastEditTime: 2021-09-18 17:47:09
 */
type Type = "xls" | "xlsx" | "zip" | "text";

/**
 * @description: 下载文件
 * @param {BlobPart} blod流
 * @param {string} file 文件名
 * @param {Type} type 文件类型
 * @return {void}
 */
export const downloadFile = (
  data: BlobPart,
  fileName: string,
  type: Type = "xlsx",
): void => {
  let blob = new Blob([data], {
    type: "charset=UTF-8",
  });
  let url = window.URL.createObjectURL(blob);
  const downloadElement = document.createElement("a"); // 创建a标签
  downloadElement.href = url;
  // eslint-disable-next-line
  downloadElement.download = `${fileName}_${parseInt(
    String(new Date().getTime() / 1000),
  )}.${type}`;
  document.body.appendChild(downloadElement);
  downloadElement.click();
  document.body.removeChild(downloadElement); // 下载完成移除元素
  window.URL.revokeObjectURL(url); // 释放掉blob对象
};
