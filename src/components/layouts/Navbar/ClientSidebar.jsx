import * as S from './ClientSidebar.style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API } from "../../../config";
import { useEffect, useState } from 'react';

export default function ClientSidebar({ setSideToggle, setUserMode }) {
  const navigate = useNavigate();
  const [corpName, setCorpName] = useState(sessionStorage.getItem("userCorp"));
  const [selectedDepts, setSelectedDepts] = useState([]);

  const handleCorpChange = (e)=>{
    const newCorpName = e.target.value;
    setCorpName(newCorpName);
  }

  useEffect(()=> {
    axios.get(`${API.DEPT_INFO}`,{
      params :{
        corpName : corpName,
      },
    })
    .then((resopnse) => {
      setSelectedDepts(resopnse.data);
    })
    .catch((error) =>{
      console.error("조회 에러 : ",error);
    });
  },[]);

  const handleDeptClick = (deptId) => {
    console.log("deptId : ",deptId);
    navigate(`/client/home`);
  };


  return (
    <S.SideWrapper>
      <S.Company>{sessionStorage.getItem("userCorp")}</S.Company>
      <S.Company>{sessionStorage.getItem("userDept")}</S.Company>
      {selectedDepts.map((dept)=>(
        <S.Menu key={dept.deptId} to={`/client/${dept.deptId}/list`}>{dept.deptName}</S.Menu>
      ))}
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
