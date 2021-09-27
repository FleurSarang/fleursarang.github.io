import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TableForm from '../Components/TableForm';
import InfoTableContainer from './InfoTableContainer';




const SwatchTable = (props) => {

    const swatchInfo = [
        {
            label: "세탁 전",
            txtInfo: [
                {
                id: "beforeSts",
                txtLabel: "코",
                },
                {
                    id: "beforeRows",
                    txtLabel: "단"
                }
            ],
        },
        
        {
            label: "세탁 후",
            txtInfo: [
                {
                id: "afterSts",
                txtLabel: "코",
                },
                {
                    id: "afterRows",
                    txtLabel: "단"
                }
            ],
        },
    ];

    return (
        <React.Fragment>
             <InfoTableContainer>
                <Grid container flexdirection="column" justify="center" justifyContent="center" alignItems="ceneter" spacing={2}>
                    <Grid item xs={2} sm={2} lg={2}>
                        <Typography color="primary" align="center" variant="h6" 
                            sx={{ mt: 2.3 }} >
                            Swatch
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <Typography color="primary" align="center" variant="h6" 
                            sx={{ mt: 2.3 }} >
                            코 수
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} >
                        <Typography color="primary" align="center" variant="h6" 
                            sx={{ mt: 2.3 }} >
                            단 수
                        </Typography>
                    </Grid>
                </Grid>


                <TableForm label={swatchInfo[0].label} txtInfo={swatchInfo[0].txtInfo}/>
                <TableForm label={swatchInfo[1].label} txtInfo={swatchInfo[1].txtInfo}/>
            </InfoTableContainer>
        </React.Fragment>
        );
}


export default SwatchTable;