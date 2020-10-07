module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'user',
    password: '',
    database: 'poo',
    define: {
        timestamps: true, //usa o createAt e updateAt
        underscored: true, //usa o snake case tipo_isso naoIsso

    }
};
