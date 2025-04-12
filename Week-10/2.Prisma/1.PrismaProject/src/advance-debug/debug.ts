/// https://github.com/prisma/prisma/issues/5026

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: [
      {
        emit: "event",
        level: "query",
      },
    ],
  })

async function main() {
    const users = await prisma.users.findMany({
        take: 2,
    });
};

main()
  .then(async () => {
    console.log("Disconnecting..");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })


// prisma events to get the values
prisma.$on("query", async (e) => {
    console.log(`${e.query} ${e.params}`)
});