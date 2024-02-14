import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './ContractDetail.style';
import { contractInfos, contractHistoryInfos } from '../../../../utils/data';
import {
  contractInfoLeftList,
  contractInfoRightList,
} from '../../../../constants';
import useModal from '../../../../hooks/useModal';
import Modal from '../../../../components/ui/Modal/Modal';

export default function ContractDetail() {
  const { isOpen, openModal, closeModal } = useModal();

  const { id } = useParams();
  const [text, setText] = useState('');
  const [disabled, setDisabled] = useState('disabled');
  const contract = contractInfos.filter((con) => {
    if (con.id === id) return con;
  });
  console.log('contract', contract);
  console.log('contract.unitContract', contract[0].unitContract);

  const renderAssetFile = () => {
    return (
      <S.Li>
        <S.Label htmlFor='assetFile'>첨부파일</S.Label>
        <S.FileDiv>파일을 찾아 첨부 파일로 추가하세요.</S.FileDiv>
        <S.PButtonWrapper>
          <S.PlusButton>검색</S.PlusButton>
        </S.PButtonWrapper>
      </S.Li>
    );
  };
  const renderAssetMemos = () => {
    return (
      <>
        <S.Li>
          <S.Label htmlFor='assetMemo'>메모</S.Label>
          <S.MemoInput
            type='text'
            id='assetMemo'
            placeholder='메모를 입력해 주세요.'
            onChange={(e) => {
              setText(e.target.value);
            }}
            disabled={disabled}
          />
        </S.Li>
        <S.Label>활동</S.Label>
        <S.HistoryContainer>
          {contractHistoryInfos.map((item) => {
            return (
              <S.HistoryLi>
                <S.HistoryManIcon />
                <S.HistoryTextContainer>
                  <S.HistoryManager>
                    {item.unitHistory.manager}
                  </S.HistoryManager>
                  <S.HistoryH6>
                    {item.unitHistory.activity} {item.unitHistory.date}
                  </S.HistoryH6>
                  <S.HistoryH6>{item.unitHistory.descrip}</S.HistoryH6>
                </S.HistoryTextContainer>
              </S.HistoryLi>
            );
          })}
        </S.HistoryContainer>
      </>
    );
  };
  const renderAssetDefaultInfos = (disabled) => {
    return (
      <>
        <S.Li>
          <S.Label htmlFor='contractID'>계약ID</S.Label>
          <S.DefaultInput
            type='text'
            id='contractID'
            value={contract[0].unitContract.contractNum}
            onChange={(e) => {
              setText(e.target.value);
            }}
            disabled={disabled}
          />
        </S.Li>

        <S.RowWrapper>
          <S.ColumnWrapper>
            {contractInfoLeftList.map((item) => {
              let itemName = item.value;
              return (
                <S.Li>
                  <S.Label htmlFor={item.name}>{item.name}</S.Label>
                  <S.DefaultInput
                    type='text'
                    id={item.name}
                    value={contract[0].unitContract[itemName]}
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                    disabled={disabled}
                  />
                </S.Li>
              );
            })}
          </S.ColumnWrapper>
          <S.ColumnWrapper>
            {contractInfoRightList.map((item) => {
              let itemName = item.value;
              return (
                <S.Li>
                  <S.Label htmlFor={item.name}>{item.name}</S.Label>
                  <S.DefaultInput
                    type='text'
                    id={item.name}
                    value={contract[0].unitContract[itemName]}
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                    disabled={disabled}
                  />
                </S.Li>
              );
            })}
          </S.ColumnWrapper>
        </S.RowWrapper>
      </>
    );
  };

  return (
    <S.Wrapper>
      {isOpen && (
        <Modal title='계약 정보가 수정되었습니다.' onClose={closeModal}></Modal>
      )}

      <S.Top>
        <S.Title>{contract[0].unitContract.name}</S.Title>
        <S.ButtonWrapper>
          <S.Button onClick={() => setDisabled('')}>수정</S.Button>
          <S.Button
            onClick={() => {
              setDisabled('disabled');
              openModal();
            }}
          >
            완료
          </S.Button>
        </S.ButtonWrapper>
      </S.Top>
      <S.Body>
        <S.Left>{renderAssetDefaultInfos(disabled)}</S.Left>
        <S.Right>{renderAssetMemos(disabled)}</S.Right>
      </S.Body>
    </S.Wrapper>
  );
}
