const svgexport = require('svgexport');

const convert = (inputUrl, outputUrl, func) => {
  const input = [{
    "input": [inputUrl],
    "output": [[outputUrl]]
  }]

  svgexport.render(input, func);
}

module.exports = convert;