import * as S from './AssetList.style';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { assetInfos } from '../../../utils/data';
import SearchFilter from '../../../components/ui/SearchFilter/SearchFilter';

export default function AssetList() {
  const navigate = useNavigate();

  const renderAssetRows = () => {
    const listItems = assetInfos.map((el) => (
      <S.Li>
        <S.Name>{el.unitAsset.name}</S.Name>
        <S.Division>{el.unitAsset.division}</S.Division>
        <S.Tag>{el.unitAsset.tag}</S.Tag>
        <S.Category>{el.unitAsset.category}</S.Category>
        <S.Cost>{el.unitAsset.cost}</S.Cost>
        <S.Version>{el.unitAsset.version}</S.Version>
        <S.Manager>{el.unitAsset.manager}</S.Manager>
        <S.Date>{el.unitAsset.date}</S.Date>
      </S.Li>
    ));
    return <S.Ul>{listItems}</S.Ul>;
  };

  return (
    <S.Wrapper>
      <S.ConditionWrapper>
        <S.CategoryTab>
          <S.CategoryContainer>
            <S.CategoryName>패키지 SW</S.CategoryName>
            <S.CategoryCount>77개</S.CategoryCount>
          </S.CategoryContainer>
          <S.CategoryContainer>
            <S.CategoryName>클라우드 서비스</S.CategoryName>
            <S.CategoryCount>50개</S.CategoryCount>
          </S.CategoryContainer>
        </S.CategoryTab>

        <S.FilterContainer>
          <SearchFilter />
        </S.FilterContainer>
      </S.ConditionWrapper>

      <S.ListWrapper>
        <S.ListHeader>
          <S.Name>제품명</S.Name>
          <S.Division>구분</S.Division>
          <S.Tag>태그</S.Tag>
          <S.Category>카테고리</S.Category>
          <S.Cost>가격</S.Cost>
          <S.Version>버전</S.Version>
          <S.Manager>담당자</S.Manager>
          <S.Date>등록일</S.Date>
        </S.ListHeader>
        <S.ListBody>{renderAssetRows()}</S.ListBody>
      </S.ListWrapper>

      <S.ButtonWrapper>
        <S.AddButton onClick={() => navigate('/admin/asset/register')}>
          자산 등록
        </S.AddButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

{
  /* <S.ListWrapper>
        <S.ListHeader>
          <S.Name>제품명</S.Name>
          <S.Division>구분</S.Division>
          <S.Tag>태그</S.Tag>
          <S.Category>카테고리</S.Category>
          <S.Cost>가격</S.Cost>
          <S.Version>버전</S.Version>
          <S.Manager>담당자</S.Manager>
          <S.Manual>메뉴얼</S.Manual>
          <S.Company>제공 업체</S.Company>
        </S.ListHeader>
        <S.ListBody>{renderAssetRows()}</S.ListBody>
      </S.ListWrapper> */
}
