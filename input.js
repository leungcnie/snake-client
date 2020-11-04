// Stores the active TCP connection object
let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
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
  // CTRL + C to terminate
  // if (key === '\u0003') {
  //   process.exit();
  // }
  switch (key) {
    case '\u0003':
      process.exit();
      break;
    case 'w':
      connection.write("Move: up");
      break;
    case 'a':
      connection.write("Move: left");
      break;
    case 's':
      connection.write("Move: down");
      break;
    case 'd':
      connection.write("Move: right");
      break;
    case '1':
      connection.write("Say: Sup");
      break;
    case '2':
      connection.write("Say: Oh No");
      break;
    case '3':
      connection.write("Say: AHHHH");
      break;
  }
}

module.exports = {setupInput};