const User = require('../models/User')
const Adress = require('../models/Adress')

module.exports ={
    async show (req,res){
    const {user_id} = req.params
    
    const user = await User.findByPk(user_id,{
        include:{association:'addresses'}
    });
    return res.status(200).json({user});
    },
    
    async store(req,res){
        const {user_id} = req.params;
        const {zipcode,street,number} = req.body;
        
        const user = await User.findByPk(user_id);
        
        if(!user){
            return res.status(404).json({error:"Usuário nao encontrado"})
        }
        
        const address = await Adress.create({zipcode,street,number,user_id});
        
        return res.json({address});
    }
    
}