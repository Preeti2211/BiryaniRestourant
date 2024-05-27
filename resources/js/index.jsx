import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Apps from './Apps';
import Header from './Components/GeneralLayout/Header';
import Footer from './Components/GeneralLayout/Footer';
import Layout from './Pages/Public/Layout';
import Home from "./Pages/Public/Home";
import About from './Pages/Public/About';
import Contact from './Pages/Public/Contact';
import Services from './Pages/Public/Services';
import Menus from './Pages/Public/Menus';



const container = document.getElementById('app-react');
const root = ReactDom.createRoot(container);
export default function Index(){
    <h1>hello</h1>
}
root.render(
   <>
    <Header/>
    <Layout>
    <BrowserRouter>
        {/* <Apps/> */}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/menus" element={<Menus/>}/>


        </Routes>
    </BrowserRouter>
    </Layout>
    <Footer/>
   </>
);
