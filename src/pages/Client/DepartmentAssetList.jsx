import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import * as S from './DepartmentAssetList.style'
import { API } from '../../config';


export default function DepartmentAssetList (){
    const { deptId } = useParams();
    const [assetList, setAssetList] = useState([]);
  
    useEffect(() => {
      // 부서별 자산 목록을 가져오는 API 호출
      axios.get(`${API.DEPT_INFO}`,{
        params :{
          corpName : sessionStorage.getItem("userCorp"),
        },
    })
        .then(response => {
          setAssetList(response.data);
        })
        .catch(error => {
          console.error('Error fetching department assets:', error);
        });
    }, [deptId]);

    return(
        <S.Wrapper>
        deptId
      </S.Wrapper>
    );

}