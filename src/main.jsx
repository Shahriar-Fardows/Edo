import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, } from "react-router-dom";
import Routes from './Routes/Routes';
<<<<<<< HEAD
import Context from './Context/Context';
=======
>>>>>>> dev


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< HEAD
    <Context>
    <RouterProvider router={Routes} />
    </Context>
=======
    <RouterProvider router={Routes} />
>>>>>>> dev
  </React.StrictMode>,
)
