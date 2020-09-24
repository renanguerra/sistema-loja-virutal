const User = require('../models/User')

module.exports = {
    async index(req,res) {
        const user = await User.findAll()
        
        return res.json(user)
    
    },

   /* async login(req,res) {
        const {email, password} = req.body

        const user = await User.findOne({
            where: {
                email: email,
                password: password
            }
        });

        if (!user){
            return res.status(400).json({"error": "User not found"})
        }
            
        
        return res.json(user)
    
    },
*/


    async store(req,res){
        const { name, phone, cnpj, image } = req.body;

        const user = await User.create({ name, phone, cnpj, image })

        return res.json(user);
    },

    async update(req,res){
        const user = await User.findByPk(req.params.id);

        const { name, phone, cnpj, image } = req.body;

        user.name = name
        user.phone = phone
        user.cnpj = cnpj
        user.image = image

        await user.save()

        return res.json(user);
    },

    async delete(req,res){
        const user = await User.findByPk(req.params.id);

        await user.destroy();

        return res.status(200).json({"situação": "OK"})
    },
}

