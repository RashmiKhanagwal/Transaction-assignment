module.exports = (sequelize,Sequelize) => {
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
            type: Sequelize.INTEGER,
            defaultValue: 1000
        }
    });
    return UserSchema;
};