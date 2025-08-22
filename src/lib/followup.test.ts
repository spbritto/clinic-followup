import { computeStatus, nextContactFrom } from "./followup"

console.log("== quick check ==")
const today = new Date()
const yesterday = new Date(Date.now() - 24*60*60*1000)
const tomorrow  = new Date(Date.now() + 24*60*60*1000)

console.log("OVERDUE ->", computeStatus(yesterday))
console.log("DUE     ->", computeStatus(today))
console.log("OK      ->", computeStatus(tomorrow))

const last = new Date("2025-08-20T12:00:00Z")
console.log("nextContactFrom(+7d) ->", nextContactFrom(last, 7))
