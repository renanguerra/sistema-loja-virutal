const Produtos = require('../models/Produtos');
const User = require('../models/User');
const {Op} = require('sequelize')

module.exports = {
    async index(req,res) {
        const {name} = req.params;

        const produtos = await Produtos.findAll({
            where: {
                name: {[Op.like]: `%${name}%`}
            }
        })
        return res.json(produtos)
    },

    async indexid(req,res) {
        const {id} = req.params;

        const produtos = await Produtos.findAll({
            where: {
                id: id
            }
        })
        return res.json(produtos)
    },

    async all(req,res) {
        const produtos = await Produtos.findAll()

        return res.json(produtos)
    },

    async indexuser(req,res) {
        const {user_id} = req.params;


        const user = await User.findByPk(user_id, {
            include: {association: 'produtos' }
        });

        return res.json(user)
    },


    async store(req,res){
        const {user_id} = req.params

        const { name, description, price, image } = req.body;

        const user = await User.findByPk(user_id)

        if(!user){
            return res.status(400).json({"error": "Usuario não existe"})
        }

        const produtos = await Produtos.create({user_id, name, description, price, image})

        return res.json(produtos);
    },

    async update(req,res){
        const produtos = await Produtos.findByPk(req.params.id);

        const { name, description, price, image } = req.body;

        produtos.name = name
        produtos.description = description
        produtos.price = price
        produtos.image = image

        await produtos.save()

        return res.json(produtos);
    },

    async delete(req,res){
        const produtos = await Produtos.findByPk(req.params.id);

        await produtos.destroy();

        return res.status(200).json({"situação": "OK"})
    },
}