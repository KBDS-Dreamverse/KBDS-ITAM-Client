import React, { useState } from 'react';
import * as S from './CompanyList.style';
import UnitCompanyRow from '../../components/ui/UnitCompanyRow/UnitCompanyRow';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useModal from '../../hooks/useModal';
import CompanyModal from './CompanyModal/CompanyModal';
import companyInfos from '../../utils/data';
import COMPANY_INFO from '../../constants';

export default function CompanyList() {
  const navigate = useNavigate();

  const [workFor, setWorkFor] = useState();
  const { isOpen, openModal, closeModal } = useModal();

  const renderCompanyRows = () => {
    const listItems = companyInfos.map((el) => (
      <Li
        onDoubleClick={() => {
          openModal();
          setWorkFor('revise');
        }}
      >
        <Name>{el.unitCompany.name}</Name>
        <Num>{el.unitCompany.num}</Num>
        <Head>{el.unitCompany.head}</Head>
        <Phone>{el.unitCompany.phone}</Phone>
        <Address>{el.unitCompany.address}</Address>
      </Li>
    ));
    return <Ul>{listItems}</Ul>;
  };

  return (
    <S.Wrapper>
      {isOpen && (
        <CompanyModal workFor={workFor} onClose={closeModal}></CompanyModal>
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

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  algin-content: center;
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  algin-content: center;
  padding: 8px;
`;

const RowWrapper = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.29);
`;

const RowElement = styled.div`
  color: #000;
  font-family: pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Name = styled(RowElement)`
  width: 120px;
`;
const Num = styled(RowElement)`
  width: 116px;
`;
const Head = styled(RowElement)`
  width: 116px;
`;
const Phone = styled(RowElement)`
  width: 130px;
`;
const Address = styled(RowElement)`
  width: 360 px;
`;
