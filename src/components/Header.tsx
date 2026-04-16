import { AppBar, Box, Button, Stack, Toolbar, Typography} from "@mui/material"
import { Link} from "react-router"
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded"

type NavLink = {
	title: string
	path: string
}

type HeaderProps = {
	navLinks: NavLink[]
}

const Header = ({ navLinks }: HeaderProps) => {
	return (
    <AppBar position="static" component="header">
      <Toolbar sx={{ justifyContent: "space-between" }}>
			<Stack direction="row" sx={{ alignItems: "center", gap: 2 }}>
				<ComputerRoundedIcon />
        <Typography variant="h6" color="inherit">
          Gadget Store
        </Typography>
			</Stack>
			<Box component="nav">
				<Stack direction="row" spacing={2}>
					{navLinks.map((link) => (
						<Button key={link.path} component={Link} to={link.path} color="inherit" sx={{ fontWeight: 600, textTransform: "none" }}>
							{link.title}
						</Button>
					))}
				</Stack>
			</Box>
      </Toolbar>
		</AppBar>
	)
}

export default Header
