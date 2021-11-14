# Jest and Supertest Studies

- This is a API to study tests with Jest and Supertest, using Prisma and Postgres.

## Dependences

    "devDependencies": {
      "@types/express": "^4.17.13",
      "@types/jest": "^27.0.2",
      "@types/supertest": "^2.0.11",
      "@types/uuid": "^8.3.1",
      "jest": "^27.3.1",
      "prisma": "^3.4.2",
      "supertest": "^6.1.6",
      "ts-jest": "^27.0.7",
      "ts-node-dev": "^1.1.8",
      "typescript": "^4.4.4",
      "uuid": "^8.3.2"
    }  
      "dependencies": {
        "@prisma/client": "^3.4.2",
        "dotenv": "^10.0.0",
        "dotenv-cli": "^4.1.0",
        "express": "^4.17.1",
        "express-async-errors": "^3.1.1",
        "pg": "^8.7.1"
    }

## Usage
- Create `.env` and `.env.test` coping from `.env.sample` to create env files and configure your Postgres infos.
- Tap `yarn` or `npm install` to install all dependeces.
- Tap `yarn prisma migrate dev` or `npm run prisma migrate dev` to create the migrations

After create all dependences, env files and databases, you can run the api with `yarn dev` or `npm run dev` and you can run the tests with `yarn test` or `npm run test`. 