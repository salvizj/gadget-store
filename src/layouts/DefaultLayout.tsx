import { Box } from "@mui/material"
import { Outlet } from "react-router"
import Footer from "./footer/Footer"
import Header from "./header/Header"

const DefaultLayout = () => {
  return (
    <>
      <Box component="div" sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
        <Footer text="© All rights reserved" />
      </Box>
    </>
  )
}
export default DefaultLayout
