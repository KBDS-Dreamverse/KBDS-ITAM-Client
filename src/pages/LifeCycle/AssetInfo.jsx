import React from "react";
import * as S from "./AssetInfo.style"



export default function AssetInfo() {
    

    return(
        <S.Wrapper>
            <S.Main>
                <S.Header>
                <S.HeaderTitle>자동차 보험 관리 시스템</S.HeaderTitle>
                    <S.HeaderButton>KB DEV 포럼에 질문하기</S.HeaderButton>
                    <S.HeaderButton>이슈 제보하기</S.HeaderButton>
                </S.Header>
                <S.Text> 공급자|이용상태 </S.Text>
            </S.Main>
        </S.Wrapper>
    )

}


