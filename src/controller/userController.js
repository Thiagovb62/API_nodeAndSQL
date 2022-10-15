const User = require('../models/User')

module.exports = {
    async show(req, res) {
        const users = await User.findAll();

        return res.json({ users })
    },
    async store(req, res) {
        const { name, email } = req.body;

        const user = await User.create({ name, email });

        return res.json({ user });
    },
    async delete(req, res) {
        const { user_id } = req.params;
        const { name, email } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        await User.destroy({
            where: {
                name,
                email,
            }
        });

        return res.status(200).json({ success: 'Usuario deletada com sucesso' })

    }
}