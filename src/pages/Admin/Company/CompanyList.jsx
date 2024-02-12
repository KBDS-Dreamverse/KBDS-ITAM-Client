import React, { useState } from 'react';
import * as S from './CompanyList.style';
import UnitCompanyRow from '../../../components/ui/UnitCompanyRow/UnitCompanyRow';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useModal from '../../../hooks/useModal';
import CompanyModal from './CompanyModal/CompanyModal';
import companyInfos from '../../../utils/data';

export default function CompanyList() {
  const navigate = useNavigate();

  const [workFor, setWorkFor] = useState();
  const [companyID, setCompanyID] = useState();
  const { isOpen, openModal, closeModal } = useModal();

  const renderCompanyRows = () => {
    const listItems = companyInfos.map((el) => (
      <S.Li
        onDoubleClick={() => {
          openModal();
          setWorkFor('revise');
          setCompanyID(el.id);
        }}
      >
        <S.Name>{el.unitCompany.name}</S.Name>
        <S.Num>{el.unitCompany.num}</S.Num>
        <S.Head>{el.unitCompany.head}</S.Head>
        <S.Phone>{el.unitCompany.phone}</S.Phone>
        <S.Address>{el.unitCompany.address}</S.Address>
      </S.Li>
    ));
    return <S.Ul>{listItems}</S.Ul>;
  };

  return (
    <S.Wrapper>
      {isOpen && (
        <CompanyModal
          workFor={workFor}
          id={companyID}
          onClose={closeModal}
        ></CompanyModal>
      )}

      <S.Title>업체 관리</S.Title>
      <S.CategoryBar>
        <S.CategoryName>제조업체 관리</S.CategoryName>
        <img src='/assets/icon_divider.svg' alt='divider' />
        <S.CategoryName>계약업체 관리</S.CategoryName>
        <img src='/assets/icon_divider.svg' alt='divider' />
        <S.CategoryName>계열사 관리</S.CategoryName>
      </S.CategoryBar>

      <S.ListWrapper>
        <S.ListHeader>
          <S.Name>업체명</S.Name>
          <S.Num>사업자 번호 </S.Num>
          <S.Head>대표자</S.Head>
          <S.Phone>업체 연락처</S.Phone>
          <S.Address>주소</S.Address>
        </S.ListHeader>
        <S.ListBody>{renderCompanyRows()}</S.ListBody>
      </S.ListWrapper>

      <S.ButtonWrapper>
        <S.AddButton
          onClick={() => {
            openModal();
            setWorkFor('add');
          }}
        >
          업체 등록
        </S.AddButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
