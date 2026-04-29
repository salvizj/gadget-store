import { Stack } from "@mui/material"
import type { Product } from "../../../types/types"
import MenuButton from "./MenuButton"
import styles from "./ProductContextMenu.module.css"

type ProductContextMenuProps = {
  product: Product
  onDeleteClick: () => void
  onEditClick: (product: Product) => void
  closeMenu: () => void
}

const ProductContextMenu = ({ product, onDeleteClick, onEditClick, closeMenu }: ProductContextMenuProps) => {
  return (
    <Stack className={styles.contextMenuBoxWrapper}>
      <MenuButton
        onClick={() => {
          onEditClick(product)
          closeMenu()
        }}
      >
        Edit
      </MenuButton>
      <MenuButton
        onClick={() => {
          onDeleteClick()
          closeMenu()
        }}
      >
        Delete
      </MenuButton>
    </Stack>
  )
}
export default ProductContextMenu
