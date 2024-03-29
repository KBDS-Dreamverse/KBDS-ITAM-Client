import React from 'react';
import * as S from './Navbar.style';
import { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import ClientSidebar from './ClientSidebar';

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
          <S.LogoMsg>KB ITAM POTAL</S.LogoMsg>
        </S.Logo>

        <S.Search>
          <S.SearchIcon
            src='/assets/icon_search.svg'
            alt='search'
          ></S.SearchIcon>
          <S.SearchInput placeholder='Type here...'></S.SearchInput>
        </S.Search>
        <S.User>
          <S.UserImg src='/assets/icon_user.svg'></S.UserImg>
          <S.UserInfo>채희선(2020202020)/계열사/부서</S.UserInfo>
        </S.User>
        <S.Alert src='/assets/icon_bell.svg' alt='bell'></S.Alert>

        {menuToggle && renderMenuToggle()}
      </S.Container>
    </S.NavWrapper>
  );
}
