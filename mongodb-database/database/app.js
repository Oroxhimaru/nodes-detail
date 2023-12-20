var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); //import of cookie by  express generator /comment 4
var logger = require('morgan');
var session = require("express-session"); // importing the express-session (1)

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const sessionRouter = require('./routes/sessions');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//work or setup for creating session below: (2)
app.use(session({
  resave: false, // here false means if sessions value is not change then don't save the value again and agian. (benefit: less load on server)
  saveUninitialized: false,  //when data has no name then it is known as Uninitiallized, so false here means don't save more than  one time. save server storage
  secret: "secrethai" //for security
}));
// now go to session.js file in routes.


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); //setup of cookie by  expressgenerator / comment 30
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// Include the session router
app.use('/', sessionRouter); //this 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
