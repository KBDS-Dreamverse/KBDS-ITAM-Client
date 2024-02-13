import React, { useState, useEffect, useCallback } from 'react';
import Modal from '../../../../components/ui/Modal/Modal';
import { ModalContentWrapper } from '../../../../components/ui/Modal/Modal.style';
import * as S from './AssetModal.style';
import {
  tagList,
  categoryPackageSWList,
  categoryCloudServiceList,
  versionList,
} from '../../../../constants';
import { useMemo } from 'react';
import { useTable } from 'react-table';
import Table from '../../../../components/ui/Table/Table';
import { check } from 'prettier';
import { toHaveAttribute } from '@testing-library/jest-dom/dist/matchers';

export default function AssetModal({ onClose, id, workFor }) {
  console.log(workFor, id);
  const columns = React.useMemo(
    () => [
      {
        Header: '버전',
        accessor: 'version',
      },
      {
        Header: '사용 가이드',
        accessor: 'useGuide',
      },
      {
        Header: '설치 가이드',
        accessor: 'installGuide',
      },
      {
        Header: '설치 파일',
        accessor: 'installFile',
      },
    ],
    [],
  );
  const data = React.useMemo(
    () => [
      {
        version: 'v1.0',
        useGuide: '파일형태',
        installGuide: '파일형태',
        installFile: '파일형태',
      },
      {
        version: 'v1.1',
        useGuide: '파일형태',
        installGuide: '파일형태',
        installFile: '파일형태',
      },
      {
        version: 'v2.0',
        useGuide: '파일형태',
        installGuide: '',
        installFile: '',
      },
    ],
    [],
  );

  const [msg, setMsg] = useState('');
  const [guideMsg, setGuideMsg] = useState('복수 선택 가능');
  const [checkedList, setCheckedList] = useState([]);
  const [text, setText] = useState('');
  const [versionDetail, setVersionDetail] = useState('');

  useEffect(() => {
    if (workFor === 'tag') {
      setMsg('자산 태그');
      setGuideMsg('복수 선택 가능');
    }
    if (workFor === 'category') {
      setMsg('SW 카테고리 분류');
      setGuideMsg('단일 선택 가능');
    }
    if (workFor === 'version') {
      setMsg('버전 입력');
      setGuideMsg('단일 선택 가능');
    }
  });

  const onCheckedItem = useCallback(
    (checked, item) => {
      if (checked) {
        setCheckedList((prev) => [...prev, item]);
      } else if (!checked) {
        setCheckedList(checkedList.filter((el) => el !== item));
      }
    },
    [checkedList],
  );

  const renderModalContent = () => {
    if (workFor === 'tag') {
      console.log(checkedList);
      // api전송 -> asset 등록 페이지 input란에서 api호출해서 값 넣기
      return (
        <S.CheckboxGroup>
          {tagList.map((item) => {
            return (
              <S.Label className='checkboxLabel' key={item.name}>
                <S.Input
                  type='checkbox'
                  id={item.name}
                  onChange={(e) => {
                    onCheckedItem(e.target.checked, e.target.id);
                  }}
                />
                <S.Label htmlFor={item.name}>{item.name}</S.Label>
              </S.Label>
            );
          })}
        </S.CheckboxGroup>
      );
    }
    if (workFor === 'category') {
      console.log(checkedList);
      // api전송 -> asset 등록 페이지 input란에서 api호출해서 값 넣기
      return (
        <S.BoxWrapper>
          <S.BoxTitle>패키지SW</S.BoxTitle>
          <S.CheckboxGroup>
            {categoryPackageSWList.map((item) => {
              return (
                <S.Label key={item.name}>
                  <S.Input
                    type='checkbox'
                    id={item.name}
                    onChange={(e) => {
                      onCheckedItem(e.target.checked, e.target.id);
                    }}
                  />
                  <S.Label htmlFor={item.name}>{item.name}</S.Label>
                </S.Label>
              );
            })}
          </S.CheckboxGroup>

          <S.BoxTitle>클라우드 서비스</S.BoxTitle>
          <S.CheckboxGroup>
            {categoryCloudServiceList.map((item) => {
              return (
                <S.Label key={item.name}>
                  <S.Input
                    type='checkbox'
                    id={item.name}
                    onChange={(e) => {
                      onCheckedItem(e.target.checked, e.target.id);
                    }}
                  />
                  <S.Label htmlFor={item.name}>{item.name}</S.Label>
                </S.Label>
              );
            })}
          </S.CheckboxGroup>
        </S.BoxWrapper>
      );
    }
    if (workFor === 'version') {
      console.log(checkedList);
      return (
        <S.BoxWrapper>
          {versionList.map((item) => {
            return (
              <S.Li>
                <S.VLabel htmlFor={item.name}>{item.name}</S.VLabel>
                <S.Input
                  type='text'
                  id={item.name}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
                <S.UploadButton
                  onClick={(text) => {
                    setVersionDetail(text);
                    console.log(versionDetail);
                  }}
                >
                  업로드
                </S.UploadButton>
              </S.Li>
            );
          })}
          <Table columns={columns} data={data} />
        </S.BoxWrapper>
      );
    }
  };

  return (
    <Modal title={msg} descrip={guideMsg} onClose={onClose}>
      <ModalContentWrapper>
        {renderModalContent()}
        <S.ModalButton>등록</S.ModalButton>
      </ModalContentWrapper>
    </Modal>
  );
}
