import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

export default function BasicDateRangePicker({ daterange, setDateRange }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <DateRangePicker
      startDate={startDate}
      startDateId="start_date_id"
      endDate={endDate}
      endDateId="end_date_id"
      onDatesChange={({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
        
        if (typeof setDateRange === 'function') {
          setDateRange([startDate, endDate]);
        }
      }}
      focusedInput={focusedInput}
      onFocusChange={focusedInput => setFocusedInput(focusedInput)}
      showClearDates={true}
      numberOfMonths={1}
      isOutsideRange={() => false}
    />
  );
}
