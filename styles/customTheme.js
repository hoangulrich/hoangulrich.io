import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    custom: {
      100: "#3F4354",
      200: "#353849",
      500: "#03CC90",
      900: "#232734",
    },
  },

  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },

  breakpoints: {
    sm: "40em",
    sm: "52em",
    sm: "64em",
    sm: "76em",
  },

  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },

  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
    "10xl": "150px",
  },

  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default customTheme;
