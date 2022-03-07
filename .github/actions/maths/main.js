const core = require("@actions/core");

const operation-A = core.getInput("operation-A");
const operacion-B = core.getInput("operation-B");
const operation = core.getInput("operation");

console.log( suma ${operation-A}`);
console.log( suma ${operation-B}`);
if (operation) {
  console.log( result ${env.result}`);
}
