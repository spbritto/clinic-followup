import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { SidebarMobile, SidebarStatic } from "@/components/app-sidebar"

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        <SidebarStatic />
        <main className="flex-1">
          <div className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center gap-2 px-4">
              <SidebarMobile />
              <div className="text-sm text-muted-foreground">
                {session?.user?.email ? `Logado como ${session.user.email}` : "Não autenticado"}
              </div>
              <div className="ml-auto text-sm">{session?.user?.role}</div>
            </div>
          </div>
          <div className="p-4">{children}</div>
        </main>
      </div>
    </div>
  )
}
