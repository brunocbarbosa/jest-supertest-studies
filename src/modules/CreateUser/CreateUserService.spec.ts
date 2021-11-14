import { User } from "../../entities/User";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { IUsersRepository } from "../../repositories/IUsersRepositories";
import { CreateUserService } from "./CreateUserService"

describe('Create user', () => {
  let usersRepository: IUsersRepository
  let createUserService: CreateUserService

  beforeAll(() => {
    usersRepository = new UsersRepositoryInMemory();
    createUserService = new CreateUserService(usersRepository);

  })

  it('Should be able to create a user', async () =>{
    
    const userData: User = {
      name: 'Test Name',
      email: 'test@test.com.br',
      username: 'testusername'
    }

    const user = await createUserService.execute(userData);

    console.log(user)

    expect(user).toHaveProperty('id');
    expect(user.username).toBe('testusername')
  });

  it('Should not able to create an existing user', async () => {
    const userData: User = {
      name: 'Test Existing Name',
      email: 'testexisting@test.com.br',
      username: 'testexistingusername'
    }

    await createUserService.execute(userData);

    await expect(createUserService.execute(userData)).rejects.toEqual(
      new Error('User already exists')
    )
  });
})