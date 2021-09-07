declare type Type = "xls" | "xlsx" | "zip" | "text";
/**
 * @description: 下载文件
 * @param {BlobPart} blod流
 * @param {string} file 文件名
 * @param {Type} type 文件类型
 * @return {void}
 */
export declare const downloadFile: (data: BlobPart, fileName: string, type?: Type) => void;
export {};
