import express from 'express';
import cors from 'cors';
import { logger } from '@repo/utils';

const app = express();

app.use(cors());
app.get('/', (req, res) => {
  logger('Received request');
  res.send('Hey There!');
});

app.listen(8080, () => {
  logger('Server running on port 8080');
});