import React from 'react';
import { useTable } from 'react-table';
import * as S from './Table.style';

export default function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <S.Table {...getTableProps()}>
      <S.THead>
        {headerGroups.map((headerGroup) => (
          <S.Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <S.Th {...column.getHeaderProps()}>
                {column.render('Header')}
              </S.Th>
            ))}
          </S.Tr>
        ))}
      </S.THead>
      <S.TBody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <S.Tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <S.Td {...cell.getCellProps()}>{cell.render('Cell')}</S.Td>
              ))}
            </S.Tr>
          );
        })}
      </S.TBody>
    </S.Table>
  );
}
