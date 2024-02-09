import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column; /* 컨테이너 내부 요소들을 세로로 배치합니다. */
  justify-content: center;
  align-items: center;
  padding: 5% 10%; /* 상하좌우 모두 5%의 패딩 적용 */
  background: #FAB809; /* 배경 색상 설정 */
  height:100%
  color: #000;
  text-align: center; /* 텍스트 가운데 정렬 */
  font-family: pretendard;
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 65.139px */
  min-height: 100vh; /* 최소 높이를 화면의 전체 높이로 설정합니다. */
  
`;

export const Title = styled.div`
  display: flex;
  width: 1100px;
  height: 80px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center; /* 텍스트 가운데 정렬 */
  margin: 0 auto; /* 수평 가운데 정렬 */
  font-family: pretendard;
  font-size: 75px;
  font-style: normal;
  font-weight: 540;
  line-height: normal;
`;

export const Detail = styled.div`
  display: flex;
  width: 700px;
  height: 140px;
  flex-shrink: 0;
  flex-direction: column;
  color: #000;
  justify-content: center;
  text-align: center; /* 텍스트 가운데 정렬 */
  margin: 0 auto; /* 수평 가운데 정렬 */
  font-family: pretendard;
  font-size: 20px;
  font-weight: 400;
  line-height: 140%;
`;

export const Input = styled.input`
  width: 600px;
  height: 90px;
  border-radius: 5px;
  border: 1.158px solid #000;
  font-size: 30px;
  padding-left : 20px;
  background: #FFF;
`;

export const LoginBtn = styled.button`
  width: 230px;
  height: 90px;
  border-radius: 5.79px;
  background: #000;
  color: #FFF;
  text-align: center; /* 텍스트 가운데 정렬 */
  font-family: pretendard;
  font-size: 27.793px;
  font-weight: 400;
  line-height: normal;
  margin-left : 20px;
`;

export const BackImg = styled.img`
  padding: 0 10px;
  margin-top: 100px;
  object-fit: cover; /* 이미지를 컨테이너에 맞게 조절합니다. */
`;
