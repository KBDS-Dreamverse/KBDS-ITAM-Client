import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import * as S from './AssetExpire.style'; // 이 부분은 실제 스타일 파일에 맞게 변경해야 합니다.
import axios from "axios";
import { API } from "../../config";
import ClientAssetSidebar from "../../components/layouts/Navbar/ClientAssetSidebar";

export default function AssetStop() {

  let { deptId, contId } = useParams();
  
  const [periodInfo, setPeriodInfo] = useState(null);
  const [isAssetActive, setIsAssetActive] = useState(false);

  

  useEffect(() => {
    const fetchPeriodInfo = async () => {
        try {
            const userId = sessionStorage.getItem("userId");
            if (!userId) {
                console.error("No user ID found in session storage.");
                // 여기에 로그인 페이지로 리다이렉트하는 로직을 추가할 수 있습니다.
                return;
            }

            const response = await axios.get(API.EXPIRE.replace('{dept}', deptId).replace('{contId}', contId), {
                headers: {
                    // HTTP 요청 헤더에 userId를 추가합니다.
                    'userId': userId
                }
            });
            if (response.data === 'ASSET_IS_EXPIRE' || response.data === 'ASSET_IS_NOT_INUSE') {
                console.log("response.data");
                setIsAssetActive(false);
            } else {
                setPeriodInfo(response.data);
                setIsAssetActive(true);
            }
        } catch (err) {
            console.error(err);
        }
    };

    fetchPeriodInfo();
  }, [deptId, contId]);

  const handleStopClick = async () => {
    try {
      const userId = sessionStorage.getItem("userId");
      if (!userId) {
        console.error("No user ID found in session storage.");
        return;
      }

      const response = await axios.patch(API.STOP.replace('{dept}', deptId).replace('{contId}', contId), {}, {
        headers: {
          'userId': userId
        }
      });

      // 요청 성공 후 로직 (예: 상태 업데이트 또는 사용자에게 알림)
      if (response.status === 200) {
        // 성공적으로 처리됨
        console.log("Asset stop request was successful.");
        setIsAssetActive(false); // 예시: 자산 상태를 비활성으로 설정
      }
    } catch (err) {
      console.error(err);
      // 에러 핸들링 로직 (예: 사용자에게 에러 메시지 표시)
    }
  };

  return (
    <>
        <ClientAssetSidebar deptId={deptId} contId={contId}/>

        <S.Wrapper>
            <S.Main>
                <S.Header>
                <S.HeaderTitle>자동차 보험 관리 시스템</S.HeaderTitle>
                    <S.HeaderButton>KB DEV 포럼에 질문하기</S.HeaderButton>
                    <S.HeaderButton>이슈 제보하기</S.HeaderButton>
                </S.Header>

                {!isAssetActive &&(
                    <S.Body>
                    <S.Message>현재 Asset은 사용 중인 상태가 아닙니다.</S.Message>
                    </S.Body>
                )}
                {isAssetActive && periodInfo && (
                    <S.Body>
                    <S.DateRange>
                        사용 기간 : {periodInfo.contStartDate} ~ {periodInfo.contEndDate}
                    </S.DateRange>
                    <S.RemainingDays>{periodInfo.remainingDays}일 남았습니다.</S.RemainingDays>
                    <S.Question>사용 중단하시겠습니까?</S.Question>
                    <S.ButtonGroup>
                        <S.RequestButton onClick={handleStopClick}>예</S.RequestButton>
                    </S.ButtonGroup>
                    </S.Body>
                )}
                
            </S.Main>
        </S.Wrapper>
        </>
  );
}
