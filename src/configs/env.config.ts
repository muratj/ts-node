import path from 'path';
import dotenv from 'dotenv';

const setEnv = () => {
  /* Below logic generates environment file name from node environment 
  ex: .dev.env; .stage.env;
  for production environment file name .env */
  const envFileName = process.env.NODE_ENV
    ? `.${process.env.NODE_ENV}.env`
    : '.env';

  const envFilePath = path.resolve(__dirname, `../../${envFileName}`);
  dotenv.config({ path: envFilePath });
};

export default setEnv;
