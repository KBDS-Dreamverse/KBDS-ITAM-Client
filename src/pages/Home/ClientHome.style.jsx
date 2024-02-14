import styled from 'styled-components';

export const HomeWrapper = styled.div`
width: 100%;
height: 100%;
display:flex;
flex-direction: column;
justify-content: center;
align-content: center;
background: #F8F9FA;
font-family: Pretendard;

align-items: center; /* 수직 가운데 정렬 */
`;
export const Main = styled.div`
  width: calc(100% - 201px); /* 사이드바의 너비를 빼고 나머지 부분을 차지하도록 설정 */
  margin-left : 201px;
  background: #F8F9FA;
  padding-top : 30px;
  height: 100%;


`;
export const TopContainer = styled.div`
margin : 0px 50px;
background : #F8F9FA;
height: 50%;
display :flex;
flex-direction: row;
justify-content: center;
align-content: center;

`
export const UserInfo = styled.div`
width : 20%;
margin : 0px 30px;
display: flex;
flex-direction: column;
background : #FFF;
border-radius:20px;
height : 100%;
font-family: pretendard;
justify-content: center; /* 수평 가운데 정렬 */
align-items: center; /* 수직 가운데 정렬 */
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.22);


// &:hover {
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
`
export const UserImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit : cover;
  border-radius: 50%; /* 50%로 설정하여 이미지를 동그랗게 만듭니다. */
`;
export const UserName = styled.text`
margin-top : 20px;
font-weight: 600;
font-size: 40px;
`
export const UserNumber = styled.text`
margin : 10px;
font-weight: 400;
font-size:15px;
`
export const userDept = styled.text`
font-size: 20px;
margin-bottom :10px;
font-weight:500;
`
export const BoardBox = styled.div`
margin-left : 50px;
width : 60%;
height : 100%;
display : flex;
flex-direction: column;
`
export const Board = styled.div`
height : 50%;
margin : 20px 0px;
padding : 15px;
background : #FFF;
border-radius:20px;
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
display :flex;
flex-direction: column;
`;

export const BottomContainer = styled.div`
margin : 40px 50px;
background : #F8F9FA;
height: 30%;
display :flex;
flex-direction: row;
justify-content: center;
align-content: center;
`
export const BottomBoard = styled.div`
margin : 0px 30px;
width : 63%;
padding : 15px;
background : #FFF;
border-radius:20px;
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
display :flex;
flex-direction: column;
`;
export const ButtonBox = styled.div`
margin : 0px 0px 0px 50px;
width : 15%;
display : flex;
flex-direction: column;
justify-content: center; /* 내용을 수평으로 가운데 정렬 */
align-content: center;
`;
export const Button =styled.button`
height: 40%;
width: 80%;
border-radius: 5.79px;
background: #FAB809;
color: #000;
margin : 10px;
font-family: Pretendard;
font-size: 23px;
font-weight: 500;
justify-content: center; /* 내용을 수평으로 가운데 정렬 */
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
&:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

`
export const BoardTitle = styled.text`
font-size : 20px;
margin : 5px 0px 0px 20px;
font-family : Pretendard;
font-weight: 600;
`
export const BoardContent = styled.text`
font-size : 15px;
margin-left : 30px;
font-family : Pretendard;
font-weight: 400;
margin-bottom : 15px;
`
export const HorizontalLine = styled.hr`
border: 0;
height: 1px;
background: #333; /* 선의 색상을 여기에 지정하세요 */
margin: 15px 20px; /* 원하는 여백을 지정하세요 */
`;
export const TitleButton = styled.button`
color : #438EAD;
float: right;
margin-right : 20px;
`