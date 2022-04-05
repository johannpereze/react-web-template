import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import LanguageSelector from "../components/LanguageSelector";
import ThemeSelector from "../components/ThemeSelector";

export default function Login() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4">Login</Typography>
        <Paper
          elevation={4}
          sx={{
            width: 300,
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <TextField />
          <TextField />
          <Button variant="outlined">Login</Button>
        </Paper>
      </Grid>
      <hr />
      <Grid item xs={12}>
        <LanguageSelector />
        <ThemeSelector />
      </Grid>
    </Grid>
  );
}
