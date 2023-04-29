import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const main = async () => {
  const users = await prisma.user.findMany();
  const books = await prisma.book.findMany();

  for (let i = 0; i < 10; i++) {
    const user = users[Math.floor(Math.random() * users.length)];
    const book = books[Math.floor(Math.random() * books.length)];

    await prisma.review.create({
      data: {
        comment: faker.lorem.sentence(),
        rating: Math.floor(Math.random() * 5) + 1,
        book: { connect: { id: book.id } },
        user: { connect: { id: user.id } },
      },
    });
  }
};

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
