import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ListDetail from "./pages/ListDetail";
import Lists from "./pages/List";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "lists",
                element: <Lists />
            },
            {
                path: "lists/:id",
                element: <ListDetail />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])