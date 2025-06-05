import { logger } from '@repo/utils';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());
app.get('/', (req, res) => {
  logger('Received request');
  res.send('Hey There!');
});

app.listen(8080, () => {
  logger('Server running on port 8080');
});
