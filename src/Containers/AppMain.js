import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import BasicInfo from './BasicInfo';
import SwatchTable from './SwatchTable';
import SexInfo from './SexInfo';
import Box from '@mui/material/Box';
import SizeInfo from './SizeInifo';

const AppMain = (props) => {
    return (
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
            <SizeInfo />
        </Container>
    </Box>
    )
}

export default AppMain;