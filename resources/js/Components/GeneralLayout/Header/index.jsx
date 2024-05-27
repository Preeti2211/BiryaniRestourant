import React, { useState } from "react";
import {
  AppBar,
  Badge,
  Box,
  Drawer,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Links } from "./Constant";
import BBkLogo from '../../../Pages/Images/logo.png';


const Header = () => {

  const [mobileopen, setMoobileopen] = useState(false);

  const handledrwaerToggle = () => {
    setMoobileopen(!mobileopen);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const drawer = (
    <Box onclick={handledrwaerToggle} sx={{ textAlign: "center" }}>
      <>
        <Typography
          color={"goldenrod"}
          variant="h6"
          component={"div"}
          sx={{ flexGrow: 1 }}
        >
          {/* <img src={BBkLogo}/> */}
          Biryani House
        </Typography>

        <ul className="mobile-navigationUl">
          {/* {
            Links.map(item=>(
              <li>
                  <Link href={item.to}>{item.label}</Link>
              </li>
            ))
          } */}
         <li className={isActive("/")}>
                    <Link href="/" className={isActive("/")}>Home</Link>
                  </li>
                  <li className={isActive("/menus")}>
                    <Link href="/menus" className={isActive("/menus")}>Menu</Link>
                  </li>
                  <li className={isActive("/about")}>
                    <Link href="/about" className={isActive("/about")}>About</Link>
                  </li>
                  <li className={isActive("/contact")}>
                    <Link href="/contact" className={isActive("/contact")}>Contact</Link>
                  </li>
                  <li className={isActive("/services")}>
                    <Link href="/services" className={isActive("/services")}>Services</Link>
                  </li>
        </ul>
      </>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component="nav" sx={{ bgcolor: "white",color:"black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handledrwaerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1 }}
            >
              <img src={BBkLogo} width="50px" height="50px"/>
             Biryani House
          </Typography>
          <Box>
        <Box sx={{ display: "flex", justifyContent: "center",marginBottom:"20px",background:"lightblu" }}>
          <Box sx={{ display: { xs: "none", sm: "block", } }}>
              <ul className="navigationUl">
                {/* {
                  Links.map(item=>(
                    <li>
                        <Link href={item.to}>{item.label}</Link>
                    </li>
                  ))
                } */}
                  <li className={isActive("/")}>
                    <Link href="/" className={isActive("/")}>Home</Link>
                  </li>
                  <li className={isActive("/menus")}>
                    <Link href="/menus" className={isActive("/menus")}>Menu</Link>
                  </li>
                  <li className={isActive("/about")}>
                    <Link href="/about" className={isActive("/about")}>About</Link>
                  </li>
                  <li className={isActive("/contact")}>
                    <Link href="/contact" className={isActive("/contact")}>Contact</Link>
                  </li>
                  <li className={isActive("/services")}>
                    <Link href="/services" className={isActive("/services")}>Services</Link>
                  </li>
              </ul>
            </Box>
        </Box>
      </Box>
        
          </Toolbar>

        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileopen}
            onClose={handledrwaerToggle}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            {drawer}
          </Drawer>
        </Box>
       <Box sx={{ p:1 }}> <Toolbar/></Box>
      </Box>
      
    </>
  );
};

export default Header;
