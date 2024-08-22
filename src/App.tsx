import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./shared-library/theme";
import { Button, Stack, Typography, Grid, Paper,Box } from "@mui/material";
import "./App.css";


// ColorTileGrid Component
const ColorTileGrid = () => {
  return (
    <Box style={{ padding: 20 }}>
      <Grid container spacing={2}>
        {/* Row 1 */}
        <Grid item xs={3}>
          <Paper
            sx={{
              height: 100,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              backgroundColor: theme.palette.primary.main, color: "#FFFFFF"
            }}
          >Primary main <br /> #AD1FEA
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper
            sx={{
              height: 100,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              backgroundColor: theme.palette.info.main, color: "#FFFFFF"
            
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
          > Primarylight <br /> #F2F4FF
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
       <Stack  direction={'row' } gap={2} >
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
    </ThemeProvider>
  );
}

export default App;