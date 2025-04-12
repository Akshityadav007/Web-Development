import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const users = await prisma.users.findMany({});    // to get all the users
    console.log(users);
    const user = await prisma.users.findUnique({
        where: {
            id: 1
        },
        include: {
            todos: true
        }
    });                                           // to get details of a single user
    console.log(user);
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