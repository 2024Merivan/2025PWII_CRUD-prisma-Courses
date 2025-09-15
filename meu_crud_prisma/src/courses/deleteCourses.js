import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const course = await prisma.course.delete({
    where: { id: 3 }
  });
  console.log("Curso deletado:", course);
}

main().finally(() => prisma.$disconnect());
