import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';


const TableForm = (props) => (
    <React.Fragment>
         <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 5 } }}>
            <Grid container spacing={1}>
                <Grid border={1} item xs={4} sm={4} lg={2}>
                <Typography variant="h6" sx={{mx: { xs:1, sm: 1, md: 2}}} gutterBottom>
                    실정보
                </Typography>
                </Grid>
                <Grid item xs={8} sm={8}>
                <TextField
                    required
                    id="yarnInfo"
                    name="yarnInfo"
                    label="실 정보를 입력하세요."
                    fullWidth
                    autoComplete="no info"
                    variant="standard"
                />
                </Grid>
                <Grid item xs={4} sm={4}>
                <Typography variant="h6" gutterBottom>
                    바늘 사이즈
                </Typography>
                </Grid>
                <Grid item xs={8} sm={8}>
                <TextField
                    id="yarnInfo"
                    name="yarnInfo"
                    label="바늘 사이즈를 입력하세요."
                    fullWidth
                    autoComplete="no info"
                    variant="standard"
                />
                </Grid>
            </Grid>
        </Paper>
    </React.Fragment>
);

export default TableForm;