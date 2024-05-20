
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './page/Home'
import Archive from './page/Archive'
import Category from './page/Category'
import About from './page/About'
import Contact from './page/Contact'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element: <Home/>,
        },
        {
          path:"/archive",
          element: <Archive/>
        },
        {
          path:"/category",
          element: <Category/>
        },
        {
          path:"/about",
          element: <About/>
        },
        {
          path:"/contact",
          element: <Contact/>
        },
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
