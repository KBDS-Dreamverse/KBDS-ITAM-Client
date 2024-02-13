import * as S from './ClientSidebar.style';
import { useNavigate } from 'react-router-dom';

export default function ClientAssetSidebar({ setSideToggle, setUserMode }) {
  const navigate = useNavigate();

  return (
    <S.SideWrapper onClick={() => setSideToggle(false)}>
      <S.Company>{sessionStorage.getItem("userCorp")}</S.Company>
      <S.Company>{sessionStorage.getItem("userDept")}</S.Company>
      <S.Menu>안내</S.Menu>
      <S.Menu>요청하기</S.Menu>
      <S.Menu>사용하기</S.Menu>
      <S.SubMenu>- 설치 가이드</S.SubMenu>
      <S.SubMenu>- 사용 가이드</S.SubMenu>
      <S.Menu>대시보드</S.Menu>
      <S.Menu>폐기</S.Menu>
      <S.ButtonWrapper>
        <S.BackButton>
          <S.BackIcon src='/assets/icon_back.svg' alt='back'></S.BackIcon>
          뒤로가기
        </S.BackButton>
        <S.DoorButton
          onClick={() => {
            setUserMode('admin');
            navigate('/admin/home');
          }}
        >
          <S.DoorIcon src='/assets/icon_door.svg' alt='door'></S.DoorIcon>
          관리자로 입장
        </S.DoorButton>
      </S.ButtonWrapper>
    </S.SideWrapper>
  );
}
