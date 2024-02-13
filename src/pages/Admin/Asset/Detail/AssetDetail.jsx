import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './AssetDetail.style';
import { assetInfos } from '../../../../utils/data';

export default function AssetDetail() {
  const { id } = useParams();

  const asset = assetInfos[id - 1];
  return (
    <S.Wrapper>
      <S.Title>{asset.name}</S.Title>
    </S.Wrapper>
  );
}
