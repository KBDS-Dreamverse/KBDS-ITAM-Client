import React from 'react';
import * as S from './Box.style';

// 공급형태 : SaaS
// 기간 : 구독
// 사용자수 : 동시사용자수

export default function Box({ title }) {
  const renderBoxContent = () => {
    console.log(title);
    console.log(title === '구독 라이선스');
    if (title === 'SaaS 라이선스') {
      return (
        <S.Ul>
          <S.Li>
            <S.Label>접속 url</S.Label>
            <S.Input />
          </S.Li>
          <S.Li>
            <S.Label>버전</S.Label>
            <S.Input />
          </S.Li>
        </S.Ul>
      );
    }

    if (title === '구독 라이선스') {
      return (
        <S.Ul>
          <S.Li>
            <S.Label>시작일</S.Label>
            <S.Input />
          </S.Li>
          <S.Li>
            <S.Label>종료일</S.Label>
            <S.Input />
          </S.Li>
        </S.Ul>
      );
    }
    if (title === '동시 사용자수 라이선스') {
      return (
        <S.Ul>
          <S.Li>
            <S.Label>최대 사용자 수</S.Label>
            <S.Input />
          </S.Li>
        </S.Ul>
      );
    }
  };

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.ContentWrapper>{renderBoxContent({ title })}</S.ContentWrapper>
    </S.Wrapper>
  );
}
