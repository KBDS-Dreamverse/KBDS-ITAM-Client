import React from 'react';
import * as S from './Sidebar.style';

export default function Sidebar({ setSideToggle }) {
  return (
    <S.SideWrapper onClick={() => setSideToggle(false)}>
      <S.Company>KBDS</S.Company>
      <S.Admin>관리자 페이지</S.Admin>
      <S.Menu>대시보드</S.Menu>
      <S.Menu>자산관리</S.Menu>
      <S.Menu>계약관리</S.Menu>
      <S.Menu>요청관리</S.Menu>
      <S.Menu to={'/company'}>업체관리</S.Menu>
      <S.Menu>현황관리</S.Menu>
      <S.Menu>설정</S.Menu>
      <S.ButtonWrapper>
        <S.BackButton>
          <S.BackIcon src='/assets/icon_back.svg' alt='back'></S.BackIcon>
          뒤로가기
        </S.BackButton>
        <S.DoorButton>
          <S.DoorIcon src='/assets/icon_door.svg' alt='door'></S.DoorIcon>
          ITAM 포탈로 이동
        </S.DoorButton>
      </S.ButtonWrapper>
    </S.SideWrapper>
  );
}
