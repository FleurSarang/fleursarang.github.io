import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TableForm from '../Components/TableForm';
import InfoTableContainer from './InfoTableContainer';
import ResultForm from '../Components/ResultForm';


const SwatchTable = (props) => {
    const [beforeSts, setBeforeSts] = useState(0);
    const [beforeRows, setBeforeRows] = useState(0);
    const [afterSts, setAfterSts] = useState(0);
    const [afterRows, setAfterRows] = useState(0);

    useEffect(() => {
        // 수축률 = 세탁 전 / 세탁 후 * 100
        if (beforeSts > 0 && afterSts > 0)
            setContractionSts((beforeSts / afterSts) * 100);
    }, [beforeSts, afterSts]);

    useEffect(() => {
        // 수축률 = 세탁 전 / 세탁 후 * 100
        if(beforeRows > 0 && afterRows > 0)
        setContractionRows((beforeRows / afterRows) * 100);
    }, [beforeRows, afterRows]);

    const [contractionSts, setContractionSts] = useState(0);
    const [contractionRows, setContractionRows] = useState(0);

    

    const handleChangeBeforeStitches = e => {
        setBeforeSts(e.target.value);
    }

    const handleChangeBeforeRows = e => {
        setBeforeRows(e.target.value);
    }
    const handleChangeAfterStitches = e => {
        setAfterSts(e.target.value);
    }

    const handleChangeAfterRows = e => {
        setAfterRows(e.target.value);
    }

    const swatchInfo = [
        {
            label: "세탁 전",
            txtInfo: [
                {
                    id: "beforeSts",
                    txtLabel: "코",
                    required: true,
                    onChange: handleChangeBeforeStitches,
                },
                {
                    id: "beforeRows",
                    txtLabel: "단",
                    required: true,
                    onChange: handleChangeBeforeRows,
                    
                }
            ],
        },
        
        {
            label: "세탁 후",
            txtInfo: [
                {
                    id: "afterSts",
                    txtLabel: "코",
                    required: true,
                    onChange: handleChangeAfterStitches,
                },
                {
                    id: "afterRows",
                    txtLabel: "단",
                    required: true,
                    onChange: handleChangeAfterRows,
                }
            ],
        },
    ];


    const results = [
        {
            label: "수축률",
            results: [
                {
                    id: "resSts",
                    label: `${contractionSts} %`,
                    onChange: setContractionSts,
                },
                {
                    id: "resRows",
                    label: `${contractionRows} %`,
                    onChange: setContractionRows,
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


                <TableForm label={swatchInfo[0].label} txtInfo={swatchInfo[0].txtInfo} />
                <TableForm label={swatchInfo[1].label} txtInfo={swatchInfo[1].txtInfo} />
                <ResultForm label={results[0].label} results={results[0].results} />
            </InfoTableContainer>
        </React.Fragment>
        );
}


export default SwatchTable;