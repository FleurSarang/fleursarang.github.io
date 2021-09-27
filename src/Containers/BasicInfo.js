import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TableForm from '../Components/TableForm';

const BasicInfo = (props) => (
    <React.Fragment>
         <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 5 } }}>
            <TableForm />
        </Paper>
    </React.Fragment>
);


export default BasicInfo;