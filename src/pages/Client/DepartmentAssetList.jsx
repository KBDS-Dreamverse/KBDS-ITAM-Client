import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import * as S from './DepartmentAssetList.style';
import { API } from '../../config';
import { useNavigate } from 'react-router-dom';

export default function DepartmentAssetList () {
    const { deptId } = useParams();
    const navigate = useNavigate();
    const [assetList, setAssetList] = useState([]);
    console.log('deptId:', deptId);

    useEffect(() => {
        // 페이지가 로드될 때와 deptId가 변경될 때마다 부서별 자산 목록을 가져오는 API 호출
        axios.get(`${API.DEPT_ASSET}`, {
            params: {
                deptId: deptId,
                userId: sessionStorage.getItem("userId"),
            },
        })
        .then(response => {
            console.log(response.data);
            setAssetList(response.data);
        })
        .catch(error => {
            console.error('Error fetching department assets:', error);
        });
    }, [deptId]); // deptId가 변경될 때마다 useEffect가 실행됨

    // 자산 상태에 따른 버튼 컴포넌트 반환 함수
    const getButtonComponent = (status) => {
        switch (status) {
            case '승인':
                return <S.AccessButton>{status}</S.AccessButton>;
            case '사용중':
                return <S.UsingButton>{status}</S.UsingButton>;
            case '승인대기':
                return <S.WaitButton>{status}</S.WaitButton>;
            case '승인거절':
                return <S.DenyButton>{status}</S.DenyButton>;
            case '미사용중':
                return <S.NonuseButton>{status}</S.NonuseButton>;
            case '폐기':
                return <S.StopButton>{status}</S.StopButton>;
            default:
                return null;
        }
    };

    return(
        <S.Wrapper>
            <S.Main>
                <S.Header>
                    <S.UsingButton>사용중</S.UsingButton>
                    <S.AccessButton>승인</S.AccessButton>
                    <S.WaitButton>승인대기</S.WaitButton>
                    <S.DenyButton>승인거절</S.DenyButton>
                    <S.NonuseButton>미사용중</S.NonuseButton>
                    <S.StopButton>폐기</S.StopButton>
                    <S.SearchButton>검색          
                        <S.SearchIcon
                            src='/assets/icon_search2.svg'
                            alt='search'
                        ></S.SearchIcon>
                    </S.SearchButton>
                </S.Header>
                <S.Body>
                    {assetList.map((item,index)=>(
                        <S.Asset key={index} onClick={() => {
                            navigate(`/client/asset/${deptId}/${item.contId}/info`);
                        }}> 
                            <S.AssetImg src={item.assetImgUrl} alt='back'/>
                            <S.AssetTextBox>
                                {getButtonComponent(item.assetReqStatus)}
                                <S.AssetName> {item.assetName} </S.AssetName>
                                <S.License>{item.contPeriodType} / {item.contSupplyType} / {item.contNumOfType} </S.License>
                                <S.Description>{item.assetSpd}</S.Description>
                            </S.AssetTextBox>
                        </S.Asset>
                    ))}
                </S.Body>
            </S.Main>
        </S.Wrapper>
    );
}
