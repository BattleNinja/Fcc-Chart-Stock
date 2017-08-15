const express = require('express');
const router = express.Router();
const Stock = require('../model/stock');
const financeController = require('./../controller/financeController');
import {Subject} from 'rxjs/Subject';
const api = require('./../config/finance');


router.post('/addstock', (req, res) => {
    const name = req.body.name;
    Stock.addStock(name, (err, stock) => {
        if (err) throw err;
        res.send(stock);
    });
});

router.post('/deletstock', (req, res) => {
    const name = req.body.name;
    Stock.deletStock(name, (err, stock) => {
        if (err) throw err;
        res.send(stock);
    });
});

router.get('/initialize', (req, res) => {
    const initializer = new Subject();
    let length = 0;
    let data = [];
    Stock.find({}, (err, stocks) => {
        if (err) throw err;
        length = stocks.length;
        stocks.forEach((item) => {
            api
                .getHistoricalData(item.name, '1d', '1y')
                .then(msg => initializer.next({stock: item.name, msg: msg}))
                .catch(err => console.log(err));
        });
    });
    initializer.subscribe(stock => {
        data.push(stock);
        if (data.length === length) {
            res.json(data);
        }
    });
});

module.exports = router;