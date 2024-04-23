import { verifyToken } from "../Auth/verifyToken.js";

export const authenticate = () => (req, res, next) => { 

    let token = req.headers.authorization;
    
    if (token) {     
            const decoded = verifyToken(token[1]);
                
            if (decoded) {
                req.user = { ...decoded };                
                next();
            } else {
                res.status(401).json({
                    message: 'No autorizado'
                })
            }
                
    } else {
        res.status(401).json({
            message: 'No autorizado'
        })
    }
}
