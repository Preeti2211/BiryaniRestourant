import { Route, Routes } from "react-router-dom";
import PublicRoute from "./Routes";
import About from "./Pages/Public/About";
import Contact from "./Pages/Public/Contact";
import Services from "./Pages/Public/Services";
import Menus from "./Pages/Public/Menus";
import Home from "./Pages/Public/Home";



export default function Apps(){
    return (
        <>
        <Routes>
            {/* {PublicRoute.map((value)=>(
                <Route
                path={ value.path }
                element ={ value.Element }/>
            )
            )} */}
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/menus" element={<Menus/>}/>


        </Routes>
        
        </>
    );
}