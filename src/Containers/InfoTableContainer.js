import React from 'react';
import Paper from '@mui/material/Paper';



const InfoTableContainer = (props) => (
    <React.Fragment>
         <Paper variant="outlined" sx={{ my: { xs: 2, md: 3 }, p: 0 }}>
            {props.children}
        </Paper>
    </React.Fragment>
);


export default InfoTableContainer;