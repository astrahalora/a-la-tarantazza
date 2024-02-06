import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About/About";
import Navigation from "./components/Navigation/Navigation";
import ErrorPage from "./pages/Error/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigation />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <About />
            }
        ]
    }
])