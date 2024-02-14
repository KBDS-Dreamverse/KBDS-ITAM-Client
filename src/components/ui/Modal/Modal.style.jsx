import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);

  width: 740px;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  background-color: white;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 36px 0px 18px 60px;

  height: 48px;
  margin-bottom: '20px';
`;

export const ModalTitle = styled.h2`
  width: 100%;
  color: #000;
  font-family: pretendard;
  font-size: 24.296px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CloseButton = styled.button`
  display: flex;
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  padding: 0px 70px 34px 70px;
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  justify-content: center;
`;
