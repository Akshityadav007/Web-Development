import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.users.create({
    data : {
        email: 'benakshit007@gmail.com',
        password: 'example_password'
    }
  })
}

main()
  .then(async () => {
    console.log("Disconnecting..")
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })