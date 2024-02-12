import styled from 'styled-components';
import Button160 from '../../../../components/atoms/Button160';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  algin-content: center;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  algin-content: center;
  padding: 8px;
`;

export const Label = styled.label`
  color: #000;
  width: 108px;
  font-family: pretendard;
  font-size: 17.007px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Input = styled.input`
display:flex;
padding: 6px 8px
  border: 0.05px solid #000;
  border-radius: 4px;
  background: rgba(217, 217, 217, 0);

  color: #000;
  font-family:pretendard;
  font-size: 12.148px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const AddButton = styled(Button160)`
  margin-top: 30px;
`;
