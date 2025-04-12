// try some limit/offset queries
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['info', 'query']
})

async function main() {
  let res = await prisma.todos.findMany({
    take: 2,    // LIMIT 2   
    skip: 2     // OFFSET 2
  })
    console.log(res);
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