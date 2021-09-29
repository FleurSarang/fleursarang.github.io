import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';

const ResultForm = (props) => {
    const { label = "none", results=[]} = props;
    let feildLen = results.length;
    const colSize = feildLen > 1 ? (8 / feildLen) : 8;
    
    return (
        <React.Fragment>
            <Grid container flexdirection="column" justify="center" justifyContent="center" alignItems="ceneter" spacing={2}>
                <Grid item xs={3} sm={3} lg={3}>
                    <Typography color="secondary" align="center" 
                        sx={{ mt: 2.3, fontSize: "1em", fontWeight: 500}} >
                        {label}
                    </Typography>
                </Grid>

                {results.map((info, idx) => {
                    let variant = info.variant ? info.variant : "standard";
                    
                    return(
                    <Grid item key={idx} xs={colSize} sm={colSize}>
                        <TextField
                            disabled
                            color="info"
                            id={info.id}
                            name={info.id}
                            label={info.txtLabel ? info.txtLabel : ""}
                            variant={variant}
                            onChange={info.onChange ? info.onChange : null}
                            fullWidth
                            type={info.type}
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            InputProps = { { endAdornment: <InputAdornment position="end">{info.endAdornment}</InputAdornment> } }
                        />
                    </Grid>
                    );
                })}
            </Grid>
        </React.Fragment>
        );
    }

export default ResultForm;