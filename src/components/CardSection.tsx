import { Container } from "@mui/material"
type CardSectionProps = {
  children: React.ReactNode
}

const CardSection = ({ children }: CardSectionProps) => {
  return (
    <Container component="section" sx={{ bgcolor: "secondary.main", color: "secondary.contrastText"}}>
      {children}
    </Container>
  )
}
export default CardSection