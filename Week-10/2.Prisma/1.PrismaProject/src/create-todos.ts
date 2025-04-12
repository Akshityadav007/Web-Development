import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// const prisma = new PrismaClient({log: ['info', 'query', 'error']})       use this if you need logging, keep adding the parameter according to the level of logging you need

async function main() {
  await prisma.todos.create({
    data: {
     title: "Do daily DSA question.",
     description: "Complete atleast 1 leetcode question.",
     user: {
        connect: {
            id: 1
        }
     }
    }
  })
}

main()
  .then(async () => {
    console.log("Todo created.");
    console.log("disconnecting.. ");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })