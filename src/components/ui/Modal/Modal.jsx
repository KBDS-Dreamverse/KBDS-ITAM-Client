import React from 'react';

import * as S from './Modal.style';

export default function Modal({ title, children, onClose }) {
  return (
    <S.ModalBackdrop onClick={onClose}>
      <S.ModalContainer
        onClick={(e) => e.stopPropagation() /* 모달 밖 클릭 방지 */}
      >
        <S.ModalHeader>
          <S.ModalTitle>{title}</S.ModalTitle>
          <S.CloseButton type='button' onClick={onClose}>
            <img src='/assets/icon_close.svg' alt='닫기' />
          </S.CloseButton>
        </S.ModalHeader>

        {/* <S.CloseButton type='button' onClick={onClose}>
          <img src='/assets/icon_close.svg' alt='모달 닫기' />
        </S.CloseButton>
        <S.ModalHeader>
          <S.ModalTitle>{title}</S.ModalTitle>
        </S.ModalHeader> */}
        <S.ModalContent>{children}</S.ModalContent>
      </S.ModalContainer>
    </S.ModalBackdrop>
  );
}
