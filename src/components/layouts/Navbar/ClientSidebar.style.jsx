import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideWrapper = styled.div`
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

export const TitleBox = styled.div`
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
  font-family: pretendard;
  font-size: 32px
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 93.75% */
`;

export const Company = styled(TitleBox)``;

export const MenuBox = styled(Link)`
  box-sizing: border-box;
  display: flex;
  padding: 6px;
  align-items: center;
  border-radius: 2.486px;
  margin-bottom: 10px;
  width: 172.146px;

  color: #fff;
  font-family: pretendard;
  font-size: 13.244px;
  font-style: normal;
  font-weight: 700;
  line-height: 14.915px; /* 112.615% */
  letter-spacing: 0.132px;
`;

export const Menu = styled(MenuBox)`
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
export const SubMenu = styled(MenuBox)`
  padding: 0px;
  padding-left: 8px;
  font-size: 10px;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: auto;
`;

export const Button = styled.button`
  display: flex;
  padding: 0px 8px;
  align-items: center;
  border-radius: 2.486px;
  width: 172.146px;
  height: 32px;
  gap: 6px;

  font-family: pretendard;
  font-size: 9.943px;
  font-style: normal;
  font-weight: 600;
  line-height: 14.915px; /* 150% */
  letter-spacing: 0.099px;
`;

export const BackIcon = styled.img`
  width: 18px;
  height: 18px;
`;
export const DoorIcon = styled.img`
  width: 18px;
  height: 18px;
`;
export const BackButton = styled(Button)`
  background: #fff;
  color: #667a8a;
  margin-bottom: 10px;
`;
export const DoorButton = styled(Button)`
  background: #667a8a;
  color: #fff;
`;
