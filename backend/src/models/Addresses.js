const { Model, DataTypes } = require('sequelize');

class Addresses extends Model {
    static init(sequelize) {
        super.init({
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
            city: DataTypes.STRING,
            state: DataTypes.STRING,
            zipcode: DataTypes.STRING,
            country: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'})
    }
}

module.exports = Addresses;
