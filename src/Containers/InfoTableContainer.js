import React from 'react';
import Paper from '@mui/material/Paper';



const InfoTableContainer = (props) => (
    <React.Fragment>
         <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 1, md: 2 } }}>
            {props.children}
        </Paper>
    </React.Fragment>
);


export default InfoTableContainer;