import React, {useState} from "react";
import * as S from "./AssetRequest.style"
import { useNavigate } from 'react-router-dom';
import {DayPicker} from 'react-day-picker';



export default function AssetRequest() {
    const [startDate,setStartDate] = useState("");
    const [endDate,setEndDate] = useState("");
    const [ReqContent,setReqContent] = useState("");
    const handleStartDateChange = (e) => {
        const newStartDate = e.target.value;
        setStartDate(newStartDate);

    };
    
    const handleEndDateChange = (e) => {
        const newEndDate = e.target.value;
        setEndDate(newEndDate);

    };
    const handleReqContentChange = (e) => {
        const newReqContent = e.target.value;
        setReqContent(newReqContent);

    };
    return(
        <>
        <S.Wrapper>
            <S.Main>
                <S.Header>
                <S.HeaderTitle>자동차 보험 관리 시스템</S.HeaderTitle>
                    <S.HeaderButton>KB DEV 포럼에 질문하기</S.HeaderButton>
                    <S.HeaderButton>이슈 제보하기</S.HeaderButton>
                </S.Header>
                <S.Body>
                    <S.Table>
                        <tbody>
                            <S.TableRow>
                                <S.TableHeader>사용 기간</S.TableHeader>

                                <S.TableCellInput>
                                    <S.InputDate
                                        type="text"
                                        placeholder="사용 시작 기간을 입력하세요"
                                        value={startDate}
                                /> 
                                <S.Text> ~ </S.Text>
                            
                                <S.InputDate
                                    type="text"
                                    placeholder="사용 마감 기간을 입력하세요"
                                    value={endDate}
                                />
                                </S.TableCellInput>
                            </S.TableRow>

                            <S.TableRow>
                                <S.TableHeader>사용 요청 사유</S.TableHeader>
                                <S.TableCellInput>
                                    <S.InputText
                                        type="text"
                                        placeholder="사용 요청 사유를 입력하세요"
                                        value={ReqContent}
                                    /> 
                                </S.TableCellInput>
                            </S.TableRow>
                            <S.TableRow>
                                <S.TableHeader>본인 정보</S.TableHeader>
                                <S.TableCell>
                                    <S.Text>{sessionStorage.getItem("userName")} ({sessionStorage.getItem("userId")}) / {sessionStorage.getItem("userCorp")} / {sessionStorage.getItem("userDept")}</S.Text>
                                </S.TableCell>
                            </S.TableRow>
                            <S.TableRow>
                                <S.TableHeader>담당자 </S.TableHeader>
                                <S.TableCell>
                                <S.TableCellInput>
                                    <S.InputCheck
                                        type="checkbox"
                                        name="admin"
                                        value="예"
                                    />
                                </S.TableCellInput>
                                </S.TableCell>
                            </S.TableRow>
                        </tbody>
                    </S.Table>

                </S.Body>
                <S.RequestButton>요청하기</S.RequestButton>
            </S.Main>
        </S.Wrapper>
        </>
    )

}