var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var app = express();


const productRoute = require('./routes/products.routes.js');


//Connecting to mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://demo:demo123@ds261277.mlab.com:61277/demo-01', { useNewUrlParser: true } )
.then(function(){
	console.log('Connected to DB')
})
.catch(err =>{	
	console.log('Error in connection to DB.  Error:',err)
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));



require('./routes/signUp.js')(app);
app.use('/products', productRoute);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

console.log('Server listening at port 3000');

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
