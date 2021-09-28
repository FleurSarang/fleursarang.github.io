
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import BasicInfo from './Containers/BasicInfo';
import SwatchTable from './Containers/SwatchTable';
import SexInfo from './Containers/SexInfo';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, width: "100vw" }}>
        <AppBar
          position="absolute"
          color="default"
          elevation={0}
          sx={{
            position: 'relative',
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              스티치 계산기
            </Typography>
          </Toolbar>
        </AppBar>
        <Container component="main" maxWidth="md" sx={{ mb: 2 }} >
            <BasicInfo />
            <SwatchTable />
            <SexInfo />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
