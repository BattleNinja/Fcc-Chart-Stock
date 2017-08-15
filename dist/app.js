'use strict';

var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var config = require('./config/database');
var route = require('./routes/routes');
var path = require('path');
var Stock = require('./model/stock');
var financeController = require('./controller/financeController');

mongoose.Promise = global.Promise;
mongoose.connect(config.database);
mongoose.connection.on('connected', function () {
    console.log("Successfully connect to", config.database);
});
mongoose.connection.on('error', function (err) {
    console.log('Database error:', err);
});

var app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Invalid Endpoint');
});
app.use('/api', route);
app.get('/test', function (req, res) {
    Stock.deletStock('apple', function (err, stock) {
        if (err) throw err;
        res.send(stock);
    });
});
var port = require('./config/port');
var server = app.listen(port, function () {
    console.log('app is listening on port:', port);
});

var io = require('socket.io')(server);
io.on('connection', function (socket) {

    // on listening add -- - - -- - - - - - -- -- - -- - -- - - - - --
    socket.on('add', function (stockName) {
        financeController.dataReciever(stockName, function (err, stock) {
            if (err) throw err;
            financeController.getData(stock, function (data) {
                io.emit('add', { stock: stockName, msg: data });
            });
        });
    });

    // on listening remove - - - -- - - - - -- - - - - - - - - - -- - - -
    socket.on('remove', function (stockName) {
        Stock.deletStock(stockName, function (err, stock) {
            socket.emit('remove', { msg: stock.name });
        });
    });
});
//# sourceMappingURL=app.js.map