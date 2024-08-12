import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./shared-library/theme";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack direction={"row"} gap={2}>
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
