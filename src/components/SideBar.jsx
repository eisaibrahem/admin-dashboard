/* eslint-disable react/prop-types */
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutlineOutlined,
  HomeOutlined,
  MapOutlined,
  PeopleOutlineOutlined,
  Person2Outlined,
  PieChartOutlineOutlined,
  ReceiptOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import { Avatar, Box, Tooltip, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
  // @ts-ignore
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

// eslint-disable-next-line react/prop-types
export default function SideBar({ open, setOpen, theme }) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const Arrar1 = [
    { text: "Dashboard", icon: <HomeOutlined />, path: "/" },
    { text: "Manage Team", icon: <PeopleOutlineOutlined />, path: "/team" },
    { text: "Contacts Info", icon: <ContactsOutlined />, path: "/contacts" },
    { text: "Invoices Balances", icon: <ReceiptOutlined />, path: "/invoices" },
  ];
  const Arrar2 = [
    { text: "Profile Form", icon: <Person2Outlined />, path: "/form" },
    { text: "Calendar", icon: <CalendarTodayOutlined />, path: "/calender" },
    { text: "FAQ Page", icon: <HelpOutlineOutlined />, path: "/faq" },
  ];
  const Array3 = [
    { text: "Bar Chart", icon: <BarChartOutlined />, path: "/bar" },
    { text: "Pie Chart", icon: <PieChartOutlineOutlined />, path: "/pie" },
    { text: "Line Chart", icon: <TimelineOutlined />, path: "/line" },
    { text: "Geography Chart", icon: <MapOutlined />, path: "/geography" },
  ];

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Avatar
        sx={{
          m: "auto",
          width: open ? "70px" : "50px",
          height: open ? "70px" : "50px",
          mt: "20px",
          border: "2px solid gray",
          transition: "0.3s",
        }}
        alt="eisa"
        src="./assets/eisa.jpg"
      />

      <Box textAlign={"center"} sx={{ m: "auto", my: "0px" }}>
        <Typography
          variant="h5"
          fontSize={open ? "20px" : 0}
          sx={{ transition: "0.2s" }}
        >
          {" "}
          eisa ibrahem
        </Typography>
        <Typography
          variant="h6"
          fontSize={open ? "20px" : 0}
          sx={{ transition: "0.2s" }}
          color={theme.palette.info.main}
        >
          Admin
        </Typography>
      </Box>

      <Divider />
      {Arrar1.map((item, index) => (
        <ListItem key={index} disablePadding sx={{ display: "block" }}>
          <Tooltip title={!open && item.text} placement="right">
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === item.path && theme.palette.active,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Tooltip>
        </ListItem>
      ))}
      <Divider />
      {Arrar2.map((item, index) => (
        <ListItem key={index} disablePadding sx={{ display: "block" }}>
          <Tooltip title={!open && item.text} placement="right">
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === item.path && theme.palette.active,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Tooltip>
        </ListItem>
      ))}
      <Divider />
      {Array3.map((item, index) => (
        <ListItem key={index} disablePadding sx={{ display: "block" }}>
          <Tooltip title={!open && item.text} placement="right">
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === item.path && theme.palette.active,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Tooltip>
        </ListItem>
      ))}
    </Drawer>
  );
}
