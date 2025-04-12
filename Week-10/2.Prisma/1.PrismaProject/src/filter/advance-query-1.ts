// try some where queries
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['info', 'query']
})

async function main() {
  let res = await prisma.users.findMany({
    where: {
        email: {
          endsWith: 'gmail.com',
        },
        todos: {
          // Has atleast one todo completed
          some: {
            done: true,
          },
        },
      },
      include: {
        todos: {
          where: {
            done: true,
          },
        },
      },
    })
    console.log(res);
    // console.log(JSON.stringify(res));    // convert todos
}

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