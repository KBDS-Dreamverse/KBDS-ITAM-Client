import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import * as S from './AssetUsageGuide.style'; // 이 부분은 실제 스타일 파일에 맞게 변경해야 합니다.
import axios from "axios";
import { API } from "../../config";
import ClientAssetSidebar from "../../components/layouts/Navbar/ClientAssetSidebar";

export default function AssetUsageGuide() {

  let { deptId, contId } = useParams();
  
  const [usageGuide, setUsageGuide] = useState(null);

  

//   useEffect(() => {
//     const fetchInstallInfo = async () => {
//         try {
//             const userId = sessionStorage.getItem("userId");
//             if (!userId) {
//                 console.error("No user ID found in session storage.");
//                 // 여기에 로그인 페이지로 리다이렉트하는 로직을 추가할 수 있습니다.
//                 return;
//             }

//             const response = await axios.get(API.INSTALLGUIDE.replace('{dept}', deptId).replace('{contId}', contId), {
//                 headers: {
//                     // HTTP 요청 헤더에 userId를 추가합니다.
//                     'userId': userId
//                 }
//             });
//             setInstallInfo(response.data);
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     fetchInstallInfo();
//   }, [deptId, contId]);


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
                
                <S.Body>
                    <S.Title>사용 가이드</S.Title>
                    <S.Content>
                        <S.ContentHeader>
                        <S.Title>HR System 1.8</S.Title>
                        <S.DownloadLinks>
                            <S.Link href="#">Usage Guide File Download</S.Link>
                            
                        </S.DownloadLinks>
                        </S.ContentHeader>
                        <S.VersionInfo>recently install version : 1.0.6</S.VersionInfo>
                        <S.Steps>
                        <S.Step>사용 가이드 설명</S.Step>
                        <S.StepDescription>
                        1. 시스템 개요
                        자동차 보험 관리 시스템은 보험사의 직원들이 보험 계약, 클레임, 고객 데이터를 관리하고 보고서를 생성할 수 있도록 설계된 소프트웨어입니다.
                        <br></br>
                        <br></br>
                        2. 로그인 방법
                        시스템에 접속한 후, 사용자 이름과 비밀번호를 입력합니다.
                        ‘로그인’ 버튼을 클릭하여 시스템에 접속합니다.
                        <br></br>
                        <br></br>
                        3. 대시보드 사용법
                        대시보드는 최근 보험 계약, 클레임 상황, 고객 통계를 한눈에 볼 수 있는 공간입니다.
                        각 섹션의 ‘더 보기’를 클릭하여 상세 정보로 이동할 수 있습니다.
                        <br></br>
                        <br></br>
                        4. 보험 계약 관리
                        상단 메뉴의 ‘보험 계약’ 탭을 클릭하여 계약 관리 페이지로 이동합니다.
                        ‘새 계약 추가’ 버튼을 통해 새로운 보험 계약을 등록할 수 있습니다.
                        각 계약을 클릭하여 계약 상세 정보를 확인하고 수정할 수 있습니다.
                        <br></br>
                        <br></br>
                        5. 클레임 관리
                        ‘클레임’ 탭에서는 보험 클레임을 확인하고 처리할 수 있습니다.
                        ‘클레임 등록’을 통해 새로운 클레임을 입력할 수 있습니다.
                        각 클레임을 선택하여 상세 내용을 검토하고 진행 상황을 업데이트할 수 있습니다.
                        <br></br>
                        <br></br>

                        6. 고객 관리
                        ‘고객’ 탭에서 고객 정보의 조회, 추가, 수정이 가능합니다.
                        고객의 보험 계약 및 클레임 이력을 확인할 수 있습니다.
                        <br></br>
                        <br></br>

                        7. 보고서 생성
                        ‘보고서’ 탭에서는 다양한 보고서를 생성하고 출력할 수 있습니다.
                        필요한 기준을 설정하여 맞춤형 보고서를 작성할 수 있습니다.
                        <br></br>
                        <br></br>

                        8. 설정 및 지원
                        ‘설정’ 메뉴에서는 시스템 설정을 조정할 수 있습니다.
                        <br></br>
                        <br></br>

                        </S.StepDescription>
                        </S.Steps>
                    </S.Content>
                </S.Body>
                
            </S.Main>
        </S.Wrapper>


    </>
    
  );
}
