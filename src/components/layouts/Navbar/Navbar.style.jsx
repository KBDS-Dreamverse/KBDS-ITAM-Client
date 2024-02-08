import styled from 'styled-components';

export const NavWrapper = styled.header`
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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 64px;

  margin: 0 24px 0 12px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
  padding: 0 12px;
`;

export const Logo = styled(Box)`
  margin-right: auto;
`;
// button
export const LogoIcon = styled.img``;
export const LogoMsg = styled.div`
  color: #000;
  font-family: pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

export const Search = styled.div`
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
export const SearchIcon = styled.img`
  padding: 0 10px;
`;
export const SearchInput = styled.input`
  color: #252f40;
  font-family: pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.387px;
  opacity: 0.5033;
  width: 80px;
  border: none;
`;

export const User = styled(Box)``;
export const UserImg = styled.img`
  width: 40px;
  height: 40px;
`;
export const UserInfo = styled.div`
  color: #000;
  font-family: pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.387px;
`;

export const Alert = styled.img`
  width: 26;
  height: 26px;
`;
