/**
 * @description: 转化File为Base64
 * @param {File} file
 * @return {string}
 */
export declare function fileToBase64(file: File): string;
export declare const compressDataUrl: (b64: string, fileType?: string) => Promise<string>;
/**
 * @description: 压缩图片File
 * @param {File} file
 * @return {*}
 */
export declare function compressImgFile(file: File): Promise<string[]>;
