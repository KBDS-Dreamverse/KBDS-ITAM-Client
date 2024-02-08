import React from 'react';
import styled from 'styled-components';

export default function UnitCompanyRow({ id, unitCompany }) {
  const { name, num, head, phone, address } = unitCompany;
  return (
    <RowWrapper>
      <Name>{name}</Name>
      <Num>{num}</Num>
      <Head>{head}</Head>
      <Phone>{phone}</Phone>
      <Address>{address}</Address>
    </RowWrapper>
  );
}

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
