import * as React from "react";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import { getDesignTokens } from "./theme/Theme";
import { Outlet } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function App() {
  // @ts-ignore
  const [mode, setMode] = React.useState(
    localStorage.getItem("mode") ?? "dark"
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [open, setOpen] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar open={open} setOpen={setOpen} setMode={setMode} />
        <SideBar open={open} setOpen={setOpen} theme={theme} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />

          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
