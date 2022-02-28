const core = require("@actions/core");

const operation-A = core.getInput("operation-A");
const operacion-B = core.getInput("operation-B");
const operation = core.getInput("operation");

console.log(`5 ${operation-A}`);
console.log(`2 ${operation-B}`);
if (operation) {
  console.log(`suma ${env.result}`);
}
