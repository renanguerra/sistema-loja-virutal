module.exports = {
    dialect: 'postgres',
    url: 'postgres://smychxzj:8R3z8PBR-M5Z0IeM0TOmabEC_DthUZw2@motty.db.elephantsql.com:5432/smychxzj',
    username: 'smychxzj',
    password: '8R3z8PBR-M5Z0IeM0TOmabEC_DthUZw2',
    database: 'projetos-medium',
    define: {
        timestamps: true, //usa o createAt e updateAt
        underscored: true, //usa o snake case tipo_isso naoIsso

    }
};
