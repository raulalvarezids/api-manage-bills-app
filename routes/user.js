import {Router} from 'express'
import { userController } from '../dependencies/depen.js'

export const userRouter = Router()

userRouter.post('/',userController.createUser);
userRouter.post('/login',userController.login)
