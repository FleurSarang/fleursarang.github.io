import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const TableForm = (props) => {
    const { label = "none", txtInfo=[] } = props;
    let feildLen = txtInfo.length;
    const colSize = feildLen > 1 ? (8 / feildLen) : 8;
    
    return (
        <React.Fragment>
            <Grid container 
                 spacing={1} padding={0} 
                 flexdirection="row" justify="center" justifyContent="center" 
                 alignItems="ceneter">
                
                <Grid item xs={3} sm={3} lg={3}>
                    <Typography color="primary" align="center" 
                        sx={{ mt: 2.3, fontSize: "1em", fontWeight: 500}} >
                        {label}
                    </Typography>
                </Grid>

                {txtInfo.map((info, idx) => (
                    <Grid item key={idx} xs={colSize} sm={colSize}>
                        <TextField
                            required={info.required}
                            id={info.id}
                            name={info.id}
                            label={info.txtLabel}
                            fullWidth
                            autoComplete="no info"
                            variant="standard"
                            // onChange={(e) => { console.log("event:", e);}}
                            onChange={info.onChange}
                        />
                    </Grid>
                    )
                )}
            </Grid>
        </React.Fragment>
        );
    }

export default TableForm;