import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.book.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.review.deleteMany({});
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
