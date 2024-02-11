import React from "react";
import * as S from "./AssetRequest.style"
import { useNavigate } from 'react-router-dom';

// useEffect(() => {
//         //고객Id로 해당 고객 예약조회
//         axios
//             .get(`${API.BANKER_INQUIRY}`, {
//                 params: {
//                     bankId: bankId,
//                     taskId: taskId,
//                 },
//             })
//             .then((response) => {
//                 setSelectedBankers(response.data);
//             })
//             .catch((error) => {
//                 console.error("조회 에러:", error);
//             });
//     }, []); // 랜더링 상태가 바뀔때마다 새로 조회함

export default function AssetRequest() {
    return(
        <>
        <S.Wrapper>
            <S.Main>
                <S.Header>
                <S.HeaderTitle>자동차 보험 관리 시스템</S.HeaderTitle>
                    <S.HeaderButton>KB DEV 포럼에 질문하기</S.HeaderButton>
                    <S.HeaderButton>이슈 제보하기</S.HeaderButton>
                </S.Header>
                <S.Body>
                    <S.Li>
                    <S.Label>사용 기간 : </S.Label>
                    <S.InputDate></S.InputDate> ~ 
                    <S.InputDate></S.InputDate>
                    </S.Li>
                    <S.Li>
                    <S.Label>사용 사유 : </S.Label>
                    <S.InputText></S.InputText>
                    </S.Li>
                    <S.Li>
                    <S.Label>본인 정보 : </S.Label>
                    </S.Li>
                    <S.Li>
                    <S.Label>담당자 : </S.Label>
                    <S.CheckBox>
                    </S.CheckBox>
                    </S.Li>
                </S.Body>
                <S.RequestButton>요청하기</S.RequestButton>
            </S.Main>
        </S.Wrapper>
        </>
    )

}