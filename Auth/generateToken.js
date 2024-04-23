import jwt from 'jsonwebtoken'

export const generateToken =  (payload) => { 
    console.log(payload)
    const secret =process.env.SECRET
    const expiresIn = 3600;
    const token = jwt.sign(payload,secret, {expiresIn} )
    return token
 }
