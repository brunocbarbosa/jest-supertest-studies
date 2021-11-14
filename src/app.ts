import express, { NextFunction, Request, Response } from 'express';

import { routes } from './routes/routes';
import 'dotenv/config';

const app = express();

app.use(express.json());

app.use(routes);

app.use(
  (err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error){
      return res.status(400).json({
        message: err.message
      });
    }

    return res.status(500).json({
      status: 'error',
      message: `Internal server error - ${err}`
    });
  }
);

export { app }