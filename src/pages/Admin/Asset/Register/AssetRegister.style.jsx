import styled from 'styled-components';
import Button160 from '../../../../components/atoms/Button160';
import Button80 from '../../../../components/atoms/Button160';

export const Wrapper = styled.div`
  width: 92%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 3.218px solid #000;
  background: #fff;
`;
export const Title = styled.div`
  color: #000;
  font-family: pretendard;
  font-size: 28.648px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-top: 20px;

  display: flex;
  text-align: left;
  margin-right: auto;
  margin-left: 100px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  algin-content: center;

  padding: 20px;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  algin-content: center;
  padding: 8px;
`;
export const Fieldset = styled.fieldset`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  algin-content: center;
  padding: 8px;
`;
export const Span = styled.span`
  display: flex;
  color: #000;
  font-family: pretendard;
  font-size: 17.007px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  vertical-align: middle;
  text-align: center;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;

  color: #000;
  width: 108px;
  font-family: pretendard;
  font-size: 17.007px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 420px;
`;

export const Input = styled.input`
  display: flex;
  padding: 6px 0 6px 8px;

  height: 0.8rem;
  line-height: 0.8rem;

  color: #000;
  font-family: pretendard;
  font-size: 12.148px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  border: 0.286px solid #000;
  background: rgba(217, 217, 217, 0);
`;
export const Input300 = styled(Input)`
  width: 300px;
`;
export const Input380 = styled(Input)`
  width: 380px;
`;
export const Input400 = styled(Input)`
  width: 400px;
`;
export const Input410 = styled(Input)`
  width: 410px;
`;
export const Button120 = styled.button`
  width: 120px;
  display: flex;
  height: 28px;
  justify-content: center;
  align-items: center;
  text-align: center;

  border: none;
  background: #d9d9d9;
  color: black;
  cursor: pointer;

  text-align: center;
  font-family: pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const DropDownButton = styled.button`
  display: flex;
  width: 34px;
  height: 28px;
  justify-content: center;
  align-items: center;
`;
export const DropDownImg = styled.img`
  width: 34px;
  height: 28px;
`;

export const RegisterButton = styled(Button160)`
  margin-bottom: 30px;
`;
