/* eslint-disable react/prop-types */
// @ts-nocheck
import { alpha, styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputBase, Stack, Toolbar, useTheme } from "@mui/material";

import PersonOutlined from "@mui/icons-material/PersonOutlined";

import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { useState } from "react";

const drawerWidth = 240;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function TopBar({ open, setOpen, setMode }) {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("mode") === "dark" ? true : false
  );

  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar
      position="fixed"
      // @ts-ignore
      open={open}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row">
          <IconButton
            aria-label="delete"
            color="inherit"
            onClick={() => {
              setIsDarkMode(!isDarkMode);
              setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
              localStorage.setItem(
                "mode",
                theme.palette.mode === "light" ? "dark" : "light"
              );
            }}
          >
            {isDarkMode ? (
              <DarkModeOutlined />
            ) : (
              <LightModeOutlined sx={{ color: "yellow" }} />
            )}
          </IconButton>
          <IconButton aria-label="delete" color="inherit">
            <NotificationsOutlined />
          </IconButton>
          <IconButton aria-label="delete" color="inherit">
            <SettingsOutlined />
          </IconButton>
          <IconButton aria-label="delete" color="inherit">
            <PersonOutlined />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
