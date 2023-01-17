// import { useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import Avatar from "@mui/material/Avatar";

const ProSidebar = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, collapsed} = useProSidebar();

  const menuItems = [
    {
      "name" : "Dashboard",
      "icon" : <HomeOutlinedIcon />,
      "to" : "/dashboard"
    },
    {
      "name" : "DCGP",
      "icon" : <ClassOutlinedIcon />,
      "to" : "/dcgp"
    },
    {
      "name" : "Designs",
      "icon" : <BrushOutlinedIcon />,
      "to" : "/dashboard"
    },
    {
      "name" : "Orders",
      "icon" : <ReceiptLongOutlinedIcon />,
      "to" : "/orders"
    },
    {
      "name" : "Providers",
      "icon" : <PeopleOutlinedIcon />,
      "to" : "/users"
    },
    {
      "name" : "Tickets",
      "icon" : <ConfirmationNumberOutlinedIcon />,
      "to" : "/users"
    },
    {
      "name" : "Users",
      "icon" : <PersonOutlineOutlinedIcon />,
      "to" : "/users"
    },
  ];

  

  return (
    <Sidebar 
      backgroundColor={ (theme.palette.mode === 'dark') ? `${colors.midnight[400]} !important` : `${colors.alabaster[800]} !important` } 
      style={{ borderRight: 0 }}
    >
      <Menu
        rootStyles={{
          '.ps-menu-button:hover': {
            backgroundColor: (theme.palette.mode === 'dark') ? `${colors.midnight[300]} !important` : `${colors.alabaster[600]} !important`
          }
        }}
      >
        {/* LOGO & MENU ICON */}
        <MenuItem 
          onClick={() => collapseSidebar()}
          icon={collapsed ? <MenuOutlinedIcon/> : undefined}
          style={{
            margin: "10px 0 20px 0",
          }}
        >
          {!collapsed && (
            <Box display="grid">
              <Typography variant="h3" style={{ float: "left"}}>
                ADMO
                <IconButton style={{ float: "right"}}>
                  <MenuOutlinedIcon/>
                </IconButton>
              </Typography>
            </Box>
          )}
        </MenuItem>
        {/* USER */}
        {!collapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center">
              <Avatar alt="profile-user" src="../../assets/user.jpeg" sx={{ width: 66, height: 66 }} />
            </Box>
            <Box textAlign="center">
              <Typography variant="h2" color={colors.alabaster[400]} fontWeight="bold" sx={{ m: "10px 0 0 0"}}>Alejandro</Typography>
              <Typography variant="h5" color={colors.persionGreen[500]}>Admin</Typography>
            </Box>
          </Box>
        )}

        {collapsed && (
          <Box display="flex" justifyContent="center" mb={2.5}>
            <Avatar alt="profile-user" src="../../assets/user.jpeg" sx={{ width: 40, height: 40 }} />
          </Box>
        )}


        {/* MENU ITEMS */}
        { menuItems.map((item, index) => (
          <MenuItem key={index} icon={item.icon}  routerLink={<Link to={item.to} />}>{item.name}</MenuItem>
        )) }

      </Menu>
    </Sidebar>
  )
}

export default ProSidebar;
