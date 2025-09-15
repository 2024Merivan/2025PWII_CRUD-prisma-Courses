import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const course = await prisma.course.findUnique({
    where: { id: 1 }
  });
  console.log("Curso encontrado:", course);
}

main().finally(() => prisma.$disconnect());
