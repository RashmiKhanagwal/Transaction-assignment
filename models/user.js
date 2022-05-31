const { sequelize,Sequelize } = require("sequelize");

const UserSchema = sequelize.define('User',{
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    balance: {
        type: Sequelize.INTEGER
    }
});

module.exports = UserSchema;