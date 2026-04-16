import { createTheme } from "@mui/material/styles"

const theme = createTheme({
    palette: {
    primary: {
      main: "#3F51B5",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#F5E48B",
      contrastText: "#1D1D1D"
    },
    background: {
      default: "#FFFFFF"
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF"
    }
  },
})


export default theme