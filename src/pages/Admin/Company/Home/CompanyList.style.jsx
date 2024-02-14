import styled from 'styled-components';
import Button160 from '../../../../components/atoms/Button160';

export const Wrapper = styled.div`
  width: 92%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  align-items: center;
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
  margin-top: 20px;
`;
export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-top: 3px solid rgba(0, 0, 0, 0.49);
  border-bottom: 3px solid rgba(0, 0, 0, 0.49);
  background: white;
  padding-right: 24px;
`;

export const ListBody = styled.div`
  width: 100%;
  height: 52vh;
  overflow: scroll;
  background: white;
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  algin-content: center;
`;

export const Li = styled.li`
  box-sizing: border-box;

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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const Name = styled(ListElement)`
  width: 23%;
`;
export const Num = styled(ListElement)`
  width: 15%;
`;
export const Head = styled(ListElement)`
  width: 15%;
`;
export const Phone = styled(ListElement)`
  width: 15%;
`;
export const Address = styled(ListElement)`
  width: 32%;
`;

export const ButtonWrapper = styled.div`
  padding: 16px;
  text-align: center;
`;
export const AddButton = styled(Button160)`
  display: inline-block;
`;
