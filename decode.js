import { compose } from "./utils/functions/compose";
import { fileDataSplitted, fileValuesDecoded } from "./utils/functions/file";

const toOutput = (inputArr) => inputArr.join("\n");

(() => {
  const decodeSecrets = (file) =>
    compose(toOutput, fileValuesDecoded, fileDataSplitted)(file);

  console.log("");
  console.log(decodeSecrets("decode.txt"));
  console.log("");
})();
