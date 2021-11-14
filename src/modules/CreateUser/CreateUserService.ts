import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepositories";

interface IUserRequest{
  email: string;
  username: string;
  name: string;
}

class CreateUserService{
  constructor(private userRepository: IUsersRepository){}

  async execute({email, username, name}: IUserRequest){
    const userAlreadyExists = await this.userRepository.exists(username);

    if(userAlreadyExists) throw new Error('User already exists');

    const userCreate = User.create({ email, username, name });
    const user = await this.userRepository.create(userCreate);
    return user;
  }
}

export { CreateUserService };