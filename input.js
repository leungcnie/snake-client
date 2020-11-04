const { KEYMAPPINGS } = require('./constants');
// Stores the active TCP connection object
let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function (conn) {
  // Assigns current connection object from server to global connection var
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

// write callback function for data callback handler
// not needed anywhere else in play.js, so don't export
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
    return;
  }

  const action = KEYMAPPINGS[key];
  if (action) {
    connection.write(action);
  }
}

module.exports = { setupInput };