
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
  background: #F8F9FA;
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
background:#FFF;
`

export const LicNamesContainer = styled.div`
  display: flex; // 항목들을 가로로 나열
  justify-content: flex-start; // 컨테이너 내에서 좌측 정렬
  align-items: flex-start; // 항목들을 수직 방향으로 상단 정렬
  font-size: 24px; // 글자 크기
  color: #333; // 글자 색상
`;

export const LicValContainer = styled.div`
  display: flex;
  flex-direction: column; // 내부 항목들을 수직으로 나열
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 16px;
  color: #333;

  // 내부 div에 대한 스타일
  div {
    margin: 5px 0; // 각 줄 사이의 여백
  }
`;
export const Message = styled.p`
  font-size: 1em; // 적당한 글자 크기로 조정하세요.
  text-align: center; // 가운데 정렬
  // 기타 스타일링...
`;


export const ChartContainer = styled.div`
  width: 400px; // 원하는 너비로 조절
  height: 400px; // 원하는 높이로 조절
  display: flex;
  justify-content: center;
  align-items: center;
`;
