const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config/database');
const route = require('./routes/routes');
const path = require('path');
const Stock = require('./model/stock');
const financeController = require('./controller/financeController');

mongoose.Promise = global.Promise;
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
    console.log("Successfully connect to", config.database);
});
mongoose.connection.on('error', (err) => {
    console.log('Database error:', err);
});


const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});
app.use('/api', route);
app.get('/test', (req, res) => {
    Stock.deletStock('apple', (err, stock) => {
        if (err) throw err;
        res.send(stock);
    });
});
const port = require('./config/port');
const server = app.listen(port, () => {
        console.log('app is listening on port:', port);
    }
);

const io = require('socket.io')(server);
io.on('connection', (socket) => {

    // on listening add -- - - -- - - - - - -- -- - -- - -- - - - - --
    socket.on('add', (stockName) => {
        financeController.dataReciever(stockName, (err, stock) => {
            if (err) throw err;
            financeController.getData(stock, data => {
                io.emit('add', {stock: stockName, msg: data});
            })
        });
    });


    // on listening remove - - - -- - - - - -- - - - - - - - - - -- - - -
    socket.on('remove', (stockName) => {
        Stock.deletStock(stockName, (err, stock) => {
            socket.emit('remove', {msg: stock.name});
        });
    });
});
