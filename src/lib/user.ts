import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"

export async function requireUser() {
  const session = await getServerSession(authOptions)
  if (!session?.user) redirect("/sign-in")
  return {
    userId: session.user.id,
    clinicId: session.user.clinicId,
    role: session.user.role,
    email: session.user.email ?? "",
  }
}
