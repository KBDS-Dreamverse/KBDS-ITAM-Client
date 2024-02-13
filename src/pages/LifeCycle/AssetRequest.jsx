import React, { useState } from "react";
import * as S from "./AssetRequest.style";
import { DayPicker } from 'react-day-picker';
import DateModal from "./DatePickerModal";

export default function AssetRequest() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [ReqContent, setReqContent] = useState("");
    const [isStartDateModalOpen, setIsStartDateModalOpen] = useState(false);
    const [isEndDateModalOpen, setIsEndDateModalOpen] = useState(false);

    const handleOpenStartDateModal = () => {
        setIsStartDateModalOpen(true);
    };

    const handleCloseStartDateModal = () => {
        setIsStartDateModalOpen(false);
    };

    const handleOpenEndDateModal = () => {
        setIsEndDateModalOpen(true);
    };

    const handleCloseEndDateModal = () => {
        setIsEndDateModalOpen(false);
    };

    const handleStartDateChange = (date) => {
        setStartDate(date);
        setIsStartDateModalOpen(false); // 모달 닫기
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
        setIsEndDateModalOpen(false); // 모달 닫기
    };

    const handleReqContentChange = (e) => {
        const newReqContent = e.target.value;
        setReqContent(newReqContent);
    };

    return (
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
                                        <S.DATE>
                                            <S.InputDate
                                                type="text"
                                                placeholder="사용 시작 기간을 입력하세요"
                                                onClick={handleOpenStartDateModal}
                                                value={startDate}
                                            />
                                            <DateModal
                                                isOpen={isStartDateModalOpen}
                                                onClose={handleCloseStartDateModal}
                                                selectedDate={startDate}
                                                handleDateChange={handleStartDateChange}
                                            />
                                        </S.DATE>
                                        <S.Text> ~ </S.Text>
                                        <S.DATE>
                                            <S.InputDate
                                                type="text"
                                                placeholder="사용 마감 기간을 입력하세요"
                                                onClick={handleOpenEndDateModal}
                                                value={endDate}
                                            />
                                            <DateModal
                                                isOpen={isEndDateModalOpen}
                                                onClose={handleCloseEndDateModal}
                                                selectedDate={endDate}
                                                handleDateChange={handleEndDateChange}
                                            />
                                        </S.DATE>
                                    </S.TableCellInput>
                                </S.TableRow>

                                <S.TableRow>
                                    <S.TableHeader>사용 요청 사유</S.TableHeader>
                                    <S.TableCellInput>
                                        <S.InputText
                                            type="text"
                                            placeholder="사용 요청 사유를 입력하세요"
                                            onChange={handleReqContentChange}
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
    );
}
