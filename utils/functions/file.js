import fs from "fs";

export const fileDataSplitted = (input) =>
  fs.readFileSync(input, "utf8", (_, data) => data).split("\n");

export const fileValuesEncoded = (input) =>
  input.map(
    (str) =>
      `${str.split("=")[0]}: ${Buffer.from(str.split("=")[1]).toString(
        "base64"
      )}`
  );
export const fileValuesDecoded = (input) =>
  input.map(
    (str) =>
      `${str.split(": ")[0]}=${Buffer.from(
        str.split(": ")[1],
        "base64"
      ).toString("utf8")}`
  );
