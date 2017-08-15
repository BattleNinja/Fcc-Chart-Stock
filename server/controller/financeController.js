const Stock = require('./../model/stock');
const api = require('./../config/finance');


// Add new stock - - - -- - - ---- - - -- - - -- - - - -- -
const dataReciever = (stock, callback) => {
    api
        .getHistoricalData(stock,'1d', '1y')
        .then(data => {
            Stock.addStock(stock, callback);
        })
        .catch(err => console.log(err));
};
const getData = (stock, callback) => {
    api
        .getHistoricalData(stock.name, '1d', '1y')
        .then(callback)
        .catch(err => console.log(err));
};

//remove stock  - - - - - -- - -- - - - -- - -- -  -- - -

const dataRemover = ((stock, callback) => {
    Stock.deletStock(stock, callback);
});


// exports ---- -- - -- - - --- -- - - - - - - - - -- - --
module.exports = {
    dataReciever, getData, dataRemover
};