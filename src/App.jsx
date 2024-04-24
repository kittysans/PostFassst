import React from 'react'

// page
import HomePage from '../pages/HomePage'
import Post from '../pages/Post'

// router
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
  },
  {
    path: '/Post',
    element: <Post/>,
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
