require('dotenv').config();
require("./config/keys");
const cors = require('cors');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

/*routes */

const itemsRouter = require('./routes/items');

const app = express();
/* mongodb connection */
//const { mongodb } = process.env.mongodb;
const db = process.env.MONGODB_URI;
mongoose.connect(`${db}` , {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/items', itemsRouter);

if(process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "/client/build")));
  
  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, "client", 'build', 'index.html'));
  // })
}

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
