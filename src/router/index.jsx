import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from '../App'

import Home from '@/pages/Home'
import About from '@/pages/About'
import IntroductionPage from '../pages/IntroductionPage'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/introduction/:biz', element: <IntroductionPage /> },
    ]
  },
  {
    path: '*', element: <Navigate to="/" />
  }
])

export default routers