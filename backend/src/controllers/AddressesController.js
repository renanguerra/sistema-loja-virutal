const Addresses = require('../models/Addresses')
const User = require('../models/User')


module.exports = {
    async index(req,res) {
        const {user_id} = req.params;

        const user = await User.findByPk(user_id, {
            include: {association: 'addresses' }
        });

        return res.json(user)
    },


    async store(req,res){
        const {user_id} = req.params;
        const { street, number, city, state, zipcode, country } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({error: "User not found"})
        }

        const addresses = await Addresses.create({
             street, number, city, state, zipcode, country, user_id 
            })

        return res.json(addresses);
    }
}