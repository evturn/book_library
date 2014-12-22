var application_root = __dirname,
	express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path'),
	mongoose = require('mongoose');

var app = express();

app.use(express.static(path.join(application_root, 'site')));

var port = 4711;

app.listen(port, function(){
	console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});

app.get('/api', function(request, response){
	response.send('Library API is running');
});

mongoose.connect('mongodb://localhost/library_database');

var Book = new mongoose.Schema({
	title: String,
	author: String,
	releaseDate: Date
});

var BookModel = mongoose.model('Book', Book);

app.get( '/api/books', function( request, response ) {
    return BookModel.find( function( err, books ) {
        if( !err ) {
            return response.send( books );
        } else {
            return console.log( err );
        }
    });
});

app.post('api/books', function(request, response){
	var book = new BookModel({
		title: request.body.title,
		author: request.body.author,
		releaseDate: request.body.releaseData
	});
	return book.save(function(err){
		if(!err){
			console.log('created');
			return response.send(book);
		} else {
			console.log(err);
		}
	});
});


