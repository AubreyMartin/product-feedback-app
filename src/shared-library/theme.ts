import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      backgroundAlt: string;
      gray: string;
      accent: string;
      white: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      backgroundAlt?: string;
      gray?: string;
      accent?: string;
      white: string;
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
      white: "#FFFFFF", // Custom white color
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
      fontSize: "13px",
      lineHeight: "19px",
      letterSpacing: "normal",
    },
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none', // Remove the default outline border
          },
          '& .MuiInputBase-root': {
            color: '#3A4374',
            backgroundColor: '#F7F8FD',
            border: '1px solid transparent', // Reserve space for the border but make it transparent
            transition: 'border-color 0.3s', // Smooth transition for border color
            '&.Mui-focused': {
              borderColor: '#4A00E0', // Show border on focus
            },
            '&.Mui-error': {
              borderColor: '#D73737', // Show border on error
            },
          },
          '& .MuiInputLabel-root': {
            display: 'none', // Hide labels if not needed
          },
        },
      },

    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4A00E0', // Border color for active dropdown
          },
        },
        icon: {
          color: '#4A00E0', // Icon color for dropdown arrow
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 4, // Dropdown menu border radius
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', // Shadow for dropdown menu
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#4A00E0', // Background color for selected item
            color: '#FFFFFF', // Text color for selected item
          },
          '&.Mui-selected:hover': {
            backgroundColor: '#4A00E0', // Hover color for selected item
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 16px",
          textTransform: "none",
        },
      },
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
            backgroundColor: "#4661E6",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#7C91F9",
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
