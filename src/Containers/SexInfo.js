import React from 'react';
import TableForm from '../Components/TableForm';
import InfoTableContainer from './InfoTableContainer';



const SexInfo = (props) => {

    const sexInfo = [
        {
            label: "성별",
            txtInfo: [{
                id: "sexInfo",
                txtLabel: "성별을 입력하세요",
            }],
        },
    ];
    
    return (
    <React.Fragment>
         <InfoTableContainer>
            <TableForm label={sexInfo[0].label} txtInfo={sexInfo[0].txtInfo} />
        </InfoTableContainer>
    </React.Fragment>
    );
}


export default SexInfo;