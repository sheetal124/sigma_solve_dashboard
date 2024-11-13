import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { FileRoutes } from './pages/core/utilities/Core.const.ts'
import Dashboard from './pages/components/Dashboard.tsx'
import Agencies from './pages/components/Agencies.tsx'
const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to={FileRoutes.Dashboard} />
      },
      {
        path: FileRoutes.Dashboard,
        element: <Dashboard />
      },
      {
        path: FileRoutes.Agencies,
        element: <Agencies />
      }
    ]
  },
  {
    path: '**',
    element: <p>404 page not found</p>
  }
]
const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
