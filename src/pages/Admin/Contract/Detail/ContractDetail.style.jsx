import styled from 'styled-components';
import Button80 from '../../../../components/atoms/Button80';

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
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Left = styled.div`
  box-sizing: border-box;
  padding: 20px;
  border-right: 1px solid black;
  width: 50%;
`;
export const Right = styled.div`
  box-sizing: border-box;
  padding: 20px;
  width: 50%;
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

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
export const RowWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
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
  background: #d9d9d9;
  border: none;

  text-align: left;

  font-family: pretendard;
  font-size: 12px;
`;
export const DefaultInput = styled(Input)`
  width: 100%;
  height: 28px;
`;
export const MemoInput = styled(Input)`
  padding: 10px;
  height: 60px;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  algin-content: center;
  padding: 4px;
`;
export const HistoryContainer = styled.div`
  height: 200px;
  overflow: scroll;
`;
export const HistoryLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  algin-content: center;
  padding: 4px;
  border: 1px solid #d9d9d9;
  margin: 6px;
`;
export const HistoryManIcon = styled.div`
  width: 22.082px;
  height: 23.362px;
  background-color: #ff7575;
  border-radius: 100%;
`;
export const HistoryTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  algin-content: flex-start;
  padding-left: 10px;
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

export const FileDiv = styled.div`
  height: 70px;
  background: #d9d9d9;
  border: none;
  padding: 10px;

  text-align: left;
  color: gray;
  font-family: pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PButtonWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  algin-content: center;
`;

export const PlusButton = styled.button`
  display: flex;
  border-radius: 4px;
  width: 50px;
  background-color: #999999;
  color: black;
  padding: 4px;
  display: flex;
  justify-content: center;
  algin-content: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
  margin-right: 20px;
`;
export const Button = styled(Button80)`
  display: flex;
  border-radius: 4px;
  background-color: #fab809;
  color: white;
`;
