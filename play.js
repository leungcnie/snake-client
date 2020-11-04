const {connect} = require('./client');
const {setupInput} = require('./input');

console.log('Connecting ...');
connection = connect();

setupInput(connection);
