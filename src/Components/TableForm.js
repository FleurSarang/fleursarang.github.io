import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


const TableForm = (props) => (
    <React.Fragment>
        <Grid container flexdirection="column" justify="center" justifyContent="center" alignItems="ceneter" spacing={2}>
            <Grid item xs={2} sm={2} lg={2}>
                <Typography color="primary" align="center" variant="h6" 
                    sx={{ mt: 2.3 }} >
                    실 정보
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
        </Grid>
    </React.Fragment>
);

// const TableForm = (props) => (
//     <React.Fragment>
//          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 5 } }}>
//             <Grid container flexdirection="column" justify="center" justifyContent="center" alignItems="ceneter" spacing={2}>
//                 <Grid item xs={2} sm={2} lg={2}>
//                     <Typography color="primary" align="center" variant="h6" 
//                         sx={{ mt: 2.3 }} >
//                         실 정보
//                     </Typography>
//                 </Grid>
//                 <Grid item xs={8} sm={8}>
//                 <TextField
//                     required
//                     id="yarnInfo"
//                     name="yarnInfo"
//                     label="실 정보를 입력하세요."
//                     fullWidth
//                     autoComplete="no info"
//                     variant="standard"
//                 />
//                 </Grid>
//                 <Grid item xs={4} sm={4}>
//                 <Typography variant="h6" gutterBottom>
//                     바늘 사이즈
//                 </Typography>
//                 </Grid>
//                 <Grid item xs={8} sm={8}>
//                 <TextField
//                     id="yarnInfo"
//                     name="yarnInfo"
//                     label="바늘 사이즈를 입력하세요."
//                     fullWidth
//                     autoComplete="no info"
//                     variant="standard"
//                 />
//                 </Grid>
//             </Grid>
//         </Paper>
//     </React.Fragment>
// );

export default TableForm;