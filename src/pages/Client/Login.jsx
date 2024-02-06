import React from "react";
import styled from "styled-components";
export default function Login(){
    return(
        <>
        <Container>
            <Title>KB 금융그룹 IT Asset 관리 포털</Title>
            <Detail>KB 금융그룹의 모든 SW ASSET을 관리할 수 있는 포털입니다.</Detail>
            <Input
                    type="tel"
                    placeholder="전화번호를 작성해주세요 (띄어쓰기 없이 숫자만 입력)"
                />
        </Container>
        </>
    );
}

const Container = styled.div`
display: flex;

text-align: center;
padding-left: 200px;
padding-right: 200px;
padding-top: 200px;
background: #FAB809;
height: calc(100vh - 120px);

`;
const Title = styled.div`
display: flex;
width: 1089.71px;
height: 78.924px;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
color: #000;

text-align: center;
font-family: Roboto;
font-size: 80.114px;
font-style: normal;
font-weight: 550;
line-height: normal;
`
const Detail = styled.div`
display: flex;
width: 700.627px;
height: 70.617px;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
color: #000;

text-align: center;
font-family: Roboto;
font-size: 20.845px;
font-style: normal;
font-weight: 400;
line-height: 140.625%; /* 29.313px */
`
const Input =styled.div`
border-radius: 5.79px;
border: 1.158px solid #000;

background: #FFF;
`