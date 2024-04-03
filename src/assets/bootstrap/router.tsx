import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home";
import Error from "../../screens/Error";

const router  = createBrowserRouter([
    {
        path:'/',
        element: <Home />
    },
    {
        path:'*',
        element: <Error />
    }
])

export default router