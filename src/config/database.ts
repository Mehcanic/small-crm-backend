// TODO Setup PostgreSQL database connection using pg package.
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});


export default prisma;