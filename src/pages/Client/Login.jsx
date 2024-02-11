import React, { useState } from "react";
import * as S from "./Login.style"
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { API } from "../../config";

export default function Login(){
    const [userId,setUserId] = useState("");
    const navigate = useNavigate();
    const [UserIdError, setUserIdError] = useState("");

    const handleUserIdChange = (e) => {
        const newUserId = e.target.value;
        setUserId(newUserId);

    };
    
    const  handleLogin = async () => {
        // if (!userId) {
        //     setUserIdError("사번을 입력해주세요.");
        //     return; // 필수 입력 필드가 비어있으면 함수 실행 중단
        // }
        try {
            const response = await axios.get(`${API.USER_INFO}`, {
                params: {
                    userId: userId,
                }
            });
            sessionStorage.setItem("userId",response.data.userId);
            sessionStorage.setItem("userName",response.data.userName);
            sessionStorage.setItem("userPhoto",response.data.userPhoto);
            sessionStorage.setItem("userRoleCode",response.data.userRole.code);
            sessionStorage.setItem("userRoleValue",response.data.userRole.value);
            sessionStorage.setItem("userCorp",response.data.corpName);
            sessionStorage.setItem("userDept",response.data.deptName);
            navigate("/client/home");
            
        } catch (error) {
            console.error(error);
            
        }
    }
    return(
        <>
        <S.Container>
            <div>
            <S.Title>
                KB 금융그룹 IT Asset 관리 포털</S.Title>
            <S.Detail>KB 금융그룹의 모든 SW ASSET을 관리할 수 있는 포털입니다.</S.Detail>
            사번 : <S.Input
                    type="text"
                    onChange={handleUserIdChange}
                    value={userId}
                />
            
            <S.LoginBtn onClick={handleLogin}>로그인</S.LoginBtn>
            <S.BackImg  src= '/assets/login_background.svg'></S.BackImg>
            </div>
        </S.Container>
        </>
    );
}