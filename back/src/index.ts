import express, { Express } from 'express';
import cors from 'cors';
import dogs from './routes/dogs';

const port: number = 3001;
const app: Express = express();

app.use(cors());

app.use('/dogs', dogs);

app.listen(port, () => console.log(`Back listening at http://localhost:${port}`));
