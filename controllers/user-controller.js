import User from "../model/User.js";


export const getAllUsers = async (req, res, next)=>{
    let users;
    try {
        users = await User.find();
    } catch (error) {
        console.log(error);
    }


    if(!users){
        return res.status(404).json({message: "No user found" });
    }

    return res.status(200).json({users});
}


export const signup = async (req, res, next)=>{

    const {name, email, password} = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({email});
    } catch (error) {
        
    }

    if(existingUser) { 
        res.status(400).json({message: "User already exist! Login Instead"});
    }
    
    const newUser = new User({
        name,
        email,
        password,
        blogs: []
    });

    try {
       await newUser.save()
    } catch (error) {
        console.log(error)
    }
    return res.status(201).json({newUser})
}


export const login = async(req, res, next) =>{
    const  {email, password} = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({email});
       
        
    } catch (error) {
        return console.log(error)
    }

    if(!existingUser){
        return res.status(404).json({message:"Couldnt Find the user with this email"})
    }

    console.log(password+" "+existingUser.password);
    if(password !== existingUser.password)
    {
       return res.status(404).json({message: "Incorrect Password"});
    }
    return res.status(200).json({message: "Login Successful"});
} 