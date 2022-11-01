const app = require('./backend/app');
const debug = require('debug')('node-angular');
const http = require('http');

const normalizePort = (val) => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val; 
  }

  if (port >= 0) {
    // port number
    return port; 
  }

  return false;
};

const onError = (err) => {
  if (err.syscall !== 'listen') {
    throw err;
  }
  const bind = typeof addr === 'string' ? 'pipe' + addr : 'port' + port;
  switch (err.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privilages');
      process.exit();
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit();
      break;
    default: 
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe' + addr : 'port' + port;
  debug('Listening on ' + bind);
}

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.on('error', onError);
server.on('listening', onListening);

server.listen(port);