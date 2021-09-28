import React, { useEffect, useState } from 'react';
import TableForm from '../Components/TableForm';
import InfoTableContainer from './InfoTableContainer';
import ResultForm from '../Components/ResultForm';

const SizeInfo = (props) => {
    const [neckBack, setNeckBack] = useState(0);
    const [reglanSt, setReglanSt] = useState(0);
    const [sleeves, setSleeves] = useState(0); // 소매 나눔 수
    const [totalSts, setTotalSts] = useState(0); // 총 콧 수
    const [sleevesSts, setSleevesSts] = useState(0); // 소매 코수

    useEffect(() => {
        // 총 콧수 = 세탁후 코수 * (뒷목 둘레 /10)
        if(neckBack > 0)
            setTotalSts(16 * (neckBack / 10));
    }, [neckBack]);

    useEffect(() => {
        // 소매 콧수 = 총 콧수 / 소매 나눔 수
        if(totalSts > 0 && sleeves > 0)
            setSleevesSts(totalSts / sleeves);

    }, [totalSts, sleeves]);


    const hadleChangencNeckBack = e => {
        setNeckBack(e.target.value);
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
                    required: true,
                    onChange: hadleChangencNeckBack,
                }
            ],
        },
        
        {
            label: "레글런코",
            txtInfo: [
                {
                    id: "reglanSt",
                    txtLabel: "레글런코 를 밉력하세요",
                    required: true,
                    onChange: handleChangeReglanSt,
                    
                },
            ],
        },
        {
            label: "소매 나눔 수",
            txtInfo: [
                {
                    id: "sleeves",
                    txtLabel: "소매 나눔 수를 입력하세요",
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
                    label: `${totalSts} 코`,
                    onChange: null,
                }
            ]
        },
        {
            label: "소매 콧수",
            results: [
                {
                    id: "sleevesSts",
                    label: `${sleevesSts} 코`,
                    onChange: null,
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