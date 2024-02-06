import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Sidebar({ setSideToggle }) {
  return (
    <SideWrapper onClick={() => setSideToggle(false)}>
      <Company>KBDS</Company>
      <Admin>관리자 페이지</Admin>
      <Menu>대시보드</Menu>
      <Menu>자산관리</Menu>
      <Menu>계약관리</Menu>
      <Menu>요청관리</Menu>
      <Menu>업체관리</Menu>
      <Menu>현황관리</Menu>
      <Menu>설정</Menu>
      <ButtonWrapper>
        <BackButton>
          <BackIcon src='/assets/icon_back.svg' alt='back'></BackIcon>
          뒤로가기
        </BackButton>
        <DoorButton>
          <DoorIcon src='/assets/icon_door.svg' alt='door'></DoorIcon>
          ITAM 포탈로 이동
        </DoorButton>
      </ButtonWrapper>
    </SideWrapper>
  );
}

//height: 1000vh; 644px
const SideWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: center;

  position: fixed;
  top: 64px;
  left: 0px;
  z-index: 98;

  border-radius: 6px;
  background: #838687;

  width: 202px;
  height: 88vh;
  padding: 18px 15px;
`;

const TitleBox = styled.div`
  display: flex;
  margin-bottom: 8px;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 44px;
  border-radius: 2.486px;
  background: #667a8a;

  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 32px
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 93.75% */
`;

const Company = styled(TitleBox)``;
const Admin = styled(TitleBox)`
  background: none;
`;

const MenuBox = styled(Link)`
  box-sizing: border-box;
  display: flex;
  padding: 6px;
  align-items: center;
  border-radius: 2.486px;
  margin-bottom: 10px;
  width: 172.146px;

  color: #fff;
  font-family: Poppins;
  font-size: 13.244px;
  font-style: normal;
  font-weight: 700;
  line-height: 14.915px; /* 112.615% */
  letter-spacing: 0.132px;
`;

const Menu = styled(MenuBox)`
  &:hover {
    cursor: pointer;
    background: #667a8a;
    color: #eff2f4;
  }
  &:focus {
    background: #667a8a;
    color: #eff2f4;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: auto;
`;

const Button = styled.button`
  display: flex;
  padding: 0px 8px;
  align-items: center;
  border-radius: 2.486px;
  width: 172.146px;
  height: 32px;
  gap: 6px;

  font-family: Poppins;
  font-size: 9.943px;
  font-style: normal;
  font-weight: 600;
  line-height: 14.915px; /* 150% */
  letter-spacing: 0.099px;
`;

const BackIcon = styled.img`
  width: 18px;
  height: 18px;
`;
const DoorIcon = styled.img`
  width: 18px;
  height: 18px;
`;
const BackButton = styled(Button)`
  background: #fff;
  color: #667a8a;
  margin-bottom: 10px;
`;
const DoorButton = styled(Button)`
  background: #667a8a;
  color: #fff;
`;
