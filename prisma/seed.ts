import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

const db = new PrismaClient()

async function main() {
  const clinic = await db.clinic.upsert({
    where: { id: "clinic-example" },
    update: {},
    create: { 
      id: "clinic-example",
      name: "Clínica Exemplo" 
    },
  })

  const passwordHash = await bcrypt.hash("admin123", 10)

  await db.user.upsert({
    where: { email: "admin@exemplo.com" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@exemplo.com",
      passwordHash,
      role: "ADMIN",
      clinicId: clinic.id,
    },
  })

  console.log("Seed OK -> admin@exemplo.com / admin123")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
