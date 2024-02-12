import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About/About";
import Navbar from "./components/Navigation/NavBar";
import ErrorPage from "./pages/Error/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <About />
            }
        ]
    }
])