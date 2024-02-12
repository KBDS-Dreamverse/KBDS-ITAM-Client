import React from 'react';
import * as S from './SearchFilter.style';

export default function SearchFilter() {
  return (
    <S.FilterWrapper>
      <S.FileterContents>
        <S.FilterLabel>기간 : </S.FilterLabel>
        <S.FilterInput></S.FilterInput>
        <S.PeriodLabel>년</S.PeriodLabel>
        <S.FilterInput></S.FilterInput>
        <S.PeriodLabel>월</S.PeriodLabel>
        <S.FilterInput></S.FilterInput>
        <S.PeriodLabel>일</S.PeriodLabel>
      </S.FileterContents>
      <S.FileterContents>
        <S.FilterLabel>소프트웨어명 : </S.FilterLabel>
        <S.FilterInput></S.FilterInput>
        <S.FilterLabel>카테고리 : </S.FilterLabel>
        <S.FilterInput></S.FilterInput>
        <S.FilterLabel>상태 : </S.FilterLabel>
        <S.FilterInput></S.FilterInput>
      </S.FileterContents>
      <S.SearchButton>검색</S.SearchButton>
    </S.FilterWrapper>
  );
}
