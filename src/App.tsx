import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './shared-library/theme';
import { Button, Typography } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Typography variant="h1" component="h2" gutterBottom>
          Welcome to Material-UI
        </Typography>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Welcome to Aubrey Martin's project</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ThemeProvider>
  );
}

export default App;


// // src/App.tsx
// import React from 'react';
// import { Button, Typography } from '@mui/material';

// const App: React.FC = () => {
//   return (
//     <div>
//       <Typography variant="h1" color="primary">
//         Hello, MUI!
//       </Typography>
//       <Button variant="contained" color="primary">
//         Primary Button
//       </Button>
//       <Button variant="contained" color="secondary">
//         Secondary Button
//       </Button>
//     </div>
//   );
// };

// export default App;
