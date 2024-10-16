import * as dotenv from 'dotenv';

dotenv.config();

export const envs = {
  JWT: {
    SECRET: process.env.JWT_SECRET,
  },
};
