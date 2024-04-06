import UserModel from '../models/UserModel.js';


//Get Registers

export const getAllUsers = async (req, res) => {
    try{
    const user=await UserModel.findAll()
    res.json(user)
    } catch (error){
        res.json({message: error.message});
    }
}

// Get register

export const getUser = async (req, res) => {
    try{
    const user =await UserModel.findAll({
        where:{ name:req.params.name}
    })
    res.json(user[0])
    } catch (error){
        res.json({message: error.message});
    }
}

// Create register

export const createUser = async (req, res) => {
    try{
    await UserModel.create(req.body)
    res.json({
        "message":"User created"
    })
    } catch (error){
        res.json({message: error.message});
    }
}

// Update Register

export const updateUser = async (req, res) => {
    try{
    await UserModel.update(req.body, {
        where: {name: req.params.name}
    })
    res.json({
        "message":"User updated"
    })
    } catch (error){
        res.json({message: error.message});
    }
}
