import User from '../model/userModel.js';

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
        res.status(400).send(error);
    }
};
export const login=async (req, res)=>{
    const  {username, password} = req.body;
    try{
        const userFind= await User.findOne({ username });
        if(!userFind)
            res.status(400).send({message:"Credenciales incorrectas"});
 
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
        res.json({message:"User Login."}).send('token',token);
    }catch (error){
       res.send({message:error.message});
    }
 
 }
export const updateUser = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['username', 'email', 'phone', 'password'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).send();
        }

        updates.forEach(update => user[update] = req.body[update]);
        await user.save();

        res.send(user);
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