import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const courses = await prisma.course.findMany();
  console.log("Todos os cursos:", courses);
}

main().finally(() => prisma.$disconnect());
