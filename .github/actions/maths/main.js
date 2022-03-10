const core = require('@actions/core');
const core = require("@actions/core");

const operation-A = core.getInput("operation-A");
const operacion-B = core.getInput("operation-B");
const operation = core.getInput("operation");

console.log( suma ${operation-A}`);
console.log( suma ${operation-B}`);
if (operation) {
  console.log( result ${env.result}`);
}

// Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
