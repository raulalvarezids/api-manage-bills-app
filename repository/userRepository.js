import { userModelManage } from "../models/user.js"
import {generateToken} from '../Auth/generateToken.js'

export class UserRepository{
    
    async createUser (email,password,name) {
        
        const isNew = await userModelManage.userExist(email)        

        if (!isNew){
            
            const hashpassword = await userModelManage.encryptPassword(password)
            const newUser = userModelManage({ name:name,email:email,password: hashpassword } )
            const resdata = await newUser.save()


            const userData = {
                id : resdata._id,
                name:resdata.name,                    
            }
            
            const token = generateToken(userData)
            const dataSend = {
                name:resdata.name,
                token: token
            }

            

            return {status:true,data:dataSend}
        }else{
            return {status:false, data:'Email alrady exist'}
        }        
    }

    async login(email,password){

        const user = await userModelManage.findOne({email})        
        
        if(user){            
            const checkPassword = await userModelManage.comparePassword(password, user.password)

            if(checkPassword){

                const userData = {
                    id : user._id,
                    name:user.name,                    
                }
                
                const token = generateToken(userData)
                const dataSend = {
                    name:user.name,
                    token: token
                }

                return {status:true,message:dataSend}

            }else{
                return {status:false,message:'wrong Password'}
            }
            
        }else{
            return {status:false,message:'Email not found'}
        }

    }
   
}