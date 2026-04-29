import { Box, Card, CardActions, CardContent, Stack, TextField, Typography, ClickAwayListener } from "@mui/material"
import type React from "react"
import { useState } from "react"
import type { Product } from "../../../types/types"
import { FORM_FIELDS } from "../../../constants/formFields"
import Button from "../../../shared/components/Buttons/Button"
import { productFormSchema, type ProductFormData } from "../../../schemas/productSchema"
import styles from "./ProductForm.module.css"

type FormProps = {
  product?: Product
  closeForm: () => void
  actionBtnText: string
  onCreate?: (product: ProductFormData) => Promise<void>
  onUpdate?: (product: ProductFormData) => Promise<void>
}

const Form = ({ product, closeForm, actionBtnText, onCreate, onUpdate }: FormProps) => {
  const isUpdate = !!product

  const [formData, setFormData] = useState({
    ...(isUpdate && { id: product?.id }),
    title: product?.title ?? "",
    price: String(product?.price ?? ""),
    short_description: product?.short_description ?? "",
    long_description: product?.long_description ?? "",
    year: String(product?.year ?? ""),
    RAM: product?.RAM ?? "",
    warranty_period: product?.warranty_period ?? "",
    features: product?.features ?? "",
    image: (product?.image ?? "").split(".")[0] ?? "",
  })

  const [validationErrors, setValidationErrors] = useState<Record<string, string | undefined>>({})

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const result = productFormSchema.safeParse(formData)

    if (!result.success) {
      const errors = Object.fromEntries(result.error.issues.map((issue) => [issue.path[0], issue.message]))

      setValidationErrors(errors)
      return
    }

    if (isUpdate && onUpdate) {
      await onUpdate(result.data)
    } else if (onCreate) {
      await onCreate(result.data)
    }

    closeForm()
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prev) => ({ ...prev, [name]: value }))

    setValidationErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const onFeatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, features: e.target.value }))

    setValidationErrors((prev) => ({ ...prev, features: undefined }))
  }

  return (
    <Box className={styles.wrapper}>
      <ClickAwayListener onClickAway={closeForm}>
        <Card component="form" className={styles.form} onSubmit={onSubmit}>
          <CardContent>
            <Stack direction="column" className={styles.inputStack}>
              {FORM_FIELDS.map((field) => (
                <>
                  <TextField
                    name={field.name}
                    label={field.label}
                    type={field.type}
                    value={formData[field.name as keyof ProductFormData]}
                    onChange={field.name === "features" ? onFeatureChange : onChange}
                    error={!!validationErrors[field.name]}
                  />
                  {validationErrors[field.name] && (
                    <Typography color="error" variant="body2">
                      {validationErrors[field.name]}
                    </Typography>
                  )}
                </>
              ))}
            </Stack>
          </CardContent>

          <CardActions className={styles.action}>
            <Button variant="outlined" onClick={closeForm} size="medium">
              Cancel
            </Button>
            <Button variant="contained" type="submit" size="medium">
              {actionBtnText}
            </Button>
          </CardActions>
        </Card>
      </ClickAwayListener>
    </Box>
  )
}

export default Form
