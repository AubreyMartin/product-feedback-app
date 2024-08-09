// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides:{
        root: {
         borderRadius:8,
         padding:'8px 16px',
         textTransform: 'none',
        },
      },


      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
              backgroundColor: '#A03FEA',
              color: '#FFFFFF',
              '&:hover': {
                  backgroundColor: '#B967F1',
              },
          },
      },

      {
        props: { variant: 'contained', color: 'info' },
        style: {
            backgroundColor: '#4661E6', // look at the figma for the exact colors
            color: '#FFFFFF', // FFF since, our text is white
            '&:hover': {
                backgroundColor: '#7C91F9', // look at the figma for the exact colors
            },
        },
    },

    {
      props: { variant: 'contained', color: 'secondary' },
      style: {
          backgroundColor: '#3A4374',
          color: '#FFFFFF',
          '&:hover': {
              backgroundColor: '#656EA3',
          },
      },
  },

    {
    props: { variant: 'contained', color: 'error' },
    style: {
        backgroundColor: '#D73737',
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#E98888',
        },
    },
    },

    




      ],
    },
  },
});

export default theme;
