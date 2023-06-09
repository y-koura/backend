import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  for (let i = 0; i < 10; i++) {
    await prisma.book.create({
      data: {
        title: faker.lorem.words(3),
        author: faker.name.fullName(),
        publishedDate: faker.date
          .between('2021-01-01', '2023-01-01')
          .toISOString(),
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

// npx ts-node prisma/seed.ts
// seed通らない場合npx prisma migrate dev --name book
