import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const course = await prisma.course.update({
    where: { id: 1 },
    data: { title: "Node.js + Prisma Avançado" }
  });
  console.log("Curso atualizado:", course);
}

main().finally(() => prisma.$disconnect());
