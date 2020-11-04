const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  // print a msg when connection established
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    // send name to server via TCP
    conn.write("Name: CIL");
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