const User = require('../models/User')
const Adress = require('../models/Adress')

module.exports = {
    async show(req, res) {
        const { user_id } = req.params

        const user = await User.findByPk(user_id, {
            include: { association: 'addresses' }
        });
        return res.status(200).json({ user });
    },

    async store(req, res) {
        const { user_id } = req.params;
        const { zipcode, street, number } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(404).json({ error: "Usuário nao encontrado" })
        }

        const address = await Adress.create({ zipcode, street, number, user_id });

        return res.json({ address });
    },

    async delete(req, res) {
        const { user_id } = req.params;
        const { zipcode, street, number } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        await Adress.destroy({
            where: {
                zipcode,
                street,
                number,
            }
        });

        return res.status(200).json({ success: 'endereço deletada com sucesso' })

    },
    async Update(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        await Adress.update(req.body, {
            where: {
                id: user_id
            }
        });

        return res.status(200).json({ success: "atualizado com sucesso" });

    }

}