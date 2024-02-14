import * as S from './ClientSidebar.style';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ClientAssetSidebar({ setSideToggle, setUserMode,deptId,contId}) {
  const navigate = useNavigate();


  console.log(deptId);
  console.log(contId);
  return (
    <S.SideWrapper>
      <S.Company>{sessionStorage.getItem("userCorp")}</S.Company>
      <S.Company>{deptId}</S.Company>
      <S.Menu to={`/client/asset/${deptId}/${contId}/info`}>안내</S.Menu>
      <S.Menu to={`/client/asset/${deptId}/${contId}/request`} >요청하기</S.Menu>
      <S.Menu to={`/client/asset/${deptId}/${contId}/installguide`} >사용하기</S.Menu>
      <S.SubMenu to={`/client/asset/${deptId}/${contId}/installguide`} >- 설치 가이드</S.SubMenu>
      <S.SubMenu to={`/client/asset/${deptId}/${contId}/usageguide`} >- 사용 가이드</S.SubMenu>
      <S.Menu to={`/client/asset/${deptId}/${contId}/dashboard`} >대시보드</S.Menu>
      <S.Menu to={`/client/asset/${deptId}/${contId}/expire`} >폐기</S.Menu>

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
