export type FollowUpStatus = "OK" | "DUE" | "OVERDUE"

/** Normaliza para meia-noite (comparação por dia, não por hora) */
function startOfDay(d: Date) {
  const x = new Date(d)
  x.setHours(0, 0, 0, 0)
  return x
}

/** Retorna o status com base em nextContactAt vs hoje */
export function computeStatus(nextContactAt: Date | null | undefined, now = new Date()): FollowUpStatus {
  if (!nextContactAt) return "OK"
  const next = startOfDay(nextContactAt)
  const today = startOfDay(now)
  if (next.getTime() < today.getTime()) return "OVERDUE"
  if (next.getTime() === today.getTime()) return "DUE"
  return "OK"
}

/** Soma cadenceDays a lastContactAt para projetar o próximo contato */
export function nextContactFrom(lastContactAt: Date | null | undefined, cadenceDays: number): Date | null {
  if (!lastContactAt) return null
  const d = new Date(lastContactAt)
  d.setDate(d.getDate() + (cadenceDays || 7))
  return d
}
