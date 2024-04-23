import { UserController } from "../controller/userController.js";
import { UserRepository } from "../repository/userRepository.js";


const userRepository = new UserRepository()
export const userController = new UserController(userRepository)