const { authJwt } = require('../middleware/auth');

const Transactioncontroller = require('../controllers/transaction');


module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });
    app.post('transaction/:toId', [authJwt.verifyToken], Transactioncontroller.credit);
    app.get('transaction/balance', [authJwt.verifyToken], Transactioncontroller.balance);
};