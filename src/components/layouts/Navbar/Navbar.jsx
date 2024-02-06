import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Sidebar from './Sidebar';

export default function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <NavWrapper>
      <Container>
        <Logo>
          {/* 누르면 사이드 열고 닫힘 */}
          <LogoIcon
            src='/assets/icon_kb.svg'
            alt='kb'
            onClick={() => setMenuToggle((toggle) => !toggle)}
          ></LogoIcon>
          <LogoMsg>KB ITAM POTAL</LogoMsg>
        </Logo>

        <Search>
          <SearchIcon src='/assets/icon_search.svg' alt='search'></SearchIcon>
          <SearchInput placeholder='Type here...'></SearchInput>
        </Search>
        <User>
          <UserImg src='/assets/icon_user.svg'></UserImg>
          <UserInfo>채희선(2020202020)/계열사/부서</UserInfo>
        </User>
        <Alert src='/assets/icon_bell.svg' alt='bell'></Alert>

        {menuToggle && <Sidebar setSideToggle={setMenuToggle} />}
      </Container>
    </NavWrapper>
  );
}

const NavWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  position: fixed;
  top: 0;
  bottom: 0;

  width: 100%;
  height: 64px;

  background: #f8f9fa;

  z-index: 99;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 64px;

  margin: 0 24px 0 12px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
  padding: 0 12px;
`;

const Logo = styled(Box)`
  margin-right: auto;
`;
// button
const LogoIcon = styled.img``;
const LogoMsg = styled.div`
  color: #000;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

const Search = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box
  padding: 12px;
  width: 212px;
  height: var(--40, 40px);
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #d2d6da;
  background: #fff;
`;
const SearchIcon = styled.img`
  padding: 0 10px;
`;
const SearchInput = styled.input`
  color: #252f40;
  font-family: ?????;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.387px;
  opacity: 0.5033;
  width: 80px;
  border: none;
`;

const User = styled(Box)``;
const UserImg = styled.img`
  width: 40px;
  height: 40px;
`;
const UserInfo = styled.div`
  color: #000;
  font-family: 'Droid Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.387px;
`;

const Alert = styled.img`
  width: 26;
  height: 26px;
`;
