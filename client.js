const net = require('net');
const {IP, PORT, NAME} = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  // print a msg when connection established
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    // send name to server via TCP
    conn.write(NAME);
    // automatically move up
    // setInterval(() => conn.write("Move: up"), 50);
  })

  // print data from server
  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
}

module.exports = {connect};