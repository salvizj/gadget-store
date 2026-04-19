import { Button, Stack } from "@mui/material"

type MenuCardProps = {
  onDeleteClick: () => void
  onEditClick: () => void
  closeMenu: () => void
}

const MenuCard = ({ onDeleteClick, onEditClick, closeMenu }: MenuCardProps) => {
  return (
    <Stack spacing={2} sx={{
      position: "absolute",
      bgcolor: "#ffffff",
      transform: "translateY(30%) translateX(60%)",
      boxShadow: 2,
      p: 2,
      zIndex: 10,
    }}>
      <Button size="small" variant="text" onClick={() => { onEditClick(); closeMenu() }} sx={{ bgcolor: "#21212114", color: "#000000DE", textTransform: "capitalize", justifyContent: "flex-start" }}>Edit</Button>
      <Button size="small" variant="text" onClick={() => { onDeleteClick(); closeMenu() }} sx={{ bgcolor: "#21212114", color: "#000000DE", textTransform: "capitalize", justifyContent: "flex-start" }}>Delete</Button>
    </Stack >
  )
}
export default MenuCard