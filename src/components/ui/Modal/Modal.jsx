import React from 'react';

import * as S from './Modal.style';

export default function Modal({ title, descrip, children, onClose }) {
  return (
    <S.ModalBackdrop>
      <S.ModalContainer
        onClick={(e) => e.stopPropagation() /* 모달 밖 클릭 방지 */}
      >
        <S.ModalHeader>
          <S.ModalTitle>
            {title} {descrip ? `(${descrip})` : null}
          </S.ModalTitle>
          <S.CloseButton type='button' onClick={onClose}>
            <img src='/assets/icon_close.svg' alt='닫기' />
          </S.CloseButton>
        </S.ModalHeader>

        <S.ModalContent>{children}</S.ModalContent>
      </S.ModalContainer>
    </S.ModalBackdrop>
  );
}
