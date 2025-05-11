import { PrismaClient } from '../generated/prisma';

let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // Ensure the prisma instance is reused during hot-reloading
  // Otherwise, a new client will be created on every reload
  globalThis.prisma = globalThis.prisma || new PrismaClient();
  prisma = globalThis.prisma;
}

export default prisma;
