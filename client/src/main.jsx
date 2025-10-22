import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import ScheduleWeek from './ScheduleWeek';
import ExtraOT from './ExtraOT';
import Monitors from '';
import Holidays from '';
import OvertimeSheets from '';
import ExportOvertime from '';
import Finalize from '';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <div>ShiftSage</div> },
      { path: 'schedules/extraot', element: <ExtraOT />},
      
      { path: 'schedules/week', element: <ScheduleWeek /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
