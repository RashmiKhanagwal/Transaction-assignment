const { sequelize,Sequelize } = require("sequelize");

const TransactionSchema = sequelize.define('Transaction',{
    from: { 
        type: Sequelize.STRING, 
        allowNull: false 
    },
    to: { 
        type: Sequelize.STRING, 
        allowNull: false 
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = TransactionSchema;