import { Grid, Typography } from "@mui/material";

export const OrderSummary = () => {
  return (
    <Grid container>

      <Grid item xs={6}>
        <Typography>X Productos</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent={'end'}>
        <Typography>3 items</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Subtotal</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent={'end'}>
        <Typography> 150.35 €</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Impuestos (15%)</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent={'end'}>
        <Typography> 35.15 €</Typography>
      </Grid>

      <Grid item xs={6} sx={{ mt: 2 }}>
        <Typography variant="subtitle1">Total:</Typography>
      </Grid>
      <Grid item xs={6}  sx={{ mt: 2 }} display='flex' justifyContent={'end'}>
        <Typography variant="subtitle1"> 185.50 €</Typography>
      </Grid>

    </Grid>
  );
};
