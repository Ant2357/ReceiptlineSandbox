const fs = require("fs");
const receiptline = require('receiptline');
const localSvgexport = require("./localSvgexport.js");

const option = {
  cpl: 42,
  encoding: 'cp932',
  upsideDown: false,
  gamma: 1.8,
  command: 'svg'
};

const input = fs.readFileSync("./input.rl", 'utf8').toString();
const data = receiptline.transform(input, option);

(async () => {
  try {
    await fs.promises.writeFile("./output.svg", data);
    await console.log('Success');
    await localSvgexport("./output.svg", "output.png", () => { console.log("Done"); });
  } catch (error) {
    console.log(error.toString());
  }
})();
