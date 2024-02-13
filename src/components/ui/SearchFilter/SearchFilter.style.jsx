import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  align-items: flex-start;

  border: 0.484px solid #000;
  background: #fff;
`;
export const FilterContents = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
`;

export const FilterLabel = styled.label`
  display: inline;
  padding: 0 4px;
  color: #000;
  font-family: pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const FilterInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #d9d9d9;
  height: 16px;
  border: none;
`;
export const LongInput = styled(FilterInput)`
  width: 80px;
`;
export const MediumInput = styled(FilterInput)`
  width: 44px;
`;
export const ShortInput = styled(FilterInput)`
  width: 16px;
`;

export const SearchButton = styled.button`
  border-radius: 4px;
  width: 38px;
  height: 18px;
  margin: 0 0 0 10px;

  background: #fab809;
  color: #fff;
  font-family: pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
