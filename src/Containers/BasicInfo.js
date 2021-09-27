import React from 'react';
import Paper from '@mui/material/Paper';
import TableForm from '../Components/TableForm';

const BasicInfo = (props) => (
    <React.Fragment>
         <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 5 } }}>
            <TableForm label="실 정보" textLabel="실 정보를 입력하세요" />
            <TableForm form label="바늘 사이즈" textLabel="바늘 사이즈를 입력하세요" />
        </Paper>
    </React.Fragment>
);


export default BasicInfo;