import React, { useContext, useEffect, useState } from 'react';
import TableForm from '../Components/TableForm';
import InfoTableContainer from './InfoTableContainer';
import ResultForm from '../Components/ResultForm';
import { appContext } from './AppMain';

const SizeInfo = (props) => {
    const [neckBack, setNeckBack] = useState(0);
    const [reglanSt, setReglanSt] = useState(0);
    const [sleeves, setSleeves] = useState(0); // 소매 나눔 수
    const [totalSts, setTotalSts] = useState(0); // 총 콧 수
    const [sleevesSts, setSleevesSts] = useState(0); // 소매 코수
    let context = useContext(appContext);

    useEffect(() => {
        let afterSts = context.afterSts;
        // 총 콧수 = 세탁후 코수 * (뒷목 둘레 /10)
        if(neckBack > 0){
            let totalSts = afterSts * (neckBack / 10);
            setTotalSts(totalSts);
            context.setTotalSts(totalSts);
        }
            
    }, [neckBack, context]);

    useEffect(() => {
        // 소매 콧수 = 총 콧수 / 소매 나눔 수
        if(totalSts > 0 && sleeves > 0){
            setSleevesSts((totalSts / sleeves).toFixed(2));
        }

    }, [totalSts, sleeves]);


    const handleChangeNeckBack = e => {
        setNeckBack(e.target.value);
        context.setNeckBack(e.target.value);
    }

    const handleChangeReglanSt = e => {
        setReglanSt(e.target.value);
    }

    const handleChangeSleeves = e => {
        setSleeves(e.target.value);
    }

    const sizeInfo = [
        {
            label: "뒷목 둘레",
            txtInfo: [
                {
                    id: "neckBack",
                    txtLabel: "뒷목 둘레를 입력하세요",
                    type: "number",
                    required: true,
                    onChange: handleChangeNeckBack,
                    endAdornment: "cm",
                }
            ],
        },
        
        {
            label: "레글런코",
            txtInfo: [
                {
                    id: "reglanSt",
                    txtLabel: "레글런코를 입력하세요",
                    type: "number",
                    required: true,
                    onChange: handleChangeReglanSt,
                    endAdornment: "코",
                },
            ],
        },
        {
            label: "소매 나눔 수",
            txtInfo: [
                {
                    id: "sleeves",
                    txtLabel: "소매 나눔 수를 입력하세요",
                    type: "number",
                    required: true,
                    onChange: handleChangeSleeves,
                    
                },
            ],
        },
    ];

    const resSts = [
        {
            label: "총 콧수",
            results: [
                {
                    id: "totalSt",
                    txtLabel: totalSts,
                    onChange: null,
                    endAdornment: "코",
                    variant: "filled",
                }
            ]
        },
        {
            label: "소매 콧수",
            results: [
                {
                    id: "sleevesSts",
                    txtLabel: sleevesSts,
                    onChange: null,
                    endAdornment: "코",
                    variant: "filled",
                }
            ]
        },
    ];
    
    return (
        <React.Fragment>
             <InfoTableContainer>
                 {
                     sizeInfo.map((info, idx) => (
                        <TableForm key={idx} label={info.label} txtInfo={info.txtInfo} />
                     ))
                 }
            </InfoTableContainer>

            <InfoTableContainer>
                {
                    resSts.map((res, idx) => (
                        <ResultForm key={idx} label={res.label} results={res.results} />
                    ))
                }
            </InfoTableContainer>
        </React.Fragment>
        );
}


export default SizeInfo;