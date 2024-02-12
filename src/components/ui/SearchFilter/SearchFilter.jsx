import React from 'react';
import * as S from './SearchFilter.style';

export default function SearchFilter() {
  return (
    <S.FilterWrapper>
      <S.FilterContents>
        <S.FilterLabel>기간 : </S.FilterLabel>
        <S.MediumInput />
        <S.FilterLabel>년</S.FilterLabel>
        <S.ShortInput />
        <S.FilterLabel>월</S.FilterLabel>
        <S.ShortInput />
        <S.FilterLabel>일 ~ </S.FilterLabel>
        <S.MediumInput />
        <S.FilterLabel>년</S.FilterLabel>
        <S.ShortInput />
        <S.FilterLabel>월</S.FilterLabel>
        <S.ShortInput />
        <S.FilterLabel>일</S.FilterLabel>
      </S.FilterContents>
      <S.FilterContents>
        <S.FilterLabel>소프트웨어명 : </S.FilterLabel>
        <S.LongInput />
        <S.FilterLabel>카테고리 : </S.FilterLabel>
        <S.LongInput />
        <S.FilterLabel>상태 : </S.FilterLabel>
        <S.LongInput />

        <S.SearchButton>검색</S.SearchButton>
      </S.FilterContents>
    </S.FilterWrapper>
  );
}
