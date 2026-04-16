import { Box, Typography } from "@mui/material"

type FooterProps = {
  text: string
}

const Footer = ({text}: FooterProps) => {
	return (
    <>
      <Box component="footer" sx={{ bgcolor: "primary.main", color: "primary.contrastText", py: 2 }}>
        <Typography color="inherit" sx={{ display: "inline-block", mx: 4 }}>
          {text}
        </Typography>
      </Box>
		</>
	)
}

export default Footer
