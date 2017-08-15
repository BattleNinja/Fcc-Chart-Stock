'use strict';

var _Subject = require('rxjs/Subject');

var express = require('express');
var router = express.Router();
var Stock = require('../model/stock');
var financeController = require('./../controller/financeController');

var api = require('./../config/finance');

router.post('/addstock', function (req, res) {
    var name = req.body.name;
    Stock.addStock(name, function (err, stock) {
        if (err) throw err;
        res.send(stock);
    });
});

router.post('/deletstock', function (req, res) {
    var name = req.body.name;
    Stock.deletStock(name, function (err, stock) {
        if (err) throw err;
        res.send(stock);
    });
});

router.get('/initialize', function (req, res) {
    var initializer = new _Subject.Subject();
    var length = 0;
    var data = [];
    Stock.find({}, function (err, stocks) {
        if (err) throw err;
        length = stocks.length;
        stocks.forEach(function (item) {
            api.getHistoricalData(item.name, '1d', '1y').then(function (msg) {
                return initializer.next({ stock: item.name, msg: msg });
            }).catch(function (err) {
                return console.log(err);
            });
        });
    });
    initializer.subscribe(function (stock) {
        data.push(stock);
        if (data.length === length) {
            res.json(data);
        }
    });
});

module.exports = router;
//# sourceMappingURL=routes.js.map