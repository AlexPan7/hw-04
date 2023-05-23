import {createTheme} from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: '#333'
    },
    secondary: {
      main: "#ccc"
    },
  },
  typography: {
    fontFamily: 'Roboto Condensed, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1200,
      xxl: 1920,
    }
  }
})

export default theme;