import styled from "styled-components";
export const Wrapper = styled.div`
width: 100%;
display:flex;
flex-direction: column;
justify-content: center;
align-content: center;
background: #F8F9FA;
font-family: Pretendard;

align-items: center; /* 수직 가운데 정렬 */

`
export const Main = styled.div`
  width: calc(100% - 201px); /* 사이드바의 너비를 빼고 나머지 부분을 차지하도록 설정 */
  margin-left : 201px;
  background: #568956;
  padding-top : 30px;

`;
export const Header = styled.div`
display: flex;
flex-direction: row; /* 텍스트와 버튼을 수평으로 배치 */

margin :0px 20px;
font-family: Pretendard;
font-size: 45px;
font-style: normal;
font-weight: 400;

justify-content: center; /* 수평 가운데 정렬 */
align-items: center; /* 수직 가운데 정렬 */


`
export const HeaderTitle =styled.div`
font-weight: 500;
margin-left : 30px; 
flex-grow: 1; /* 텍스트가 남은 공간을 모두 차지하도록 설정 */
`

export const HeaderButton = styled.button`

width: 120px;
height: 50px;
border-radius: 5.79px;
background: #FAB809;
color: #000;
margin : 10px;
font-family: Pretendard;
font-size: 17px;
font-weight: 400;
justify-content: center; /* 내용을 수평으로 가운데 정렬 */
`

export const Body = styled.div`
margin :20px 20px 20px 50px;
padding-top : 30px;
font-size : 25px;
overflow-y: auto;
height : 700px;
background:#67748E;
`
export const Li = styled.li`
  display: flex;
  flex-direction: row;
  algin-content: center;
  margin-left : 100px;
  margin-bottom : 20px;
  padding: 8px;
`

export const Label = styled.label`
color: #000;
width: 108px;
font-family: pretendard;
font-size: 25px;
font-style: normal;
font-weight: 600;
line-height: normal;
`


export const InputDate = styled.input`
width : 250px;
height: 25px;
margin : 0px 10px;
border-radius: 3px;
border: 1px solid #000;

`
export const InputText = styled.input`
width : 700px;
height: 300px;
margin : 0px 10px;
vertical-align: top;
border-radius: 5px;
border: 1px solid #000;
font-size : 15px;
`
export const CheckBox = styled.text`
width : 700px;
height: 300px;
margin : 0px 10px;
font-size: 20px;
background : rgba(0, 0, 0, 0.10); 
border-radius: 5px;
border: 1px solid #000;

`


export const RequestButton =styled.button`

width: 120px;
height: 40px;
border-radius: 5.79px;
background: #4A483F;
color: #FFF;
margin : 10px;
font-family: Pretendard;
font-size: 17px;
font-weight: 400;
float: right;
`

