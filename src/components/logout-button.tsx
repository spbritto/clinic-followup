"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export function LogoutButton() {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => signOut({ callbackUrl: "/sign-in" })}
      className="flex items-center gap-2"
    >
      <LogOut className="h-4 w-4" />
      Sair
    </Button>
  )
}
