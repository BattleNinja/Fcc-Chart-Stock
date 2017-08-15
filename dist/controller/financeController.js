'use strict';

var Stock = require('./../model/stock');
var api = require('./../config/finance');

// Add new stock - - - -- - - ---- - - -- - - -- - - - -- -
var dataReciever = function dataReciever(stock, callback) {
    api.getHistoricalData(stock, '1d', '1y').then(function (data) {
        Stock.addStock(stock, callback);
    }).catch(function (err) {
        return console.log(err);
    });
};
var getData = function getData(stock, callback) {
    api.getHistoricalData(stock.name, '1d', '1y').then(callback).catch(function (err) {
        return console.log(err);
    });
};

//remove stock  - - - - - -- - -- - - - -- - -- -  -- - -

var dataRemover = function dataRemover(stock, callback) {
    Stock.deletStock(stock, callback);
};

// exports ---- -- - -- - - --- -- - - - - - - - - -- - --
module.exports = {
    dataReciever: dataReciever, getData: getData, dataRemover: dataRemover
};
//# sourceMappingURL=financeController.js.map