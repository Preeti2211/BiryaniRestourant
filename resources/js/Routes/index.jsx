import Home from "../Pages/Public/Home";
import About from "../Pages/Public/About";
import Contact from "../Pages/Public/Contact";
import Services from "../Pages/Public/Services";
// import Menus from "../Pages/Public/Menus";

const PublicRoute = [
    {path:"/" , Element: <Home/>},
    {path:'/about',Element:<About/>},
    {path:'/contact',Element:<Contact/>},
    {path:'/services',Element:<Services/>},
    // {path:'/menu',Element:<Menus/>},
]

export default PublicRoute;
