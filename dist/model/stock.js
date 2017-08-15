'use strict';

var mongoose = require('mongoose');

var StockSchema = mongoose.Schema({
    name: String
});

var Stock = module.exports = mongoose.model('stock', StockSchema);

module.exports.addStock = function (name, callback) {
    Stock.findOne({ name: name }, function (err, stock) {
        if (err) throw err;
        if (stock) {
            console.log('stock has been existed');
        } else {
            var newStock = new Stock({
                name: name
            });
            newStock.save(callback);
        }
    });
};

module.exports.deletStock = function (name, callback) {
    Stock.findOneAndRemove({ name: name }, callback);
};
//# sourceMappingURL=stock.js.map