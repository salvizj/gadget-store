import { AppBar, Box, Button, Stack, Toolbar, Typography, useMediaQuery } from "@mui/material"
import { Link } from "react-router"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded"
import { useState } from "react";
import theme from "../theme/theme";

type NavLink = {
  title: string
  path: string
}

type HeaderProps = {
  navLinks: NavLink[]
}

const Header = ({ navLinks }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <AppBar position="static" component="header" elevation={0} sx={{ py: 1 }} >
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Stack direction="row" sx={{ alignItems: "center", gap: 3, mx: 5 }}>
          <ComputerRoundedIcon sx={{ fontSize: "2.25rem" }} />
          <Typography color="inherit" sx={{ fontWeight: 600, fontSize: "2.25rem", lineHeight: 1, letterSpacing: 0 }}>
            Gadget Store
          </Typography>
        </Stack>

        {isMobile && mobileMenuOpen && (
          <MenuIcon sx={{ cursor: "pointer" }} onClick={() => setMobileMenuOpen(prev => !prev)} fontSize="large" />
        )}

        {isMobile && !mobileMenuOpen && (
          <CloseIcon sx={{ cursor: "pointer" }} onClick={() => setMobileMenuOpen(prev => !prev)} fontSize="large" />
        )}

        {!isMobile && (
          <Box component="nav">
            <Stack direction="row">
              {navLinks.map((link) => (
                <Button key={link.path} component={Link} to={link.path} color="inherit" sx={{ fontWeight: 600, textTransform: "none", fontSize: "1.25rem", lineHeight: 1 }}>
                  {link.title}
                </Button>
              ))}
            </Stack>
          </Box>
        )}

      </Toolbar>

      {isMobile && mobileMenuOpen && (
        <Box component="nav">
          <Stack direction="column" sx={{ alignItems: "start" }}>
            {navLinks.map((link) => (
              <Button key={link.path} component={Link} to={link.path} color="inherit" sx={{ fontWeight: 600, textTransform: "none", fontSize: "1.25rem", lineHeight: 1 }}>
                {link.title}
              </Button>
            ))}
          </Stack>
        </Box>
      )}

    </AppBar>
  )
}

export default Header
