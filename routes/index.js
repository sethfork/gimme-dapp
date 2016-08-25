var mongoose = require( 'mongoose' );
var devDapp     = mongoose.model( 'devDapp' );

//var Memcached = require('memcached');
//var memcached = new Memcached("localhost:11211");

module.exports = function(app){
  if (app.get('env') === 'development')
    var web3relay = require('./web3dummy');
  else
    var web3relay = require('./web3relay');

  app.post('/web3relay', web3relay.data);

}
