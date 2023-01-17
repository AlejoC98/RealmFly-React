import { Outlet } from "react-router-dom";
import { ColorModeContext, useMode, tokens } from "../../theme";
import { CssBaseline, ThemeProvider, useTheme, Box } from "@mui/material";
import Topbar from "./Topbar";
import ProSidebar from "./ProSidebar";

const AppLayout = () => {

    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
                <ProSidebar />
                <main className="content">
                    <Topbar />
                    <Outlet />
                </main>
            </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

const AuthLayout = () => {
    
    const [theme, colorMode] = useMode("login");

    const ctheme = useTheme();
    const colors = tokens(ctheme.palette.mode);

    theme.palette.background.default = colors.charcoal[400];
    theme.palette.primary.main = colors.persionGreen[500];

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <Outlet />
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export {AppLayout, AuthLayout}
