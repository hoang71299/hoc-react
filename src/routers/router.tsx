import Home from "@/pages/Home";
import Product from "@/pages/Product";
import LayoutDefault from "../layouts/LayoutDefault"
import { createBrowserRouter } from "react-router";
const Router = createBrowserRouter([
    {
        path:'/',
        element:<LayoutDefault/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/product',
                element:<Product/>
            }
        ]
    }
])
export default Router