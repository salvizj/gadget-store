import { Card, CardContent, CardActions, Typography } from "@mui/material"
import styles from "./AddedToCartDialog.module.css"
import Button from "../../../shared/components/Buttons/Button"

type AddedToCartDialogProps = {
  closeWindow: () => void
}

const AddedToCartDialog = ({ closeWindow }: AddedToCartDialogProps) => {
  return (
    <Card className={styles.wrapper}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="h4" className={styles.tittle}>
          Product successfully added to cart!
        </Typography>
      </CardContent>
      <CardActions className={styles.actions}>
        <Button variant="contained" onClick={closeWindow} className={styles.button}>
          Close Window
        </Button>
      </CardActions>
    </Card>
  )
}

export default AddedToCartDialog
