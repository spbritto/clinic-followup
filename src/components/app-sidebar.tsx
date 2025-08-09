"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, CalendarClock, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const links = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/patients", label: "Pacientes", icon: Users },
  { href: "/followups", label: "Follow-ups", icon: CalendarClock },
]

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()
  return (
    <nav className="flex flex-col gap-1">
      {links.map(({ href, label, icon: Icon }) => {
        const active = pathname?.startsWith(href)
        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-muted",
              active && "bg-muted font-medium"
            )}
          >
            <Icon className="size-4" />
            {label}
          </Link>
        )
      })}
    </nav>
  )
}

export function SidebarStatic() {
  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:border-r md:bg-background md:p-4">
      <div className="text-xl font-semibold">ClinicFollow</div>
      <Separator className="my-3" />
      <NavLinks />
    </aside>
  )
}

export function SidebarMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-4">
        <div className="text-xl font-semibold">ClinicFollow</div>
        <Separator className="my-3" />
        <NavLinks onNavigate={() => (document as any)?.activeElement?.click?.()} />
      </SheetContent>
    </Sheet>
  )
}
