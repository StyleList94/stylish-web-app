import express from 'express';
import dotenv from 'dotenv';

import type { Express, Request, Response } from 'express';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

app.get('/', (req: Request, res: Response) => {
  res.send('Stylish Web App');
});

app.listen(port, () => {
  console.log('Stylish Wep App');
  console.log(`Server is running at http://localhost:${port}`);
});
