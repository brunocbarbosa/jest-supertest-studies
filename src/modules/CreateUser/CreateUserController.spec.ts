/** 
 * @jest-environment ./prisma/prisma-environment-jest
*/

import { app } from '../../app';
import request from 'supertest'

describe('Create User Controller', () => {
  it('Should be able to create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        username: 'test-integration',
        email: 'testIntegration@test.com.br',
        name: 'test Integration'
      });
      
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id')
  });

  it('Should not be able to create an existing user', async () => {
    await request(app)
      .post('/users')
      .send({
        username: 'test-integration-exist',
        email: 'testIntegrationexist@test.com.br',
        name: 'Test Integration Exist'
      });
    
    const res = await request(app)
      .post('/users')
      .send({
        username: 'test-integration-exist',
        email: 'testIntegrationexist@test.com.br',
        name: 'Test Integration Exist'
      });

    expect(res.status).toBe(400)
  })
})