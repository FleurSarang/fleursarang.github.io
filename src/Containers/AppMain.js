import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import BasicInfo from './BasicInfo';
import SwatchTable from './SwatchTable';
import SexInfo from './SexInfo';
import Box from '@mui/material/Box';
import SizeInfo from './SizeInifo';


export const appContext = React.createContext();
appContext.displayName = '컨텍스트!!!!!';
const AppProvider = (props) => {
    const [afterSts, setAfterSts] = useState(0);
    const [neckBack, setNeckBack] = useState(0);
    const [totalSts, setTotalSts] = useState(0);

    const contextValue = {afterSts, setAfterSts, neckBack, setNeckBack, totalSts, setTotalSts};
    return (
        <appContext.Provider value={contextValue}>
            {props.children}
        </appContext.Provider>
    );
}

const AppMain = (props) => {
    return (
    <Box sx={{ flexGrow: 1, width: "100vw" }}>
        <AppProvider>
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
        </AppProvider>
    </Box>
    )
}

export default AppMain;