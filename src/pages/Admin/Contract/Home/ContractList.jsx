import * as S from './ContractList.style';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { contractInfos } from '../../../../utils/data';
import SearchFilter from '../../../../components/ui/SearchFilter/SearchFilter';

export default function ContractList() {
  const navigate = useNavigate();

  const renderContractRows = () => {
    const listItems = contractInfos.map((el) =>
      el.id === 'C000002' ? null : (
        <S.Li
          onDoubleClick={() => {
            navigate(`/admin/contract/${el.id}/detail`);
          }}
        >
          <S.Name>{el.unitContract.name}</S.Name>
          <S.AssetName>{el.unitContract.assetName}</S.AssetName>
          <S.Company>{el.unitContract.company}</S.Company>
          <S.Manager>{el.unitContract.manager}</S.Manager>
          <S.Cost>{el.unitContract.cost}</S.Cost>
          <S.StartDate>{el.unitContract.startDate}</S.StartDate>
          <S.EndDate>{el.unitContract.endDate}</S.EndDate>
        </S.Li>
      ),
    );
    return <S.Ul>{listItems}</S.Ul>;
  };

  return (
    <S.Wrapper>
      <S.ConditionWrapper>
        <S.CategoryTab>
          <S.CategoryContainer>
            <S.CategoryName>모든 계약</S.CategoryName>
            <S.CategoryCount>1개</S.CategoryCount>
          </S.CategoryContainer>
          <S.CategoryContainer>
            <S.CategoryName>라이센스</S.CategoryName>
            <S.CategoryCount>1개</S.CategoryCount>
          </S.CategoryContainer>
          <S.CategoryContainer>
            <S.CategoryName>기타 계약</S.CategoryName>
            <S.CategoryCount>0개</S.CategoryCount>
          </S.CategoryContainer>
        </S.CategoryTab>

        <S.FilterContainer>
          <SearchFilter />
        </S.FilterContainer>
      </S.ConditionWrapper>

      <S.ListWrapper>
        <S.ListHeader>
          <S.Name>계약명</S.Name>
          <S.AssetName>계약대상자산</S.AssetName>
          <S.Company>계약업체</S.Company>
          <S.Manager>계약 담당자</S.Manager>
          <S.Cost>가격</S.Cost>
          <S.StartDate>계약 시작일</S.StartDate>
          <S.EndDate>계약 종료일</S.EndDate>
        </S.ListHeader>
        <S.ListBody>{renderContractRows()}</S.ListBody>
      </S.ListWrapper>

      <S.ButtonWrapper>
        <S.AddButton onClick={() => navigate('/admin/contract/register')}>
          계약 등록
        </S.AddButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
