import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import ScheduleWeek from './pages/ScheduleWeek';
import ExtraOT from './pages/ExtraOT';
import Monitors from './pages/Monitors';
import Holidays from './pages/Holidays';
import OvertimeSheets from './pages/Overtime';
import ExportOvertime from './pages/Export';
import Finalize from './pages/Finalize';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <div>ShiftSage</div> },
      { path: 'schedules/extraot', element: <ExtraOT />},
      { path: 'schedules/monitors', element: <Monitors />},
      { path: 'schedules/holidays', element: <Holidays />},
      { path: 'schedules/overtime', element: <OvertimeSheets />},
      { path: 'schedules/week', element: <ScheduleWeek /> },
      { path: 'export', element: <ExportOvertime />},
      { path: 'schedules/finalize', element: <Finalize />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
