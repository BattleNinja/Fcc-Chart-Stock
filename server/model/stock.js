const mongoose = require('mongoose');

const StockSchema = mongoose.Schema({
    name: String
});

const Stock = module.exports = mongoose.model('stock', StockSchema);

module.exports.addStock = function (name,callback) {
    Stock.findOne({name: name}, (err, stock) => {
        if (err) throw err;
        if(stock){
            console.log('stock has been existed');
        }else{
            const newStock = new Stock({
                name:name
            });
            newStock.save(callback);
        }
    });

};

module.exports.deletStock = function (name, callback) {
    Stock.findOneAndRemove({name: name}, callback);
};