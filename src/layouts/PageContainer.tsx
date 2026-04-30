import { Box, type BoxProps } from "@mui/material"
import styles from "./PageCountainer.module.css"

const PageContainer = ({ children, className, ...props }: BoxProps) => {
  return (
    <Box component="section" maxWidth={false} {...props} className={`${styles.wrapper} ${className || ""}`}>
      {children}
    </Box>
  )
}

export default PageContainer
