import { CardContent, Typography, Card, Box } from "@mui/material"
import styles from "./InfoCard.module.css"

type InfoCardProps = {
  icon: React.ReactNode
  title: string
  description: string
}

const InfoCard = ({ icon, title, description }: InfoCardProps) => {
  return (
    <Card className={styles.wrapper}>
      <CardContent className={styles.content}>
        <Box className={styles.icon}>{icon}</Box>
        <Typography className={styles.title}>{title}</Typography>
        <Typography className={styles.description}>{description}</Typography>
      </CardContent>
    </Card>
  )
}
export default InfoCard
