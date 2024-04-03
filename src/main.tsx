import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/tailwind.css'

import router from './assets/bootstrap/router.tsx'

import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
