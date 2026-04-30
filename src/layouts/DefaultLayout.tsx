import { Box } from "@mui/material"
import { Outlet } from "react-router"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import styles from "./DefaultLayout.module.css"

const DefaultLayout = () => {
  return (
    <>
      <Box component="div" className={styles.wrapper}>
        <Header />
        <Box component="main" className={styles.main}>
          <Outlet />
        </Box>
        <Footer text="© All rights reserved" />
      </Box>
    </>
  )
}
export default DefaultLayout
