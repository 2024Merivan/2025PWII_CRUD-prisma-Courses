import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const course = await prisma.course.create({
    data: {
      title: "Node.js com Prisma avançado",
      description: "Aprendendo CRUD com Prisma Client",
      duration: 30
    }
  });
  console.log("Curso criado:", course);
}

main().finally(() => prisma.$disconnect());
