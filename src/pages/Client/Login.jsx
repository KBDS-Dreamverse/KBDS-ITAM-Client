import React from "react";
import * as S from "./Login.style"

export default function Login(){
    return(
        <>
        <S.Container>
            <div>
            <S.Title>
                KB 금융그룹 IT Asset 관리 포털</S.Title>
            <S.Detail>KB 금융그룹의 모든 SW ASSET을 관리할 수 있는 포털입니다.</S.Detail>
            사번 : <S.Input
                    type="text"
                />
            
            <S.LoginBtn>로그인</S.LoginBtn>
            <S.BackImg  src= '/assets/login_background.svg'></S.BackImg>
            </div>
        </S.Container>
        </>
    );
}