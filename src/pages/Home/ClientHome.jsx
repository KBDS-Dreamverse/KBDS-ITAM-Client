import React from 'react';
import * as S from './ClientHome.style';

export default function ClientHome() {
  return (
    <S.HomeWrapper>
      <S.Main>
        <S.TopContainer>
          <S.UserInfo>
            <S.UserImg src={sessionStorage.getItem("userPhoto")}></S.UserImg>
            <S.UserName>{sessionStorage.getItem("userName")} {sessionStorage.getItem("userRoleValue")}</S.UserName>
            <S.UserNumber>({sessionStorage.getItem("userId")})</S.UserNumber>
            <S.userDept>{sessionStorage.getItem("userCorp")}</S.userDept>
            <S.userDept>{sessionStorage.getItem("userDept")}</S.userDept>
          </S.UserInfo>
          <S.BoardBox>
            <S.Board>
              <S.BoardTitle>나의 알림
                <S.TitleButton>더보기</S.TitleButton>
              </S.BoardTitle>
              <S.HorizontalLine></S.HorizontalLine>
              <S.BoardContent>[FAQ] HR 시스템 사용법 문의...게시글에 덧글이 달렸습니다</S.BoardContent>
              <S.BoardContent>[FAQ] HR 시스템 사용법 문의...게시글에 덧글이 달렸습니다</S.BoardContent>
              <S.BoardContent>[FAQ] HR 시스템 사용법 문의...게시글에 덧글이 달렸습니다</S.BoardContent>
            </S.Board>
            <S.Board>
              <S.BoardTitle>나의 결재현황
                <S.TitleButton>더보기</S.TitleButton>
              </S.BoardTitle>
              <S.HorizontalLine></S.HorizontalLine>
              <S.BoardContent>[FAQ] HR 시스템 사용법 문의...게시글에 덧글이 달렸습니다</S.BoardContent>
              <S.BoardContent>[FAQ] HR 시스템 사용법 문의...게시글에 덧글이 달렸습니다</S.BoardContent>
              <S.BoardContent>[FAQ] HR 시스템 사용법 문의...게시글에 덧글이 달렸습니다</S.BoardContent>
            </S.Board>
          </S.BoardBox>
        </S.TopContainer>
        <S.BottomContainer>
          <S.BottomBoard>
            <S.BoardTitle>공지사항
              <S.TitleButton>전체 보기</S.TitleButton>
            </S.BoardTitle>
            <S.HorizontalLine></S.HorizontalLine>
            <S.BoardContent>[FAQ] HR 시스템 사용법 문의...게시글에 덧글이 달렸습니다</S.BoardContent>
              <S.BoardContent>[FAQ] HR 시스템 사용법 문의...게시글에 덧글이 달렸습니다</S.BoardContent>
              <S.BoardContent>[FAQ] HR 시스템 사용법 문의...게시글에 덧글이 달렸습니다</S.BoardContent>
              <S.BoardContent>[FAQ] HR 시스템 사용법 문의...게시글에 덧글이 달렸습니다</S.BoardContent>
              <S.BoardContent>[FAQ] HR 시스템 사용법 문의...게시글에 덧글이 달렸습니다</S.BoardContent>
              <S.BoardContent>[FAQ] HR 시스템 사용법 문의...게시글에 덧글이 달렸습니다</S.BoardContent>
          </S.BottomBoard>
          <S.ButtonBox>
            <S.Button>검색포털</S.Button>
            <S.Button>FAQ</S.Button>
            <S.Button>DEV포럼</S.Button>
          </S.ButtonBox>
        </S.BottomContainer>
      </S.Main>
    </S.HomeWrapper>
  );
}
