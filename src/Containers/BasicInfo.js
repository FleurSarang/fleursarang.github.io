import React from 'react';
import TableForm from '../Components/TableForm';
import InfoTableContainer from './InfoTableContainer';



const BasicInfo = (props) => {

    const basicInfo = [
        {
            label: "실 정보",
            txtInfo: [{
                id: "yarnInfo",
                txtLabel: "실 정보를 입력하세요",
                required: false,
            }],
        },
        {
            label: "바늘 사이즈",
            txtInfo: [{
                id: "needleSize",
                txtLabel: "바늘 사이즈를 입력하세요",
                required: false,
                },
            ],
        },
    ];
    
    return (
    <React.Fragment>
         <InfoTableContainer>
            <TableForm label={basicInfo[0].label} txtInfo={basicInfo[0].txtInfo} />
            <TableForm label={basicInfo[1].label} txtInfo={basicInfo[1].txtInfo} />
        </InfoTableContainer>
    </React.Fragment>
    );
}


export default BasicInfo;