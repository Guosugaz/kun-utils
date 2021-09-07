import { getExtension } from "./base";

/*
 * @Description: 处理图片相关操作
 * @Author: Guosugaz
 * @LastEditors: Guosugaz
 * @Date: 2021-08-01 16:13:57
 * @LastEditTime: 2021-08-01 18:52:30
 */
const exts = ["png", "jpg", "jpeg", "git", "bmp", "svg", "webp", "jp"];

const switchQuality = (size: number) => {
  size = size / 1024;
  if (size < 300) return undefined;
  if (size < 500) return 0.7;
  if (500 <= size && size <= 1000) return 0.4;
  if (1000 < size && size <= 2000) return 0.35;
  if (2000 < size && size <= 4000) return 0.3;
  if (4000 < size && size <= 6000) return 0.2;
  if (6000 < size && size <= 7000) return 0.15;
  if (size > 7000) return 0.1;
  return undefined;
};

/**
 * @description: 转化File为Base64
 * @param {File} file
 * @return {string}
 */
export function fileToBase64(file: File): string {
  let fileData: string = "";
  if ((window as any)["createObjectURL"] !== undefined) {
    // 基础创建url的方法
    fileData = (window as any)["createObjectURL"](file);
  } else if (window.URL !== undefined) {
    // mozilla(firefox)
    fileData = window.URL.createObjectURL(file);
  } else if (window.webkitURL !== undefined) {
    // webkit or chrome
    fileData = window.webkitURL.createObjectURL(file);
  }
  return fileData;
}

/**
 * @description: 检查文件是否为图片类型
 * @param {string} filename
 * @return {boolean}
 */
function checkFileFormat(filename: string): boolean {
  const pointIndex = filename.lastIndexOf(".");
  if (!pointIndex) return false;
  const ext = filename.slice(pointIndex + 1).toLowerCase();
  return exts.indexOf(ext) >= 0;
}

export const compressDataUrl = (
  b64: string,
  fileType: string = "image/jpeg"
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      let h = img.height,
        w = img.width,
        l = Math.max(w, h) / (w / h),
        percent = 1;
      if (l <= 1200 && l > 1000) {
        percent = 0.95;
      } else if (l > 1200 && l <= 1400) {
        percent = 0.9;
      } else if (l > 1400 && l <= 1500) {
        percent = 0.85;
      } else if (l > 1500 && l <= 1600) {
        percent = 0.75;
      } else if (l > 1600 && l <= 1700) {
        percent = 0.65;
      } else if (l > 1700 && l <= 2000) {
        percent = 0.65;
      } else if (l > 2000 && l <= 3000) {
        percent = 0.55;
      } else if (l > 3000) {
        percent = 0.5;
      }
      const _h: number = (canvas.height = h / percent);
      const _w: number = (canvas.width = w / percent);
      ctx!.drawImage(img, 0, 0, _w, _h);
      resolve(canvas.toDataURL(fileType, switchQuality(b64.length)));
    };
    img.onerror = (e) => reject(e);
    img.src = b64;
  });
};

/**
 * @description: 压缩图片File
 * @param {File} file
 * @return {*}
 */
export function compressImgFile(file: File): Promise<string[]> {
  let filename = file.name;
  if (!checkFileFormat(file.name)) {
    return Promise.reject([filename, "image format error"]);
  }
  return new Promise((resolve, reject) => {
    const fr: FileReader = new FileReader();
    fr.onload = () => {
      const resultB64 = fr.result;
      if (resultB64 && typeof resultB64 === "string") {
        compressDataUrl(resultB64, file.type)
          .then((b64compressed: string) => resolve([filename, b64compressed]))
          .catch((e: any) => reject([filename, e]));
      } else {
        reject([filename, "image read error"]);
      }
    };
    fr.readAsDataURL(file);
  });
}
