import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        alabaster: {
            100: "#f9f9f8",
            200: "#f3f3f1",
            300: "#eceee9",
            400: "#e6e8e2",
            500: "#e0e2db",
            600: "#b3b5af",
            700: "#868883",
            800: "#5a5a58",
            900: "#2d2d2c"
        },
        midnight: {
            100: "#ccdce0",
            200: "#99b8c1",
            300: "#6695a2",
            400: "#337183",
            500: "#004e64",
            600: "#003e50",
            700: "#002f3c",
            800: "#001f28",
            900: "#001014"
        },
        oruby: {
            100: "#ead4db",
            200: "#d6a8b6",
            300: "#c17d92",
            400: "#ad516d",
            500: "#982649",
            600: "#7a1e3a",
            700: "#5b172c",
            800: "#3d0f1d",
            900: "#1e080f"
        },
        persionGreen: {
            100: "#d1ebe8",
            200: "#a4d6d1",
            300: "#76c2b9",
            400: "#49ada2",
            500: "#1b998b",
            600: "#167a6f",
            700: "#105c53",
            800: "#0b3d38",
            900: "#051f1c"
        },
        portlandOrange: {
            100: "#fddfd7",
            200: "#fbbfaf",
            300: "#f8a086",
            400: "#f6805e",
            500: "#f46036",
            600: "#c34d2b",
            700: "#923a20",
            800: "#622616",
            900: "#31130b"
        },
        charcoal: {
            100: "#d5dade",
            200: "#acb6bc",
            300: "#82919b",
            400: "#596d79",
            500: "#2f4858",
            600: "#263a46",
            700: "#1c2b35",
            800: "#131d23",
            900: "#090e12"
        },
        jonquil: {
            100: "#fcf4ce",
            200: "#f9e99c",
            300: "#f6de6b",
            400: "#f3d339",
            500: "#f0c808",
            600: "#c0a006",
            700: "#907805",
            800: "#605003",
            900: "#302802"
        },
      }
    : {
        alabaster: {
            100: "#2d2d2c",
            200: "#5a5a58",
            300: "#868883",
            400: "#b3b5af",
            500: "#e0e2db",
            600: "#e6e8e2",
            700: "#eceee9",
            800: "#f3f3f1",
            900: "#f9f9f8"
        },
        midnight: {
            100: "#001014",
            200: "#001f28",
            300: "#002f3c",
            400: "#003e50",
            500: "#004e64",
            600: "#337183",
            700: "#6695a2",
            800: "#99b8c1",
            900: "#ccdce0"
        },
        oruby: {
            100: "#1e080f",
            200: "#3d0f1d",
            300: "#5b172c",
            400: "#7a1e3a",
            500: "#982649",
            600: "#ad516d",
            700: "#c17d92",
            800: "#d6a8b6",
            900: "#ead4db"
        },
        persionGreen: {
            100: "#051f1c",
            200: "#0b3d38",
            300: "#105c53",
            400: "#167a6f",
            500: "#1b998b",
            600: "#49ada2",
            700: "#76c2b9",
            800: "#a4d6d1",
            900: "#d1ebe8"
        },
        portlandOrange: {
            100: "#31130b",
            200: "#622616",
            300: "#923a20",
            400: "#c34d2b",
            500: "#f46036",
            600: "#f6805e",
            700: "#f8a086",
            800: "#fbbfaf",
            900: "#fddfd7"
        },
        charcoal: {
            100: "#090e12",
            200: "#131d23",
            300: "#1c2b35",
            400: "#263a46",
            500: "#2f4858",
            600: "#596d79",
            700: "#82919b",
            800: "#acb6bc",
            900: "#d5dade"
        },
        jonquil: {
            100: "#302802",
            200: "#605003",
            300: "#907805",
            400: "#c0a006",
            500: "#f0c808",
            600: "#f3d339",
            700: "#f6de6b",
            800: "#f9e99c",
            900: "#fcf4ce"
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.oruby[500],
            },
            secondary: {
              main: colors.midnight[500],
            },
            neutral: {
              dark: colors.persionGreen[700],
              main: colors.persionGreen[500],
              light: colors.persionGreen[100],
            },
            background: {
              default: colors.midnight[700],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.oruby[100],
            },
            secondary: {
              main: colors.midnight[500],
            },
            neutral: {
              dark: colors.persionGreen[700],
              main: colors.persionGreen[500],
              light: colors.persionGreen[100],
            },
            background: {
              default: colors.alabaster[500],
            },
          }),
    },
    typography: {
      fontFamily: ['Signika Negative', "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ['Signika Negative', "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Signika Negative', "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Signika Negative', "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Signika Negative', "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Signika Negative', "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Signika Negative', "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};