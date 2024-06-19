import User from '../model/userModel.js'
import bcyptjs from 'bcryptjs'
import { createJWT } from '../utils/jwt.js';

export const createUser = async (req, res) => {
    try {
        const { username, email, phone, password,name,lastName,role } = req.body;
        const passwordHash= await bcyptjs.hash(password,10);
        const user = new User({ 
            username, 
            email,
             phone, 
             password: passwordHash, 
             name,
             lastName,
            status:true,
            role,
        creationDate: new Date()
    });
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
};
export const login=async (req, res)=>{
    const  {username, password} = req.body;
    try{
        const userFind= await User.findOne({ username });
        if(!userFind)
            res.status(400).send("Credenciales incorrectas");
 
        const isMatch= await bcyptjs.compare(password,userFind.password);
 
        if (!isMatch)
            res.status(400).send({message:"Credenciales incorrectas"});
 
        const token =await createJWT({
            id:userFind.username,
            email:userFind.email,
            role:userFind.role,
            name:userFind.name,
            lastName:userFind.lastName,
            status:userFind.status
        });
      res.cookie('token',token)
        res.json({message:"User Login.",token:token});
    }catch (error){
        console.log(error)
      // res.send({message:error.message});
    }
 
 }
export const updateUser = async (req, res) => {
        try {
            const { id,name,lastName, email,phone,password } = req.body;
            const user = await User.findById(id);
    
            if (!user) {
                return res.status(400).send("Usuario no encontrado");
            }
            const passwordHash= await bcyptjs.hash(password,10);

            user.name=name;
            user.lastName=lastName;
            user.email=email;
            user.phone=phone;
            user.password=passwordHash;
                    
    
            await user.save()
                    res.status(201).send(user);
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }    

    
}
export const deleteUser = async (req, res) => {
   
    try {
    
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(400).send("Usuario no encontrado");
        }

        user.status=false;
        user.deleteDate=new Date();
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
}


export const getUsers= async (req, res) => {
    try {
        
        const user = await User.find();

        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
}


export const logout = (req, res)=>{
    res.cookie('token', "",{
        expires:new Date(0)
    });

return res.status(200);
}