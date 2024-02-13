import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 3.218px solid #000;
  background: #fff;
`;

export const Top = styled.section`
  box-sizing: border-box;
  border-bottom: 1px solid black;
  display: flex;
  margin-right: auto;
  padding: 20px;
  width: 100%;
`;
export const Body = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Left = styled.div`
  border-right: 1px solid black;
  width: 40%;
`;
export const Middle = styled.div`
  border-right: 1px solid black;
  width: 30%;
`;
export const Right = styled.div`
  width: 30%;
`;

export const Title = styled.div`
  color: #000;
  font-family: pretendard;
  font-size: 28.648px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-top: 20px;
`;

export const Label = styled.label`
  color: #000;
  font-family: pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 2px;
`;
export const Input = styled.input`
  height: 28px;
  background: #d9d9d9;
  border: none;
`;
export const LongInput = styled(Input)`
width
`;
export const ShortInput = styled(Input)``;
export const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  algin-content: center;
  padding: 4px;
`;
export const HistoryLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  algin-content: center;
  padding: 3px;
`;
export const HistoryManIcon = styled.div`
  width: 22.082px;
  height: 23.362px;
  background-color: #ff7575;
`;
export const HistoryTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  algin-content: flex-start;
`;
export const HistoryManager = styled.h4`
  color: #000;
  font-family: pretendard;
  font-size: 12.801px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const HistoryH5 = styled.h5``;
export const HistoryH6 = styled.h6`
  color: #000;
  font-family: pretendard;
  font-size: 8.001px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;
export const Button = styled.button`
  display: flex;
`;
