import React from "react";
import styled from "styled-components";
export default function Login(){
    return(
        <>
        <Container>
            <div>
            <Title>
                KB 금융그룹 IT Asset 관리 포털</Title>
            <Detail>KB 금융그룹의 모든 SW ASSET을 관리할 수 있는 포털입니다.</Detail>
            사번 : <Input
                    type="text"
                />
            
            <LoginBtn>로그인</LoginBtn>
            <backImg  src= '/assets/main_img.svg'></backImg>
            </div>
        </Container>
        </>
    );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5% 10%; /* 상하좌우 모두 5%의 패딩 적용 */
  background: #FAB809; /* 배경 색상 설정 */
  min-height: calc(100vh - 120px); /* 최소 높이 설정 */

  font-color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 65.139px */
`;

const Title = styled.div`
display: flex;
width: 1100px;
height: 80px;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
color: #000;

text-align: center;
font-family: Roboto;
font-size: 75px;
font-style: normal;
font-weight: 540;
line-height: normal;
`
const Detail = styled.div`
display: flex;
width: 700px;
height: 70px;
flex-shrink: 0;
flex-direction:column;
color: #000;
justify-content: center;

font-family: Roboto;
font-size : 20px;
text-align : center;
font-weight:400;
line-height:140%
`
const Input =styled.input`
width: 600px;
height: 90px;
border-radius: 5px;
border: 1.158px solid #000;
font-size : 30px;
text-align:center;

margin-right: 10px; /* 입력란 아래에 공백 추가 */
background: #FFF;
`
const LoginBtn=styled.button`
width: 230px;
height: 90px;
flex-shrink: 0;
border-radius: 5.79px;
background: #000;
color: #FFF;

text-align: center;
font-family: Roboto;
font-size: 27.793px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const backImg=styled.img`
padding 0 10px ;
`