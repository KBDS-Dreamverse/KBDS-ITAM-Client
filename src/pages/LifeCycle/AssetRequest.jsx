import React, { useState, useEffect } from "react";
import * as S from "./AssetRequest.style";
import DateModal from "./DatePickerModal";
import ClientAssetSidebar from "../../components/layouts/Navbar/ClientAssetSidebar";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../config";
import Modal from "../../components/ui/Modal/Modal";
export default function AssetRequest() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [reqContent, setReqContent] = useState("");
    const [isStartDateModalOpen, setIsStartDateModalOpen] = useState(false);
    const [isEndDateModalOpen, setIsEndDateModalOpen] = useState(false);
    const [adminList, setAdminList] = useState([]);
    const { deptId, contId } = useParams();
    const [showModal, setShowModal] = useState(false); // 모달을 표시하는 상태 변수
    const navigate = useNavigate();


    console.log("contId",contId);

    console.log("deptId",deptId);

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

    useEffect(() => {
        // 페이지가 로드될 때와 deptId가 변경될 때마다 부서별 자산 목록을 가져오는 API 호출
        axios.get(`${API.REQUEST_ADMIN_LIST}`.replace('{contId}', contId))
            .then(response => {
                console.log("count : ",response.data.count);
                setAdminList(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching department assets:', error);
            });
    }, [deptId, contId]); // deptId가 변경될 때마다 useEffect가 실행됨

    const handleRequest = () => {
        // 여기서 요청 처리 로직을 수행합니다.
        // 요청 완료 후 모달을 표시합니다.
        setShowModal(true);
      };
      const handleCloseModal = () => {
        // 모달을 닫을 때 특정 URL로 이동합니다.
        navigate(`/client/${deptId}/list`)
        // 모달을 닫습니다.
        setShowModal(false);
      };

    return (
        <>
            <ClientAssetSidebar deptId={deptId} contId={contId} />
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
                                            value={reqContent}
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
                                    <S.TableHeader>담당자</S.TableHeader>
                                    <S.TableCell>
                                        {adminList.map((item, index) => (
                                            <S.TableCellInput key={index}>
                                                <S.InputCheck
                                                    type="checkbox"
                                                    name="admin"
                                                    value="예"
                                                >
                                                    {item.userName}
                                                </S.InputCheck>
                                            </S.TableCellInput>
                                        ))}
                                    </S.TableCell>
                                </S.TableRow>
                            </tbody>
                        </S.Table>
                    </S.Body>
                    <S.RequestButton onClick={handleRequest}>요청하기</S.RequestButton>
                    {/* 모달 */}
                    {showModal && (
        <Modal onClose={handleCloseModal}>
          요청이 완료되었습니다.
        </Modal>
      )}
                </S.Main>
            </S.Wrapper>
        </>
    );
}
