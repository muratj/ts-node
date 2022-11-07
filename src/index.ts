import express from 'express';
import setEnv from './configs/env.config';

setEnv();

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello World!!!!');
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
