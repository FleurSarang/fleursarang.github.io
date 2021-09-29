import React, { useContext, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TableForm from '../Components/TableForm';
import InfoTableContainer from './InfoTableContainer';
import ResultForm from '../Components/ResultForm';
import { appContext } from './AppMain';


const SwatchTable = (props) => {
    let context = useContext(appContext);
    const [beforeSts, setBeforeSts] = useState(0);
    const [beforeRows, setBeforeRows] = useState(0);
    const [afterSts, setAfterSts] = useState(0);
    const [afterRows, setAfterRows] = useState(0);

    useEffect(() => {
        // 수축률 = 세탁 전 / 세탁 후 * 100
        if (beforeSts > 0 && afterSts > 0) {
            let res = (beforeSts / afterSts) * 100;
            setContractionSts(res.toFixed(2));
        }
    }, [beforeSts, afterSts]);

    useEffect(() => {
        // 수축률 = 세탁 전 / 세탁 후 * 100
        if(beforeRows > 0 && afterRows > 0) {
            let res = (beforeRows / afterRows) * 100;
            setContractionRows(res.toFixed(2));
        }

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
        context.setAfterSts(e.target.value);
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
                    txtLabel: "(숫자만)",
                    required: true,
                    onChange: handleChangeBeforeStitches,
                    endAdornment: "코",
                },
                {
                    id: "beforeRows",
                    txtLabel: "(숫자만)",
                    required: true,
                    onChange: handleChangeBeforeRows,
                    endAdornment: "단",
                }
            ],
        },
        
        {
            label: "세탁 후",
            txtInfo: [
                {
                    id: "afterSts",
                    txtLabel: "(숫자만)",
                    required: true,
                    onChange: handleChangeAfterStitches,
                    endAdornment: "코",
                },
                {
                    id: "afterRows",
                    txtLabel: "(숫자만)",
                    required: true,
                    onChange: handleChangeAfterRows,
                    endAdornment: "단",
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
                    txtLabel: `${contractionSts} %`,
                    onChange: null,
                },
                {
                    id: "resRows",
                    txtLabel: `${contractionRows} %`,
                    onChange: null,
                }
            ],
        },
    ];


    // endAdornment={<InputAdornment position="end">kg</InputAdornment>}

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

                {
                    swatchInfo.map((info, idx) => (
                        <TableForm key={idx} type="number" label={info.label} txtInfo={info.txtInfo} />
                    ))
                 }
                <ResultForm label={results[0].label} results={results[0].results} />
            </InfoTableContainer>
        </React.Fragment>
        );
}


export default SwatchTable;