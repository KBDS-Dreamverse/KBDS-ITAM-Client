import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 401.62px;
  height: 66.493px;

  border: 0.484px solid #000;
  background: #fff;
`;
export const FileterContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterLabel = styled.label`
  color: #000;
  font-family: ABeeZee;
  font-size: 9.672px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const FilterInput = styled.input`
  background: #d9d9d9;
  height: 15.958px;
`;

export const PeriodLabel = styled(FilterLabel)``;
export const ProductName = styled.div``;

export const SearchButton = styled.button`
  width: 37.236px;
  height: 17.893px;
  background: #d9d9d9;
`;
