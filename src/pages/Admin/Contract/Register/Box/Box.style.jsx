import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 0.299px solid #000;
  background: #fff;

  width: 550px;
  margin-left: 154px;
`;

export const Title = styled.h2`
  width: 100%;
  color: #000;
  font-family: pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 10px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  justify-content: center;
`;
export const Content = styled.div``;

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

// export const Label = styled.label`
//   display: flex;
//   align-items: center;

//   color: #000;
//   width: 146px;
//   font-family: pretendard;
//   font-size: 17.007px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
// `;

export const Label = styled.label`
  color: #000;
  font-family: pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0 10px 2px 0;
`;
export const Input = styled.input`
  border: 1px solid black;

  text-align: left;

  font-family: pretendard;
  font-size: 12px;
`;
