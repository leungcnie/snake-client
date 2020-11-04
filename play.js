/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

// write callback function for data callback handler
const handleUserInput = (key) => {
  // CTRL + C to terminate
  if (key === '\u0003') {
    process.exit();
  }
}

const {connect} = require('./client');
console.log('Connecting ...');
connect();
setupInput();
