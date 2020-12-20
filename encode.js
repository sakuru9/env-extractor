import { compose } from "./utils/functions/compose";
import { fileDataSplitted, fileValuesEncoded } from "./utils/functions/file";

const toOutput = (inputArr) => inputArr.join("\n");

(() => {
  const encodeSecretsToBase64 = (file) =>
    compose(toOutput, fileValuesEncoded, fileDataSplitted)(file);

  console.log("");
  console.log(encodeSecretsToBase64("encode.txt"));
  console.log("");
})();
