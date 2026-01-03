import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'
import { TemplatePage } from '../pages/TemplatePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/preview/:templateId',
    element: <TemplatePage mode="preview" />,
  },
  {
    path: '/i/:weddingSlug',
    element: <TemplatePage mode="live" />,
  },
])

export const AppRouter = () => <RouterProvider router={router} />

export default AppRouter
