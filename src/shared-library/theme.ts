import { createTheme } from "@mui/material/styles";

// Extend the Palette interface to include custom colors
declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      backgroundAlt: string;
      gray: string;
      accent: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      backgroundAlt?: string;
      gray?: string;
      accent?: string;
    };
  }

  interface TypographyVariants {
    body3: React.CSSProperties;
  }

  // Allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }
}

// Extend TypographyPropsVariantOverrides to include body3
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}


const theme = createTheme({
  palette: {
    primary: {
      main: "#AD1FEA", // Primary color
      light: "#F2F4FF", // Light primary color
    },
    info: {
      main: "#4661E6", // Info color
    },
    secondary: {
      main: "#373F68", // Secondary color
      light: "#3A4374", // Light secondary color
    },
    warning: {
      main: "#F49F85", // Warning color
    },
    custom: {
      backgroundAlt: "#F7F8FD", // Custom background alternative color
      gray: "#647196", // Custom gray color
      accent: "#62BCFA", // Custom accent color
    },
  },


  typography: {
    fontFamily: "Jost, sans-serif",
    h1: {
      fontWeight: 700, // Jost Bold
      fontSize: "24px",
      lineHeight: "35px",
      letterSpacing: "-0.33px",
    },
    h2: {
      fontWeight: 700, // Jost Bold
      fontSize: "20px",
      lineHeight: "29px",
      letterSpacing: "-0.25px",
    },
    h3: {
      fontWeight: 700, // Jost Bold
      fontSize: "18px",
      lineHeight: "26px",
      letterSpacing: "-0.25px",
    },
    h4: {
      fontWeight: 700, // Jost Bold
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "-0.2px",
    },
    body1: {
      fontWeight: 400, // Jost Regular font
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "normal",
    },
    body2: {
      fontWeight: 400, // Jost Regular font
      fontSize: "14px",
      lineHeight: "22px",
      letterSpacing: "normal",
    },
     body3: {
      fontWeight: 600, // Jost Semibold
      fontSize: '13px',
      lineHeight: '19px',
      letterSpacing: 'normal',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 16px",
          textTransform: "none",}, },

      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: "#A03FEA",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#B967F1",
            },
          },
        },

        {
          props: { variant: "contained", color: "info" },
          style: {
            backgroundColor: "#4661E6", // look at the figma for the exact colors
            color: "#FFFFFF", // FFF since, our text is white
            "&:hover": {
              backgroundColor: "#7C91F9", // look at the figma for the exact colors
            },
          },
        },

        {
          props: { variant: "contained", color: "secondary" },
          style: {
            backgroundColor: "#3A4374",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#656EA3",
            },
          },
        },

        {
          props: { variant: "contained", color: "error" },
          style: {
            backgroundColor: "#D73737",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#E98888",
            },
          },
        },
      ],
    },
  },



});

export default theme;
