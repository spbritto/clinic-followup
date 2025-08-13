import "next-auth"
import "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email?: string | null
      name?: string | null
      role: "ADMIN" | "PRACTITIONER" | "ASSISTANT"
      clinicId: string
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: string
    role: "ADMIN" | "PRACTITIONER" | "ASSISTANT"
    clinicId: string
  }
}
