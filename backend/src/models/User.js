const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            /*email: DataTypes.STRING,
            password: DataTypes.STRING,*/
            phone: DataTypes.STRING,
            cnpj: DataTypes.STRING,
            image: DataTypes.BLOB
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Addresses, { foreignKey: 'user_id', as: 'addresses'})
    }
    static associate(models) {
        this.hasMany(models.Produtos, { foreignKey: 'user_id', as: 'produtos'})
    }
}

module.exports = User;