import { SidebarMobile, SidebarStatic } from "@/components/app-sidebar"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        <SidebarStatic />
        <main className="flex-1">
          {/* Topbar */}
          <div className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center gap-2 px-4">
              <SidebarMobile />
              <div className="text-sm text-muted-foreground">Logado como</div>
              <div className="ml-auto flex items-center gap-3">
                {/* Placeholder de usuário/menus */}
                <div className="text-sm">Usuário</div>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="p-4">{children}</div>
        </main>
      </div>
    </div>
  )
}
