import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browsebooks from './components/browsebooks.jsx'
import Addbook from './components/addbook.jsx'
import Body from './components/body.jsx'
import Bookdetails from './components/bookdetails.jsx'
import Category from './components/category.jsx'
import Error from './components/error.jsx'


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/browsebooks",
        element: <Browsebooks />
      },
      {
        path: "/addbook",
        element: <Addbook />
      },
      {
        path: "/book/:bookid",
        element: <Bookdetails />
      },
      {
        path: "/books/:category",
        element: <Category />
      }
    ],
    errorElement:<Error />
  },

  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
