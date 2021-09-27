import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const TableForm = (props) => {
    const { label = "none", txtInfo=[] } = props;
    let feildLen = txtInfo.length;
    const colSize = feildLen > 1 ? (8 / feildLen) : 8;
    // console.log("col size: %d", colSize);
    

    return (
        <React.Fragment>
            <Grid container flexdirection="column" justify="center" justifyContent="center" alignItems="ceneter" spacing={2}>
                <Grid item xs={2} sm={2} lg={2}>
                    <Typography color="primary" align="center" variant="h6" 
                        sx={{ mt: 2.3 }} >
                        {label}
                    </Typography>
                </Grid>

                {txtInfo.map((info, idx) => (
                    <Grid item key={idx} xs={colSize} sm={colSize}>
                    <TextField
                        required
                        id={info.id}
                        name={info.id}
                        label={info.txtLabel}
                        fullWidth
                        autoComplete="no info"
                        variant="standard"
                    />
                    </Grid>
                    ))}
            </Grid>
        </React.Fragment>
        );
    }

export default TableForm;