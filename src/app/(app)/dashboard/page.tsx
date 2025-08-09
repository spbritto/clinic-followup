import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  const cards = [
    { title: "Pacientes Ativos", value: "—" },
    { title: "Follow-ups hoje", value: "—" },
    { title: "Overdue", value: "—" },
  ]
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((c) => (
        <Card key={c.title}>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">{c.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{c.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
