import { useEffect, useMemo, useState } from 'react'

type Shift = {
  _id: string
  employee: { _id: string; name: string }
  location: string
  start: string // ISO
  end: string   // ISO
}

type ApiResponse = {
  weekStart: string // ISO Monday
  days: { date: string; shifts: Shift[] }[]
}

export default function ScheduleWeek() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const week = useMemo(() => new URLSearchParams(location.search).get('week') ?? '', [])

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/api/schedule?week=${encodeURIComponent(week)}`, { credentials: 'include' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = await res.json()
        setData(json)
      } catch (e:any) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    })()
  }, [week])

  if (loading) return <p>Loading…</p>
  if (error) return <p role="alert">Error: {error}</p>
  if (!data) return <p>No data</p>

  return (
    <div>
      <h1>Schedule for week starting {new Date(data.weekStart).toLocaleDateString()}</h1>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={th}>Employee</th>
              {data.days.map(d => (
                <th key={d.date} style={th}>
                  {new Date(d.date).toLocaleDateString(undefined, { weekday: 'short', month: 'numeric', day: 'numeric' })}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {byEmployee(data.days).map(row => (
              <tr key={row.employeeId}>
                <td style={tdBold}>{row.employeeName}</td>
                {row.cells.map((cell, i) => (
                  <td key={i} style={td} onDoubleClick={() => editCell(cell)}>
                    {cell?.start ? (
                      <div>
                        <div>{time(cell.start)}–{time(cell.end)}</div>
                        <div style={{ fontSize: 12, opacity: 0.7 }}>{cell.location}</div>
                      </div>
                    ) : (
                      <span style={{ opacity: 0.4 }}>—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* TODO: swap this for a modal form */}
    </div>
  )
}

const th = { border: '1px solid #ddd', padding: 8, textAlign: 'left' } as const
const td = { border: '1px solid #eee', padding: 8, minWidth: 140, cursor: 'pointer' } as const
const tdBold = { ...td, fontWeight: 600 }

function byEmployee(days: ApiResponse['days']) {
  // Build a matrix employees x days
  const map = new Map<string, { employeeId: string; employeeName: string; cells: (Shift | null)[] }>()
  const dayCount = days.length
  days.forEach((d, dayIdx) => {
    d.shifts.forEach(s => {
      const key = s.employee._id
      if (!map.has(key)) map.set(key, { employeeId: key, employeeName: s.employee.name, cells: Array(dayCount).fill(null) })
      const row = map.get(key)!
      row.cells[dayIdx] = s
    })
  })
  return Array.from(map.values())
}

function time(iso: string) {
  return new Date(iso).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

function editCell(cell: Shift | null) {
  // For now, just log. Next step: open a modal and POST to /api/schedule/assign
  console.log('Edit cell', cell)
}
