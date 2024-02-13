import { useState } from 'react';
import { format } from 'date-fns';
import ko from 'date-fns/locale/ko'; // 한국어 locale import
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import styled from 'styled-components';


export default function DateModal({ isOpen, onClose, selectedDate, handleDateChange }) {
    const [selected, setSelected] = useState();
    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(); // 모달 외부를 클릭하면 모달 닫기
        }
    };
        const handleDateSelect = (date) => {
        const formattedDate = date ? format(date, 'yyyy-MM-dd', { locale: ko }) : '';

        setSelected(formattedDate);
        handleDateChange(formattedDate); // 선택한 날짜를 부모 컴포넌트로 전달
        onClose(); // 날짜 선택 후 모달 닫기
    };
  return (
    <div style={{ display: isOpen ? 'block' : 'none' }} onClick={handleOutsideClick}>
      <CustomDayPicker 
       mode="single"
       selected={selected} 
       format="yyyy-MM-dd"
       locale={ko}
       onSelect={handleDateSelect}
       onChange={handleDateChange} />
    </div>
  );
}

const CustomDayPicker = styled(DayPicker)`
border-radius : 5px;

`;