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

export const Table = styled.table`
    margin-left : 100px;
    margin-top: 30px;
    flex-grow: 1; /* 텍스트가 남은 공간을 모두 차지하도록 설정 */
    font-size: 20px; // 적당한 글자 크기로 조정하세요.
    text-align: left;
    line-height: 1.5
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #b0b0b0; 
    border-bottom: 1px solid #b0b0b0;
    width: 80%
`;
export const tbody = styled.tr`
  border-bottom: 1px solid #b0b0b0;
`;

export const TableRow = styled.tr`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #b0b0b0;
    line-height: 1.5
    
`;

export const TableRowLast = styled.tr`
    display: flex;
    justify-content: space-between;
`;

export const TableHeader = styled.th`
    width: 300px;
    background-color: #f0f0f0;
    font-weight: bold;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    padding: 20px;
`;




export const Text = styled.div`
margin-left: 10px;
margin-right: 10px;

`;


export const DateRange = styled.p`
    font-size: 32px; // 글자 크기를 적당히 조정하세요.
    font-weight: bold; // bold체 적용
    margin-bottom: 32px;
  // 날짜 범위 스타일
`;

export const RemainingDays = styled.p`
  color: red;
  font-weight: bold;
  margin-bottom: 32px;
  // 남은 일수 스타일
`;

export const Question = styled.p`
  margin-top: 32px;
  // 질문 스타일
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  // 버튼 그룹 스타일
`;

export const Button = styled.button`
  padding: 10px 20px;
  // 버튼 스타일
`;

export const Message = styled.p`
  font-size: 1em; // 적당한 글자 크기로 조정하세요.
  text-align: center; // 가운데 정렬
  // 기타 스타일링...
`;

export const SubDescription = styled.p`
    margin-left : 100px;
    margin-top: 20px;
    flex-grow: 1; /* 텍스트가 남은 공간을 모두 차지하도록 설정 */
    font-size: 19px; // 적당한 글자 크기로 조정하세요.
    text-align: left;
    width: 80%
    
`; 

export const Description = styled.p`
    margin-left : 100px;
    margin-top: 30px;
    flex-grow: 1; /* 텍스트가 남은 공간을 모두 차지하도록 설정 */
    font-size: 25px; // 적당한 글자 크기로 조정하세요.
    text-align: left;
    line-height: 1.5;
    width: 80%
`;
export const SpdDescription = styled.p`
    margin-left : 100px;
    margin-top: 30px;
    flex-grow: 1; /* 텍스트가 남은 공간을 모두 차지하도록 설정 */
    font-size: 28px; // 적당한 글자 크기로 조정하세요.
    text-align: left;
    line-height: 1.3;
    width: 80%
`;
export const VersionDes = styled.p`
    margin-left : 100px;
    margin-top: 30px;
    flex-grow: 1; /* 텍스트가 남은 공간을 모두 차지하도록 설정 */
    font-size: 20px; // 적당한 글자 크기로 조정하세요.
    text-align: left;
    line-height: 1.5
    width: 80%   
`;

export const pastVer = styled.p`
    text-align: right;
    margin-left : 100px;
    font-size: 20px; // 적당한 글자 크기로 조정하세요.
`;

export const toButton =styled.p`
    width: 100px;
    height: 40px;
    border-radius: 5.79px;
    background: #B0C4DE;
    color: #000;
    margin : 15px;
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 500;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
  `;

  export const AssetInfoImg = styled.img`
  width : auto;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit : cover;
  `; 