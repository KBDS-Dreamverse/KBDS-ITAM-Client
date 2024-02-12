import styled from 'styled-components';
import Button160 from '../../../components/atoms/Button160';

export const Wrapper = styled.div`
  width: 90%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const Title = styled.div`
  color: #000;
  font-family: pretendard;
  font-size: 28.648px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 20px;
`;

export const CategoryBar = styled.div`
  background: #d9d9d9;
  display: flex;
  justify-content: space-around;
  align-content: center;
  border-radius: 4px;
`;
export const CategoryName = styled.button`
  color: #000;
  padding: 8px 60px;
  text-align: center;
  font-family: pretendard;
  font-size: 20.054px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:focus {
    font-weight: 700;
  }
`;
export const ListWrapper = styled.div`
  background: white;
  margin-top: 20px;
  height: 50vh;
`;
export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-top: 3px solid rgba(0, 0, 0, 0.49);
  border-bottom: 3px solid rgba(0, 0, 0, 0.49);
`;

export const ListBody = styled.div`
  width: 100%;
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  algin-content: center;
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  algin-content: center;
  padding: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.29);
`;
export const ListElement = styled.div`
  color: #000;
  font-family: pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const Name = styled(ListElement)`
  width: 120px;
`;
export const Num = styled(ListElement)`
  width: 116px;
`;
export const Head = styled(ListElement)`
  width: 116px;
`;
export const Phone = styled(ListElement)`
  width: 130px;
`;
export const Address = styled(ListElement)`
  width: 360px;
  box-sizing: border-box;
`;

export const ButtonWrapper = styled.div`
  padding: 10px;
  text-align: center;
`;
export const AddButton = styled(Button160)`
  display: inline-block;
`;
