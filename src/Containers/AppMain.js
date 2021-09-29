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
import { CssBaseline, Grid, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faRavelry, faEtsy } from '@fortawesome/free-brands-svg-icons'
import { BRAND_YOUTUBE, BRAND_INSTAGRAM, BRAND_RAVELRY, BRAND_ETSY } from '../utils/constants';
import { generateBrandStyles } from '../Styles/styles';

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


const MyLink = (props) => {
    let brandStyles = generateBrandStyles(props.brand);
    let styles = makeStyles(brandStyles)();

    return (
    <React.Fragment>
        <Link className={styles.link} sx={{ color:'inherit' }}
            target="_blank" rel="noopener" 
            href={props.href}
        >
            <FontAwesomeIcon icon={props.icon} />
        </Link>{' '}
    </React.Fragment>
    );
}

const Copyright = () => {
    return (
    <React.Fragment>
    <Grid container flexdirection="column" justify="center" justifyContent="center" spacing={1} alignItems="center"
        sx={{ flexGrow: 1 }}
    >
        <Grid item sm={12}>
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © Fleur Sarang Crochet'}{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Grid>

        <Grid item sm={12}>
            <Typography variant="body2" color="text.secondary" align="center"
                sx={{}}
            >
                <MyLink href="https://www.youtube.com/c/FleurSarangCrochet" icon={faYoutube} brand={BRAND_YOUTUBE} />
                <MyLink href="https://www.instagram.com/fleursarang" icon={faInstagram} brand={BRAND_INSTAGRAM} />
                <MyLink href="https://www.ravelry.com/patterns/sources/fleurs-sarangs-ravelry-store" icon={faRavelry} brand={BRAND_RAVELRY} />
                <MyLink href="https://www.etsy.com/shop/FleurSarang" icon={faEtsy} brand={BRAND_ETSY} />
            </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
    );
  }

const Header = () => (
    <React.Fragment>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', pb: '60px' }}>
        <AppBar
            position="absolute"
            color="default"
            elevation={0}
            sx={{
                position: 'fixed',
                borderBottom: (t) => `1px solid ${t.palette.divider}`,
            }}
        >
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                스티치 계산기
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
    </React.Fragment>
)

  const Footer = () => {
      return (
        <React.Fragment>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: '60px' }}>
            <AppBar position="fixed" 
                color="default"
                elevation={4}
                sx={{ 
                    top: 'auto', 
                    bottom: 0,
                    borderTop: (t) => `1px solid ${t.palette.divider}`,
                }}>
                <Toolbar>
                    <Copyright />
                </Toolbar>
            </AppBar>
        </Box>
        </React.Fragment>
      )
  }



const AppMain = (props) => {
    return (
    <Box sx={{ flexGrow: 1, width: "100vw" }}>
        <AppProvider>
            <Header />
            <Container component="main" maxWidth="md" sx={{ mb: 2 }} >
                <BasicInfo />
                <SwatchTable />
                <SexInfo />
                <SizeInfo />
            </Container>
        </AppProvider>
        <CssBaseline />
        <Footer />
    </Box>
    )
}

export default AppMain;