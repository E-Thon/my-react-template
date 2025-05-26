import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ListDetail from "./pages/ListDetail";
import Lists from "./pages/Lists";
import NotFound from "./pages/NotFound";
import { getList, getLists } from "./utilities/typicode";
import Loading from "./components/loading/Loading";
import { ErrorBoundary } from "./components/error/ErrorBoundary";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>,
        hydrateFallbackElement: <Loading />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "lists",
                element: <Lists />,
                loader: getLists,
            },
            {
                path: "lists/:id",
                element: <ListDetail />,
                loader: getList,
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

export default router



