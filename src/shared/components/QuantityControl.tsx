import { CardActions, Typography } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import TrashIcon from "@mui/icons-material/Delete"
import Button from "./Buttons/Button"
import styles from "./QuantityControl.module.css"

type QuantityControl = {
  productAlreadyInCart: boolean
  productInCartCount: number
  onIncrementClick: () => void
  onDecrementClick: () => void
}

const QuanitityControl = ({
  productAlreadyInCart,
  productInCartCount,
  onIncrementClick,
  onDecrementClick,
}: QuantityControl) => {
  return (
    <>
      {productAlreadyInCart && (
        <CardActions className={styles.action}>
          <Button variant="outlined" onClick={onDecrementClick}>
            {productInCartCount === 1 ? <TrashIcon /> : <RemoveIcon />}
          </Button>
          <Typography variant="counter">{productInCartCount}</Typography>
          <Button variant="contained" onClick={onIncrementClick} size="medium">
            <AddIcon />
          </Button>
        </CardActions>
      )}
    </>
  )
}

export default QuanitityControl
