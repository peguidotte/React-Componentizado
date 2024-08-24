import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Sobre from './pages/Sobre.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ConteudoPrincipal from './Componentes/ConteudoPrincipal/index.jsx'

const router = createBrowserRouter([
  {
    path: "/", 
    element:<App/>, 
    children: [
      {index: true, element: <ConteudoPrincipal/>},
      {path: "/sobre", element: <Sobre/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
