import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './AssetDetail.style';
import { assetInfos, assetHistoryInfos } from '../../../../utils/data';
import { assetInfoLeftList, assetInfoRightList } from '../../../../constants';

export default function AssetDetail() {
  const { id } = useParams();
  const [text, setText] = useState('');
  const [disabled, setDisabled] = useState('disabled');
  const asset = assetInfos[id - 1];
  console.log(AssetDetail);

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
          {assetHistoryInfos.map((item) => {
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
          <S.Label htmlFor='assetName'>이름</S.Label>
          <S.DefaultInput
            type='text'
            id='assetName'
            value={asset.unitAsset.name}
            onChange={(e) => {
              setText(e.target.value);
            }}
            disabled={disabled}
          />
        </S.Li>

        <S.RowWrapper>
          <S.ColumnWrapper>
            {assetInfoLeftList.map((item) => {
              let itemName = item.value;
              return (
                <S.Li>
                  <S.Label htmlFor={item.name}>{item.name}</S.Label>
                  <S.DefaultInput
                    type='text'
                    id={item.name}
                    value={asset.unitAsset[itemName]}
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
            {assetInfoRightList.map((item) => {
              let itemName = item.value;
              return (
                <S.Li>
                  <S.Label htmlFor={item.name}>{item.name}</S.Label>
                  <S.DefaultInput
                    type='text'
                    id={item.name}
                    value={asset.unitAsset[itemName]}
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
      <S.Top>
        <S.Title>{asset.unitAsset.name}</S.Title>
        <S.ButtonWrapper>
          <S.Button onClick={() => setDisabled('')}>수정</S.Button>
          <S.Button onClick={() => setDisabled('disabled')}>완료</S.Button>
        </S.ButtonWrapper>
      </S.Top>
      <S.Body>
        <S.Left>{renderAssetDefaultInfos(disabled)}</S.Left>
        <S.Middle>{renderAssetMemos()}</S.Middle>
        <S.Right>{renderAssetFile()}</S.Right>
      </S.Body>
    </S.Wrapper>
  );
}
