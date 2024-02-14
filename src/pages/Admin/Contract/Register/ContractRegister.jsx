import React, { useState, useCallback } from 'react';
import * as S from './ContractRegister.style';
import { useNavigate } from 'react-router-dom';
import useModal from '../../../../hooks/useModal';
import ContractModal from '../Modal/ContractModal';
import CompanyModal from '../../Company/Modal/CompanyModal';
import Button80 from '../../../../components/atoms/Button80';
import {
  licenseSupplyList,
  licensePeriodList,
  licenseUserList,
} from '../../../../constants';
import Box from './Box/Box';

export default function ContractRegister() {
  const [assetValue, setAssetValue] = useState('Y');
  const [contractID, setContractID] = useState('C000002');
  const [workFor, setWorkFor] = useState('');
  const [assetID, setAssetID] = useState();
  const [checkedSupplyList, setCheckedSupplyList] = useState([]);
  const [checkedPeriodList, setCheckedPeriodList] = useState([]);
  const [checkedUserList, setCheckedUserList] = useState([]);
  const navigate = useNavigate();

  const [disabled, setDisabled] = useState('');

  const { isOpen, openModal, closeModal } = useModal();

  const renderModal = (workFor) =>
    workFor === 'add' ? (
      <CompanyModal workFor={workFor} onClose={closeModal} />
    ) : (
      <ContractModal workFor={workFor} id={assetID} onClose={closeModal} />
    );

  const onCheckedSupply = useCallback(
    (checked, item) => {
      if (checked) {
        setCheckedSupplyList((prev) => [...prev, item]);
      } else if (!checked) {
        setCheckedSupplyList(checkedSupplyList.filter((el) => el !== item));
      }
    },
    [checkedSupplyList],
  );
  const onCheckedPeriod = useCallback(
    (checked, item) => {
      if (checked) {
        setCheckedPeriodList((prev) => [...prev, item]);
      } else if (!checked) {
        setCheckedPeriodList(checkedPeriodList.filter((el) => el !== item));
      }
    },
    [checkedPeriodList],
  );
  const onCheckedUser = useCallback(
    (checked, item) => {
      if (checked) {
        setCheckedUserList((prev) => [...prev, item]);
      } else if (!checked) {
        setCheckedUserList(checkedUserList.filter((el) => el !== item));
      }
    },
    [checkedUserList],
  );

  const renderBox = (title) => <Box title={title} />;
  //   const checkOnlyOne = (name, item) => {
  //     const checkboxes = document.getElementsByName({ name });
  //     checkboxes.forEach((cb) => {
  //       return Object.assign(cb, { checked: false });
  //     });
  //     return Object.assign(item, { checked: true });
  //   };

  return (
    <S.Wrapper>
      {isOpen && renderModal(workFor)}

      <S.Title>계약 등록</S.Title>

      <S.Ul>
        <S.Li>
          <S.Label htmlFor='requestID'>요청ID</S.Label>
          <S.InputContainer>
            <S.Input380
              id='requestID'
              type='text'
              disabled={disabled}
            ></S.Input380>
            <S.DropDownButton>
              <S.DropDownImg src='/assets/icon_dropdown.svg'></S.DropDownImg>
            </S.DropDownButton>
          </S.InputContainer>
          <S.CheckLabel key='requestID_exist'>
            <S.Input
              type='checkbox'
              id='requestID_exist'
              //onCheckedItem(e.target.checked, e.target.id);
              onChange={(e) => {
                e.target.checked === true
                  ? setDisabled('disabled')
                  : setDisabled('');
              }}
            />
            <S.CheckLabel htmlFor='requestID_exist'>요청 없음</S.CheckLabel>
          </S.CheckLabel>
        </S.Li>
        <S.Li>
          <S.Label htmlFor='contractName'>계약명</S.Label>
          <S.Input410 id='contractName' type='text'></S.Input410>
        </S.Li>
        <S.Li>
          <S.Label htmlFor='assetName'>계약 대상 자산</S.Label>
          <S.InputContainer>
            <S.Input380 id='assetName' type='text'></S.Input380>
            <S.DropDownButton>
              <S.DropDownImg src='/assets/icon_dropdown.svg'></S.DropDownImg>
            </S.DropDownButton>
          </S.InputContainer>
        </S.Li>
        <S.Li>
          <S.Label htmlFor='company'>계약 업체</S.Label>
          <S.InputContainer>
            <S.Input300 id='company' type='text'></S.Input300>
            <S.DropDownButton>
              <S.DropDownImg src='/assets/icon_dropdown.svg'></S.DropDownImg>
            </S.DropDownButton>
            <S.Button120
              onClick={() => {
                openModal();
                setWorkFor('add');
              }}
            >
              업체 추가
            </S.Button120>
          </S.InputContainer>
        </S.Li>
        <S.Li>
          <S.Label htmlFor='manager'>계약 담당자</S.Label>
          <S.Input410 id='manager' type='text'></S.Input410>
        </S.Li>
        <S.Li>
          <S.Label htmlFor='cost'>가격</S.Label>
          <S.InputContainer>
            <S.Input380 id='cost' type='text'></S.Input380>
            <div>₩</div>
          </S.InputContainer>
        </S.Li>
        <S.Li>
          <S.Label htmlFor='registrant'>계약 등록자</S.Label>
          <S.Input410 id='registrant' type='text'></S.Input410>
        </S.Li>
        <S.Li>
          <S.Label htmlFor='startDate'>계약 시작일</S.Label>
          <S.Input410 id='startDate' type='text'></S.Input410>
        </S.Li>
        <S.Li>
          <S.Label htmlFor='endDate'>계약 종료일</S.Label>
          <S.Input410 id='endDate' type='text'></S.Input410>
        </S.Li>
        <S.Li>
          <S.Label htmlFor='file'>계약서 첨부파일</S.Label>
          <S.InputContainer>
            <S.Input300
              id='file'
              type='text'
              placeholder='파일 형식 ex) pdf, ppt'
            ></S.Input300>
            <Button80
              onClick={() => {
                openModal();
                setWorkFor('file');
                setAssetID('1');
              }}
            >
              선택
            </Button80>
          </S.InputContainer>
        </S.Li>
        <S.Li>
          <S.Label htmlFor='memo'>기타 사항</S.Label>
          <S.Input410 id='memo' type='text'></S.Input410>
        </S.Li>
        <S.Li>
          <S.Label htmlFor='license_supply'>라이센스 공급형태</S.Label>
          <S.CheckboxGroup>
            {licenseSupplyList.map((item) => {
              return (
                <S.CheckLabel key={item.name}>
                  <S.Input
                    name='supply'
                    type='checkbox'
                    id={item.name}
                    onChange={(e) => {
                      onCheckedSupply(e.target.checked, e.target.id);
                    }}
                  />
                  <S.CheckLabel htmlFor={item.name}>{item.name}</S.CheckLabel>
                </S.CheckLabel>
              );
            })}
          </S.CheckboxGroup>
        </S.Li>
        {checkedSupplyList[0] && renderBox(checkedSupplyList[0])}

        <S.Li>
          <S.Label htmlFor='license_period'>라이센스 기간</S.Label>
          <S.CheckboxGroup>
            {licensePeriodList.map((item) => {
              return (
                <S.CheckLabel key={item.name}>
                  <S.Input
                    name='period'
                    type='checkbox'
                    id={item.name}
                    onChange={(e) => {
                      onCheckedPeriod(e.target.checked, e.target.id);
                    }}
                  />
                  <S.CheckLabel htmlFor={item.name}>{item.name}</S.CheckLabel>
                </S.CheckLabel>
              );
            })}
          </S.CheckboxGroup>
        </S.Li>
        {checkedPeriodList[0] && renderBox(checkedPeriodList[0])}

        <S.Li>
          <S.Label htmlFor='license_user'>라이센스 사용자 수</S.Label>
          <S.CheckboxGroup>
            {licenseUserList.map((item) => {
              return (
                <S.CheckLabel key={item.name}>
                  <S.Input
                    name='user'
                    type='checkbox'
                    id={item.name}
                    onChange={(e) => {
                      onCheckedUser(e.target.checked, e.target.id);
                    }}
                  />
                  <S.CheckLabel htmlFor={item.name}>{item.name}</S.CheckLabel>
                </S.CheckLabel>
              );
            })}
          </S.CheckboxGroup>
        </S.Li>
        {checkedUserList[0] && renderBox(checkedUserList[0])}
      </S.Ul>
      <S.RegisterButton
        onClick={() => {
          navigate(`/admin/contract/${contractID}/detail`);
        }}
      >
        계약 등록
      </S.RegisterButton>
    </S.Wrapper>
  );
}
