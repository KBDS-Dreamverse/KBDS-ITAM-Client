
import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import * as S from './AssetDashBoard.style'; // 이 부분은 실제 스타일 파일에 맞게 변경해야 합니다.
import axios from "axios";
import { API } from "../../config";
import PieChart from './PieChart'; // CorePieChart 컴포넌트를 올바른 경로에서 임포트

export default function AssetDashBoard() {

  let { dept, contId } = useParams();
  
  const [dashboardInfo, setDashboardInfo] = useState(null);



  useEffect(() => {
    const fetchDashboardInfo = async () => {
        try {
            const userId = sessionStorage.getItem("userId");
            console.log(userId);
            if (!userId) {
                console.error("No user ID found in session storage.");
                // 여기에 로그인 페이지로 리다이렉트하는 로직을 추가할 수 있습니다.
                return;
            }

            const response = await axios.get(API.DASHBOARD.replace('{dept}', dept).replace('{contId}', contId), {
                headers: {
                    // HTTP 요청 헤더에 userId를 추가합니다.
                    'userId': "L2_0"
                }
            });
            setDashboardInfo(response.data);
            console.log(response.data);
        
        } catch (err) {
            console.error(err);
        }
    };

    fetchDashboardInfo();
  }, [dept, contId]);   // 경로 상의 dept, contId 값이 변경될 때마다 fetchDashboardInfo 함수를 다시 호출

  const getLicenseComponent = (licName, licValues) => {
    switch (licName) {
      case '패키지':
      case 'Low Volume':
        return (
            <S.LicValContainer>
                <div>[{licName}]</div>
                <div>버전 : {licValues.splyVer}</div>
            </S.LicValContainer>
        );
      case 'SaaS':
        return (
          <S.LicValContainer>
            <div>[{licName}]</div>
            <div>버전 : {licValues.splyVer}</div>
            <div>접근 URL : {licValues.acsUrl}</div>
          </S.LicValContainer>
        );
      case '구독':
      case '영구':
        return (
          <S.LicValContainer>
            <div>[{licName}]</div>
            <div>사용 기간 : {licValues.contStartDate} ~ {licValues.contEndDate}</div>
          </S.LicValContainer>
        );
      case '동시 사용자수':
        return (
          <S.LicValContainer>
             <div>[{licName}]</div>
             <S.ChartContainer>
             <PieChart curr={licValues.currUsers} max={licValues.maxUsersLimit} />
             </S.ChartContainer>

             <div>최대 사용자 수 : {licValues.maxUsersLimit}</div>
             <div>현재 사용자 수 : {licValues.currUsers}</div>
          </S.LicValContainer>
        );
      case '사이트':
        return (
          <S.LicValContainer>
            <div>[{licName}]</div>
             <div>접근 가능한 IP 범위 : {licValues.ipRange}</div>
             <div>현재 사용자 IP : {licValues.userIp}</div>
             <div>현재 사용자 Port : {licValues.userPort}</div>
             <div>접근 가능 여부 : {licValues.currUsers}</div>
          </S.LicValContainer>
        );
      case '코어':
        return (
          <S.LicValContainer>
            <div>[{licName}]</div>
            <S.ChartContainer>
                <PieChart curr={licValues.currCore} max={licValues.maxCoreLimit} />
            </S.ChartContainer>
            
             <div>최대 코어 수 : {licValues.maxCoreLimit}</div>
             <div>현재 코어 수 : {licValues.currCore}</div>
          </S.LicValContainer>
        );
      case '1pc1copy':
        return (
            <S.LicValContainer>
            <div>[{licName}]</div>
            <div>라이선스 키 : {licValues.licenseKey}</div>
            </S.LicValContainer>
        );
        
      case '서버접속':
        return (
          <S.LicValContainer>
            <div>{licName}</div>
            <input type="password" placeholder="비밀번호 입력"/>
          </S.LicValContainer>
        );
      default:
        return null;
    }
  };

  return (
    <>
        <S.Wrapper>
            <S.Main>
                <S.Header>
                    <S.HeaderTitle>{dashboardInfo?.astName}</S.HeaderTitle>
                    <S.HeaderButton>KB DEV 포럼에 질문하기</S.HeaderButton>
                    <S.HeaderButton>이슈 제보하기</S.HeaderButton>
                </S.Header>
                <S.Body>
                <S.LicNamesContainer>
                    {dashboardInfo?.licNames.map((name, index) => (
                        <React.Fragment key={index}>
                            {name}{index < dashboardInfo.licNames.length - 1 ? ' / ' : ''}
                        </React.Fragment>
                    ))}
                </S.LicNamesContainer>
                <div>
                {dashboardInfo?.licNames.map((name, index) => (
                    <React.Fragment key={index}>
                    {getLicenseComponent(name, dashboardInfo.licValues)}
                    </React.Fragment>
                ))}
                </div>

                </S.Body>
                
            </S.Main>
        </S.Wrapper>
        </>
  );
}
