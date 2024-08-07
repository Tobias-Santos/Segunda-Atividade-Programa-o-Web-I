import {PrismaClient,Technology,User} from '@prisma/client';

const prisma = new PrismaClient();

export {prisma,Technology,User}