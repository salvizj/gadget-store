import { Stack, Typography } from '@mui/material'
const FeatureList = ({ features }: { features: string[] }) => {
  return (
    <Stack spacing={2}>
      {features.map((feature) => (
        <Typography key={feature}>{feature}</Typography>
      ))}
    </Stack>
  )
}

export default FeatureList