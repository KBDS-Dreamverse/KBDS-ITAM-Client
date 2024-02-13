import React from 'react';
import * as S from './Navbar.style';
import { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import ClientSidebar from './ClientAssetSidebar';
import ClientAssetSidebar from './ClientAssetSidebar';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [userMode, setUserMode] = useState('admin');

  const renderMenuToggle = () => {


    console.log('togge', menuToggle, 'mode', userMode);
    if (userMode === 'admin') {
      return (
        <AdminSidebar setSideToggle={setMenuToggle} setUserMode={setUserMode} />
      );
    }
    if (userMode === 'client') {
      return (
        <ClientSidebar
          setSideToggle={setMenuToggle}
          setUserMode={setUserMode}
        />
      );
    }
  };

  return (
    <S.NavWrapper>
      <S.Container>
        <S.Logo>
          {/* 누르면 사이드 열고 닫힘 */}
          <S.LogoIcon
            src='/assets/icon_kb.svg'
            alt='kb'
            onClick={() => {
              setMenuToggle((toggle) => !toggle);
              console.log(menuToggle);
            }}
          ></S.LogoIcon>
          <S.LogoMsg>KB ITAM PORTAL</S.LogoMsg>
        </S.Logo>

        <S.Search>
          <S.SearchIcon
            src='/assets/icon_search.svg'
            alt='search'
          ></S.SearchIcon>
          <S.SearchInput placeholder='Type here...'></S.SearchInput>
        </S.Search>
        <S.User>
          <S.UserImg src={sessionStorage.getItem("userPhoto")}></S.UserImg>
          <S.UserInfo>{sessionStorage.getItem("userName")}({sessionStorage.getItem("userId")})/{sessionStorage.getItem("userCorp")}/{sessionStorage.getItem("userDept")}</S.UserInfo>
        </S.User>
        <S.Alert src='/assets/icon_bell.svg' alt='bell'></S.Alert>

        {menuToggle && renderMenuToggle()}
      </S.Container>
    </S.NavWrapper>
  );
}
