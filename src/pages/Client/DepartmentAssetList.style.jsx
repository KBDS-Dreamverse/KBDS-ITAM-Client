import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
height: 100%;
display:flex;
flex-direction: column;

align-content: center;
background: #F8F9FA;
font-family: Pretendard;

align-items: center; /* 수직 가운데 정렬 */

`
export const Main = styled.div`
width: calc(100% - 201px); /* 사이드바의 너비를 빼고 나머지 부분을 차지하도록 설정 */
margin-left : 201px;
background: #F8F9FA;
padding-top : 20px;
height: 100%;


`;
export const Header = styled.div`
display: flex;
flex-direction: row; /* 텍스트와 버튼을 수평으로 배치 */

margin :0px 20px;
font-family: Pretendard;
font-size: 45px;
font-style: normal;
font-weight: 400;

align-items: center; /* 수직 가운데 정렬 */


`
export const HeaderTitle =styled.div`
font-weight: 500;
margin-left : 30px; 
flex-grow: 1; /* 텍스트가 남은 공간을 모두 차지하도록 설정 */
`

export const HeaderButton = styled.button`

width: 80px;
height: 25px;
border-radius: 50px;
margin : 10px 20px;
font-family: Pretendard;
font-size: 15px;
font-weight: 400;
box-shadow: 0px 7px 4px 0px rgba(0, 0, 0, 0.05);
`

export const UsingButton = styled(HeaderButton)`
background: #CADCFF;
color : #2C71F6;
`
export const AccessButton = styled(HeaderButton)`
background: #DDFFE4;
color : #17B530;
`
export const WaitButton = styled(HeaderButton)`
background: #FFF7E2;
color : #FFBE18;
`
export const DenyButton = styled(HeaderButton)`
background: #FFEDED;
color : #F73B3B;
`
export const NonuseButton = styled(HeaderButton)`
background: #D8D8DA;
color : #202020;
`
export const StopButton = styled(HeaderButton)`
background: #FFF;
color : #000;
`

export const SearchButton = styled(HeaderButton)`
background: #000;
color : #FFF;
margin-left : 800px;
justify-content: center;
display: flex;
flex-direction: row; /* 텍스트와 버튼을 수평으로 배치 */

align-items: center; /* 수직 가운데 정렬 */
align-content: center;
`


export const Body = styled.div`
margin: 20px 20px 20px 20px;
padding-top: 30px;
font-size: 25px;
overflow-y: auto;
height: 700px;
background:#FFF;
display: grid;
grid-template-columns: repeat(3, 1fr); /* 3개의 동일한 너비의 열 생성 */
grid-row-gap: 10px; /* 행 사이의 간격을 10px로 설정 */
`

export const SearchIcon = styled.img`
margin-left : 5px;
`;
export const Asset = styled.button`
width : 95%;
height: 50%;
margin : 10px 20px;
font-size : 80%;
border-radius : 10px;
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
overflow: hidden; /* 이미지가 컨테이너를 벗어나지 않도록 함 */
display :flex;
&:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

`
export const AssetImg = styled.img`
width : auto;
height: 100%;
aspect-ratio: 1 / 1;
object-fit : cover;
`
export const AssetName = styled.text`
font-size : 20px;
font-weight: 600;
margin: 5px 20px;
`
export const License = styled.text`
font-size : 13px;
margin-left : 20px;
`
export const AssetTextBox = styled.div`
display: flex;
flex-direction: column;
font-size : 14px;
text-align: left; /* 가운데 정렬이 아닌 왼쪽으로 정렬 */
`
export const Description = styled.text`
margin : 5px 20px;`