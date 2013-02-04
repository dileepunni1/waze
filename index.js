var express = require('express');
var config = require('./config');

var application = express.createServer();

application.get('/', function(request,response,next){

	response.send('it is upto you');

});

application.configure(function(){
  application.use('/assets', express.static(__dirname + '/assets'));
  application.use(express.static(__dirname + '/public'));
});

/*application.get('/employees', function(request,response,next){
	response.send('node');
});
application.post('/employees/:idRecord', function(request,response,next){
	response.send(request.params.idRecord);
});
application.delete('/employees/:idRecord', function(request,response,next){
	response.send('node delete');
});
application.put('/employees', function(request,response,next){
	response.send('node put');
});*/

application.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke!');
});
application.listen(3000, function(){
    console.log('Started server http://localhost:3000');
});
