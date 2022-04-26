import * as React from "react";
import { Outlet } from "react-router-dom";
import {Link, useLocation, useNavigate} from "react-router-dom"
import { ThemeProvider } from "@emotion/react";
import theme from "../../../../Styles/ThemConfig";

import { Box, Container, Grid, Typography, Button, Stack } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
// import MenuIcon from '@mui/icons-material/Menu';
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";


import {
  Nav,
  NavLink,
  // Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';


const AppNavBar = () => {
  return (
    <>
    
      <Nav>
        {/* <Bars /> */}
        <NavMenu>
          <NavLink to='/' >
            Home
          </NavLink>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
        <NavLink to='/products' >
        Products
          </NavLink>
        <NavLink to='/events' >
        Events
          </NavLink>
          <NavLink to='/donateBlood' >
            Blood Donation
          </NavLink>
        </Stack>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
        
        <Outlet />
      {/* </ThemeProvider> */}
    </>
  );
};
export default AppNavBar;
