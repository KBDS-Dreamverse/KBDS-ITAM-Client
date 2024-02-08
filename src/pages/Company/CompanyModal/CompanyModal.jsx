import React from 'react';
import Modal from '../../../components/ui/Modal/Modal';
import { ModalContentWrapper } from '../../../components/ui/Modal/Modal.style';
import COMPANY_INFO from '../../../constants';
import * as S from './CompanyModal.style';

export default function CompanyModal({ onClose, id, workFor }) {
  console.log(workFor);

  const renderAddModalContent = () => {
    const listItems = COMPANY_INFO.map((el) => (
      <S.Li>
        <S.Label htmlFor={el.eng}>{el.kor}</S.Label>
        <S.Input type='text' id={el.eng}></S.Input>
      </S.Li>
    ));
    return <S.Ul>{listItems}</S.Ul>;
  };
  // const renderReviseModalContent = () => {
  //   const listItems = companyInfos[id - 1];

  //   return <ul>{listItems()}</ul>;
  // };

  return (
    <Modal title='업체 추가하기' onClose={onClose}>
      <ModalContentWrapper>
        {renderAddModalContent()}
        <S.AddButton>업체 등록</S.AddButton>
      </ModalContentWrapper>
    </Modal>
  );
}
