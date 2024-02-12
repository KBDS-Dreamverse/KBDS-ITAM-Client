import styled from 'styled-components';
import Button160 from '../../../components/atoms/Button160';

export const Wrapper = styled.div`
  width: 92%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ConditionWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const CategoryTab = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 306.042px;
  border-bottom: 2px solid #000;
`;
export const CategoryContainer = styled.div`
  text-align: left;
  justify-content: flex-start;
  padding: 0 0 6px 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
`;
export const CategoryName = styled.button`
  color: #000;

  font-family: pretendard;
  font-size: 16.091px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:focus {
    font-weight: 700;
    color: #545045;
  }
`;
export const CategoryCount = styled.div`
  padding: 0 4px;
  color: #828181;
  font-family: pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const FilterContainer = styled.div`
  margin-left: auto;
`;

export const ListWrapper = styled.section`
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
  width: 100%;
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
  width: 24%;
`;
export const Division = styled(ListElement)`
  width: 8%;
`;
export const Tag = styled(ListElement)`
  width: 8%;
`;
export const Category = styled(ListElement)`
  width: 16%;
`;
export const Cost = styled(ListElement)`
  width: 16%;
`;
export const Version = styled(ListElement)`
  width: 6%;
`;
export const Manager = styled(ListElement)`
  width: 8%;
`;
export const Manual = styled(ListElement)`
  width: 50px;
`;
export const Company = styled(ListElement)`
  width: 98px;
`;
export const Date = styled(ListElement)`
  width: 14%;
`;
export const ButtonWrapper = styled.div`
  padding: 24px;
  text-align: center;
`;
export const AddButton = styled(Button160)`
  display: inline-block;
`;
