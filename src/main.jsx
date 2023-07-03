import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//create the root layout component
import { createBrowserRouter,RouterProvider, } from 'react-router-dom'

//set <Root> as the route's element
import Login from './Login/index'

//set the <ErrorPage> as the errorElement on the root route
import ErrorPage from './error-page'

//import the product component
import Products from './Products'

// The main.jsx file is the entry point.
//Creating and rendering a browser router 
//This first route is what we often call the "root route" since the rest of our routes will render inside of it.

const router = createBrowserRouter([{
  path:"/",
  //setting the router as the root route's element
  element:<Login/>,

  //setting the <ErrorPage> as the errorElement on the root route
  errorElement:<ErrorPage/>,

},
{
    path:"products/:/productId",
    element:<Products/>
}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
