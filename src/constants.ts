import { pad } from "./utils/pad";

export const r = Math.floor(Math.random() * 255);
export const g = Math.floor(Math.random() * 255);
export const b = Math.floor(Math.random() * 255);

export const redCommand = "255,000,000";
export const greenCommand = "000,255,000";
export const blueCommand = "000,000,255";

export const threeDigitR = pad(r, 3);
export const threeDigitG = pad(g, 3);
export const threeDigitB = pad(b, 3);
export const randomColorCommand = `${threeDigitR},${threeDigitG},${threeDigitB}`;

export const restartCommand = ":RESTART";
