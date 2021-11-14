import { PrismaUserRepository } from "../../repositories/prisma/PrismaUserRepository"
import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService";


export const CreateUserFactory = () => {
  const userRepository = new PrismaUserRepository();
  const createUser = new CreateUserService(userRepository);
  const createUserController = new CreateUserController(createUser);
  return createUserController;
}