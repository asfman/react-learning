import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import Root from './routes/root'
import { routes } from './constants'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: routes
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
