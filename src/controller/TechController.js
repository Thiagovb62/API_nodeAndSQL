const Tech = require('../models/Tech')
const User = require('../models/User')

module.exports = {
    async show(req, res) {
        const { user_id } = req.params;


        const user = await User.findByPk(user_id, {
            include: {
                association: 'techs',
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        });

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        return res.status(200).json(user.techs);

    },

    async store(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const [tech] = await Tech.findOrCreate({
            where: { name }
        });

        await user.addTech(tech);

        return res.json(tech);
    },
    async delete(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }


        const tech = await Tech.findOne({
            where: { name }
        });

        await user.removeTech(tech)

        return res.status(200).json({ success: 'tecnologia deletada com sucesso' })

    },
    async Update(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        await Tech.update(name, {
            where: {
                id: user_id
            }
        });

        return res.status(200).json({ success: "atualizado com sucesso" });

    }

}