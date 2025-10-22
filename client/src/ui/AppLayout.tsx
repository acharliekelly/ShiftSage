import { Outlet, Link } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className="min-h-screen">
      <nav style={{ padding: 12, borderBottom: '1px solid #ddd' }}>
        <Link to="/parking/home">ShiftSage</Link>
        <Link to="/parking/extraOT">ExtraOT</Link>
        <Link to="/parking/edit">Monitors, Shifts &amp; Time Off</Link>
        <Link to="/parking/holiday">Holidays</Link>
        <Link to="/parking/overtime">Overtime Sheets</Link>
        <Link to="/parking/schedule">Weekly Schedule</Link>
        <Link to="/parking/exportovertime">Export Overtime</Link>
        <Link to="/parking/finalize">Finalize</Link>
        <Link to="/parking/logout">Logout</Link>
      </nav>
      <main style={{ padding: 16 }}>
        <Outlet />
      </main>
    </div>
  )
}
