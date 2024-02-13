import React, { useState } from 'react';
import * as S from './AssetRegister.style';
import useModal from '../../../../hooks/useModal';
import AssetModal from '../Modal/AssetModal';
import CompanyModal from '../../Company/Modal/CompanyModal';
import Button80 from '../../../../components/atoms/Button80';

export default function AssetRegister() {
  const [assetValue, setAssetValue] = useState('Y');
  const [workFor, setWorkFor] = useState('');
  const [assetID, setAssetID] = useState();
  const { isOpen, openModal, closeModal } = useModal();

  const renderModal = (workFor) =>
    workFor === 'add' ? (
      <CompanyModal workFor={workFor} onClose={closeModal} />
    ) : (
      <AssetModal workFor={workFor} id={assetID} onClose={closeModal} />
    );

  return (
    <S.Wrapper>
      {isOpen && renderModal(workFor)}

      <S.Title>자산 등록</S.Title>

      <S.Ul>
        <S.Li>
          <S.Label htmlFor='제품명'>제품명</S.Label>
          <S.Input410 type='text'></S.Input410>
        </S.Li>
        <S.Fieldset>
          <S.Label htmlFor='자산 구분'>자산 구분</S.Label>
          <S.Label>
            <S.Input type='radio' name='자산 구분' value='internal' checked />
            <S.Span>내부자산</S.Span>
          </S.Label>
          <S.Label>
            <S.Input type='radio' name='자산 구분' value='external' />
            <S.Span>외부자산</S.Span>
          </S.Label>
        </S.Fieldset>
        <S.Li>
          <S.Label htmlFor='자산 태그'>자산 태그</S.Label>
          <S.InputContainer>
            <S.Input300 type='text'></S.Input300>
            <Button80
              onClick={() => {
                openModal();
                setWorkFor('tag');
                setAssetID('1');
              }}
            >
              선택
            </Button80>
          </S.InputContainer>
        </S.Li>
        <S.Li>
          <S.Label htmlFor='SW 카테고리'>SW 카테고리</S.Label>
          <S.InputContainer>
            <S.Input300 type='text'></S.Input300>
            <Button80
              onClick={() => {
                openModal();
                setWorkFor('category');
                setAssetID('1');
              }}
            >
              선택
            </Button80>
          </S.InputContainer>
        </S.Li>
        <S.Li>
          <S.Label htmlFor='가격'>가격</S.Label>
          <S.InputContainer>
            <S.Input380 type='text'></S.Input380>
            <div>₩</div>
          </S.InputContainer>
        </S.Li>
        <S.Li>
          <S.Label htmlFor='버전'>버전</S.Label>
          <S.InputContainer>
            <div>5</div>
            <Button80
              onClick={() => {
                openModal();
                setWorkFor('version');
                setAssetID('1');
              }}
            >
              버전 입력
            </Button80>
          </S.InputContainer>
        </S.Li>
        <S.Li>
          <S.Label htmlFor='담당자 정보'>담당자 정보</S.Label>
          <S.Input410 type='text'></S.Input410>
        </S.Li>
        <S.Li>
          <S.Label htmlFor='이용자 메뉴얼'>이용자 메뉴얼</S.Label>
          <S.InputContainer>
            <S.Input380 type='text'></S.Input380>
            <S.DropDownButton>
              <S.DropDownImg src='/assets/icon_dropdown.svg'></S.DropDownImg>
            </S.DropDownButton>
          </S.InputContainer>
        </S.Li>
        <S.Li>
          <S.Label htmlFor='제공 업체'>제공 업체</S.Label>
          <S.InputContainer>
            <S.Input300 type='text'></S.Input300>
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
      </S.Ul>
      <S.RegisterButton>자산 등록</S.RegisterButton>
    </S.Wrapper>
  );
}
