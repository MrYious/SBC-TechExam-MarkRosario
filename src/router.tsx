import App from "./App";
import Home from "./pages/Home/Home";
import Recipe from "./pages/Recipe/Recipe";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "recipe/:title",
                element: <Recipe />
            }
        ]
    }
])