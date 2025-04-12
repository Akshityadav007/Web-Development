// delete all completed todos of user 1
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.users.update({
    where: {
        id: 1
    },
    data: {
        todos: {
            deleteMany: {
                done: true
            }
        }
    }
  })
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