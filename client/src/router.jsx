import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About/About";
import Navbar from "./components/Navigation/NavBar";
import ErrorPage from "./pages/Error/ErrorPage";
import Pizza from "./pages/Menu/Pizza/Pizza";
import Desserts from "./pages/Menu/Desserts/Desserts";
import Salads from "./pages/Menu/Salads/Salads";
import Drinks from "./pages/Menu/Drinks/Drinks";
import Client from "./pages/Client/Client";
import Admin from "./pages/Admin/Admin";
import Cart from "./pages/Cart/Cart";
import Menu from "./pages/Menu/Menu";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <About />
            },
            {
                path: "/pizza",
                element: <Pizza />
            },
            {
                path: "/menu",
                element: <Menu />
            },
            {
                path: "/desserts",
                element: <Desserts />
            },
            {
                path: "/salads",
                element: <Salads />
            },
            {
                path: "/drinks",
                element: <Drinks />
            },
            {
                path: "/client",
                element: <Client />
            },
            {
                path: "/admin",
                element: <Admin />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "*",
                element: <PageNotFound />
            }
        ]
    }
])