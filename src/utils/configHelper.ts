import { config } from 'dotenv';

config();

export const tokenSecret = (): string => {
  return process.env.TOKEN_KEY || '';
};
