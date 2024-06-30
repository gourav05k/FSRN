import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cart from './components/Cart.jsx'
import Error from './components/Error.jsx'
import Body from './components/Body.jsx'
import RestaurantDetails from './components/RestaurantDetails.jsx'
import ParentAbout from './components/ParentAbout.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Memo from './components/Memo.jsx'
import Login from './components/Login.jsx'
import About from './components/About.jsx'

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/search',
                element:<Body />
            },
            {
                path:'/offers',
                element:<Body/>
            },
            {
                path:'/parentAbout',
                element:<About/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                // dynamic routing
                path:'/restaurant/:resId',
                element:<RestaurantDetails/>
            },
            {
                path:'/parentAbout',
                element:<ParentAbout/>
            },
            {
                path:'/memo',
                element:<Memo/>
            },


        ]
    }

])

ReactDOM.createRoot(document.getElementById('root')).render(
    // this will render the whole above router that we created with name appRouter
    <RouterProvider router={appRouter}></RouterProvider>
)
