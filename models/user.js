import mongoose from "mongoose";
import  bcrypt from 'bcrypt'

const { Schema } = mongoose;

const UserManageSchema = new Schema({    
    name : {
        type:String,
        required: true
    },   
    email : {
        type : String,
        required: true
    },
    password: {
        type : String,
        required: true
    },    
})

UserManageSchema.statics.encryptPassword = async function (password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

UserManageSchema.statics.userExist = async function (email) {
    const result = await mongoose.model('UserManage').findOne({ email });
    return !!result;
}

UserManageSchema.statics.comparePassword = async function (password, receivedPassword) {
    const same = await bcrypt.compare(password, receivedPassword);
    return !!same;
}


export const userModelManage = mongoose.model('UserManage',UserManageSchema)