import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import * as S from "./AssetInfo.style";
import axios from "axios";
import { API } from "../../config";

export default function AssetInfo(){

    const { dept, contId } = useParams();
    const [assetData, setAssetData] = useState(null);

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const userId = sessionStorage.getItem("userId");
                if (!userId) {
                    console.error("No user ID found in session storage.");
                    // 여기에 로그인 페이지로 리다이렉트하는 로직을 추가할 수 있습니다.
                    return;
                }
    
                const response = await axios.get(API.INFO.replace('{dept}', dept).replace('{contId}', contId), {
                    headers: {
                        // HTTP 요청 헤더에 userId를 추가합니다.
                        'userId': userId
                    }
                });
                setAssetData(response.data);
                console.log(response.data);
            } catch (err) {
                console.error(err);
            }
        };
    
        fetchInfo();
      }, [dept, contId]);

    return(
        <S.Wrapper>
            <S.Main>
            {assetData && (
                <S.Header>
                    <S.HeaderTitle>{assetData.astName}</S.HeaderTitle>
                    <S.HeaderButton>KB DEV 포럼에 질문하기</S.HeaderButton>
                    <S.HeaderButton>이슈 제보하기</S.HeaderButton>
                </S.Header>
                )}
                {/* 상태에 저장된 assetData를 표시합니다. */}
                {assetData && (
                    <div>
                        <S.SubDescription>
                            {assetData.corpName} | {assetData.requestStatus}
                        </S.SubDescription>
                        <S.SpdDescription>
                            <S.AssetInfoImg src = {assetData.astImgUrl}>
                                </S.AssetInfoImg> {assetData.astSpd}
                        </S.SpdDescription>
                        <S.VersionDes style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>recently version : {assetData.astVer}</div>
                            {/* <div> 이전버전 보러가기</div> */}
                        </S.VersionDes>
                        <S.Table>
                            <tbody>
                                {assetData.mnLogVersList.map((item, index) => (
                                <S.TableRow key={index}>
                                    <td>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '150%' }}>
                                        <div style={{paddingLeft: '10px'}}>{item}</div>
                                        <div style={{ fontWeight: 300 }}>버전 업데이트 사항</div>
                                    </div>
                                    </td>
                                </S.TableRow>
                                ))}
                            </tbody>
                        </S.Table>
                        <S.SpdDescription> 
                            제품 상세
                            <hr style={{ margin: '10px 0', border: '1px solid #ccc' }} />
                        </S.SpdDescription>
                        <S.Description>
                            {assetData.astDpd}
                        </S.Description>
                    </div>
                )}
                <S.toButton style={{float: 'right'}}>요청하기</S.toButton>
            </S.Main>
        </S.Wrapper>        
    )
}
