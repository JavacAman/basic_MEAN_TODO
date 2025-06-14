const User = require('../models/users');

exports.getUsers = async (req,res)=>{
    try{
        const result = await User.find({})

        if(result){
            res.status(200).json({result})
        }
        else{
            res.status(404).json({msg : "Records not found" })
        }
    }
    catch(e){
        console.log(e)
        res.status(500).json({msg : "Internal Server Error"})
    }
}


exports.postUsers = async (req,res)=>{
    try{

        const {firstName, lastName, email, contact, gender, skill} = req.body;
        const newForm = new User({
            firstName,
            lastName,
            email,
            contact,
            gender,
            skill
        })

        await newForm.save();
        res.status(201).json({msg: "User Created Successfully", data: req.body})
    }
    catch(e){
        console.log(e)
        res.status(500).json({msg : "Internal Server Error"})
    }
}

exports.putUsers = async (req,res)=>{
    try{

        const {id, firstName, lastName, email, contact, gender, skill} = req.body;
        const user = await User.findByIdAndUpdate({_id:id},{
            $set:{
                firstName:firstName,
                lastName:lastName,
                email:email,
                contact:contact,
                skill:skill
            }
        },{ new:true })
        res.status(200).json({msg: "User Updated Successfully", user})
    }
    catch(e){
        console.log(e)
        res.status(500).json({msg : "Internal Server Error"})
    }
}


exports.deleteUsers = async (req,res)=>{
    try{

        const {id} = req.params;
        const result = await User.findByIdAndDelete({_id:id},
)
        res.status(200).json({msg: "User Deleted Successfully", result})
    }
    catch(e){
        console.log(e)
        res.status(500).json({msg : "Internal Server Error"})
    }
}

exports.getUserById = async (req,res)=>{
    try{
        const {id} = req.params;
        const result = await User.findById({_id:id})

        if(result){
            res.status(200).json({result})
        }
        else{
            res.status(404).json({msg : "Record not found" })
        }
    }
    catch(e){
        console.log(e)
        res.status(500).json({msg : "Internal Server Error"})
    }
}