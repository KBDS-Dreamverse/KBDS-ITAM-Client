import React, { useEffect, useState } from 'react';
import Modal from '../../../../components/ui/Modal/Modal';
import { ModalContentWrapper } from '../../../../components/ui/Modal/Modal.style';
import COMPANY_INFO from '../../../../constants';
import { companyInfos } from '../../../../utils/data';
import * as S from './CompanyModal.style';

export default function CompanyModal({ onClose, id, workFor }) {
  console.log(workFor, id);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (workFor === 'add') setMessage('등록');
    if (workFor === 'revise') setMessage('수정');
  });

  const renderModalContent = () => {
    if (workFor === 'add') {
      const listItems = COMPANY_INFO.map((el) => (
        <S.Li>
          <S.Label htmlFor={el.eng}>{el.kor}</S.Label>
          <S.Input type='text' id={el.eng}></S.Input>
        </S.Li>
      ));
      return (
        <S.Ul>
          <S.Fieldset>
            <S.Label htmlFor='계열사 구분'>계열사 구분</S.Label>
            <S.Label>
              <S.Input type='radio' name='계열사 구분' value='Y' checked />
              <S.Span>Y</S.Span>
            </S.Label>
            <S.Label>
              <S.Input type='radio' name='계열사 구분' value='N' />
              <S.Span>N</S.Span>
            </S.Label>
          </S.Fieldset>
          {listItems}
        </S.Ul>
      );
    }
    if (workFor === 'revise') {
      const company = companyInfos[id - 1];
      return (
        <S.Ul>
          <S.Fieldset>
            <S.Label htmlFor='계열사 구분'>계열사 구분</S.Label>
            <S.Label>
              <S.Input type='radio' name='계열사 구분' value='Y' checked />
              <S.Span>Y</S.Span>
            </S.Label>
            <S.Label>
              <S.Input type='radio' name='계열사 구분' value='N' />
              <S.Span>N</S.Span>
            </S.Label>
          </S.Fieldset>
          <S.Li>
            <S.Label htmlFor='업체명'>업체명</S.Label>
            <S.Input value={company.unitCompany.name}></S.Input>
          </S.Li>
          <S.Li>
            <S.Label htmlFor='사업자 번호'>사업자 번호</S.Label>
            <S.Input value={company.unitCompany.num}></S.Input>
          </S.Li>
          <S.Li>
            <S.Label htmlFor='대표자'>대표자</S.Label>
            <S.Input value={company.unitCompany.head}></S.Input>
          </S.Li>
          <S.Li>
            <S.Label htmlFor='업체 연락처'>업체 연락처</S.Label>
            <S.Input value={company.unitCompany.phone}></S.Input>
          </S.Li>
          <S.Li>
            <S.Label htmlFor='주소'>주소</S.Label>
            <S.Input value={company.unitCompany.address}></S.Input>
          </S.Li>
        </S.Ul>
      );
    }
  };

  return (
    <Modal title={`업체 정보 ${message}`} onClose={onClose}>
      <ModalContentWrapper>
        {renderModalContent()}
        <S.ModalButton onClick={onClose}>{`업체 ${message}`}</S.ModalButton>
      </ModalContentWrapper>
    </Modal>
  );
}
