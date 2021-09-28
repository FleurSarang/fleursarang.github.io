import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const ResultForm = (props) => {
    const { label = "none", results=[]} = props;
    // console.log("RusultForm::::results===>", results);
    let feildLen = results.length;
    const colSize = feildLen > 1 ? (8 / feildLen) : 8;
    // const [contraction, setContraction] = useState("");
    
    return (
        <React.Fragment>
            <Grid container flexdirection="column" justify="center" justifyContent="center" alignItems="ceneter" spacing={2}>
                <Grid item xs={2} sm={2} lg={2}>
                    <Typography color="secondary" align="center" variant="h6" 
                        sx={{ mt: 2.3 }} >
                        {label}
                    </Typography>
                </Grid>

                {results.map((info, idx) => {
                    // console.log("ResultForm::info: ", info);
                    
                    return(
                    <Grid item key={idx} xs={colSize} sm={colSize}>
                        <TextField
                            disabled
                            color="info"
                            id={info.id}
                            name={info.id}
                            label={info.label ? info.label : ""}
                            variant="standard"
                            onChange={info.onChange ? info.onChange : null}
                            fullWidth
                        />
                    </Grid>
                    );
                })}
            </Grid>
        </React.Fragment>
        );
    }

export default ResultForm;