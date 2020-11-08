const {prisma} = require('./generated/prisma-client')

async function main() {
  await prisma.createUser({
    name: 'Christovam Munhoz',
    email: 'chris@email.com',
    password: '123456'
  })

  const users = await prisma.users()

  console.log('Users: ', users)
}

main().catch(err => console.error(err))