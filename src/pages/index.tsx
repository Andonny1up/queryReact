import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import Layout from "./Layout";
import ErrorDetail from "./ErrorDetail";
import AutorizedUsers from "./AutorizedUsers";

const router = createBrowserRouter([
    {path: "/", element: <Layout/>, errorElement: <ErrorDetail/>,children: [
        {index: true, element: <Home />},
    ]},
    {
        path: "products",
        element: <AutorizedUsers/>, children: [
        {path: "", element: <Product/>},
        {path: ":id", element: <ProductDetail/>},
    ]}
]);

export default router;