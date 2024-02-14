import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import * as S from './AssetInstallGuide.style'; // 이 부분은 실제 스타일 파일에 맞게 변경해야 합니다.
import axios from "axios";
import { API } from "../../config";
import ClientAssetSidebar from "../../components/layouts/Navbar/ClientAssetSidebar";

export default function AssetInstallGuide() {

  let { deptId, contId } = useParams();
  
  const [installInfo, setInstallInfo] = useState(null);

  

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
                    <S.Title>설치 가이드</S.Title>
                    <S.Content>
                        <S.ContentHeader>
                        <S.Title>HR System 1.8</S.Title>
                        <S.DownloadLinks>
                            <S.Link href="#">install file download</S.Link>
                            <S.Slash> / </S.Slash>
                            <S.Link href="#">version Docs download</S.Link>
                        </S.DownloadLinks>
                        </S.ContentHeader>
                        <S.VersionInfo>recently install version : 1.0.6</S.VersionInfo>
                        <S.Steps>
                        <S.Step>Step 1.</S.Step>
                        <S.StepDescription>설명을 여기에 추가하세요.</S.StepDescription>
                        <S.Step>Step 2.</S.Step>
                        <S.StepDescription>두 번째 단계 설명을 여기에 추가하세요.</S.StepDescription>
                        </S.Steps>
                    </S.Content>
                </S.Body>
                
            </S.Main>
        </S.Wrapper>


    </>
    
  );
}
