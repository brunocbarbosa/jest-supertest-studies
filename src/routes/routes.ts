import { Router } from 'express';
import { CreateUserFactory } from '../modules/CreateUser/CreateUserFactory';

const routes = Router();

routes.post('/users', (req, res) => 
  CreateUserFactory().handle(req, res)
);

export { routes }