import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  
  {
    name: "محمد",
    email: "mamad@gmail.com",
    username: "mamad",
    password: "123456",
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({data: u});
  }
}

main().then(() => console.log("done"))
