import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Error } from './pages/error.tsx'
import { Today } from './pages/today.tsx'
import { Upcoming } from './pages/upcoming.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            { path: '/today', element: <Today /> },
            { path: '/upcoming', element: <Upcoming /> },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} fallbackElement />
    </React.StrictMode>
)
