import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./shared-library/theme";
import { Button, Stack, Typography, Grid, Paper, Box } from "@mui/material";
import "./App.css";
import FormElements from "./components/FormElements.tsx";
import Suggestions from "../src/Pages/Suggestion.tsx"

// ColorTileGrid Component

const ColorTileGrid = () => {
  return (
    
    <Box style={{ padding: 20  }}>
      <Grid container spacing={2}>
        {/* Row 1 */}
        <Grid item xs={3}>
          <Paper
            sx={{
              height: 100,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              backgroundColor: theme.palette.primary.main,
              color: "#FFFFFF",
            }}
          >
            Primary main <br /> #AD1FEA
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper
            sx={{
              height: 100,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              backgroundColor: theme.palette.info.main,
              color: "#FFFFFF",
            }}
          >
            Info <br /> #373F68
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              height: 100,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              backgroundColor: theme.palette.secondary.main,
              color: "#FFFFFF",
            }}
          >
            Secondary <br /> #373F68
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              height: 100,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              backgroundColor: theme.palette.custom.white,
              color: "#647196",
            }}
          >
            White <br /> #FFFFFF
          </Paper>
        </Grid>

        {/* Row 2 */}
        <Grid item xs={3}>
          <Paper
            sx={{
              height: 100,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              backgroundColor: "#F2F4FF",
              color: "#647196",
            }}
          >
            {" "}
            Primarylight <br /> #F2F4FF
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              height: 100,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              backgroundColor: theme.palette.custom.backgroundAlt,
              color: "#647196",
            }}
          >
            BackgroundAlt <br /> #F7F8FD
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              height: 100,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              backgroundColor: theme.palette.secondary.light,
              color: "#FFFFFF",
            }}
          >
            Secondarylight <br /> #3A4374
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              height: 100,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              backgroundColor: theme.palette.custom.gray,
              color: "#FFFFFF",
            }}
          >
            Gray <br /> #647196
          </Paper>
        </Grid>
        {/* Row 3 */}
        <Grid item xs={3}>
          <Paper
            sx={{
              height: 100,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              backgroundColor: theme.palette.warning.main,
              color: "#FFFFFF",
            }}
          >
            Warning <br /> #F49F85
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              height: 100,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              backgroundColor: theme.palette.custom.accent,
              color: "#FFFFFF",
            }}
          >
            Accent <br /> #62BCFA
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

// App Component
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ColorTileGrid />

      {/* All Header Types */}
      <Box style={{ padding: 20 }}>
        <Grid container spacing={2}>
          {/* First Column with 4 rows */}
          <Grid item xs={6}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h1" className="typography-padding">
                  H1 - Jost Bold | 24px; 35px Line; -0.33 Spacing <br /> Sed
                  egestas ante et vulputate volutpat
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h2" className="typography-padding">
                  H2 - Jost Bold | 20px; 29px Line; -0.25 Spacing <br />{" "}
                  Vestibulum volutpat acus a ultrices sagittis
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h3" className="typography-padding">
                  H3 - Jost Bold | 18px; 26px Line; -0.25 Spacing <br />{" "}
                  Pellentesque a diam sit amet mi ullamcorper vehicula
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4" className="typography-padding">
                  H4 - Jost Bold | 14px; 20px Line; -0.2 Spacing <br /> Ut
                  scelerisque hendrerit tellus. Integer sagittis
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Second Column with 3 rows */}
          <Grid item xs={6}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="body1" className="typography-padding">
                  Body 1 - Jost Regular | 16px; 23px Line <br />
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                  pretium, ligula sollicitudin laoreet viverra, tortor libero
                  sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" className="typography-padding">
                  Body 2 - Jost Regular | 15px; 22px Line <br /> Sed egestas,
                  ante et vulputate volutpat, eros pede semper est, vitae luctus
                  metus libero eu augue. Morbi purus libero, faucibus
                  adipiscing, commodo quis, gravida id, est. Sed lectus.
                  Praesent elementum hendrerit tortor. Sed semper lorem at
                  felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                  neque euismod dui, eu pulvinar nunc sapien ornare nisl.
                  Phasellus pede arcu
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body3" className="typography-padding">
                  Body 3 - Jost Semibold | 13px; 19px Line <br /> Sed egestas,
                  ante et vulputate volutpat, eros pede semper est, vitae luctus
                  metus libero eu augue. Morbi purus libero, faucibus
                  adipiscing, commodo quis, gravida id, est. Sed lectus.
                  Praesent elementum hendrerit tortor. Sed semper lorem at
                  felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                  neque euismod dui, eu pulvinar nunc sapien ornare nisl.
                  Phasellus pede arcu
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Buttons */}
      <Stack direction={"row"} gap={2} className="button-container">
        <Button variant="contained" color="primary">
          Button 1
        </Button>
        <Button variant="contained" color="info">
          Button 2
        </Button>
        <Button variant="contained" color="secondary">
          Button 3
        </Button>
        <Button variant="contained" color="error">
          Button 4
        </Button>
      </Stack>

      {/* Form-Elements */}
      <Box sx={{ padding: "20px", mb: 40 }}>
        <FormElements />
      </Box>


      {/* Mobile - Suggestions */}
      <Box sx={{ padding: "20px", mb: 40 , backgroundColor: "custom.backgroundAlt" }}>
        <Suggestions />

        </Box>
      


    </ThemeProvider>
  );
}



export default App;
