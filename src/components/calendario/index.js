import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 10px;
  border: 1px solid rgb(11 91 198);
  color: blue;
  border-radius: 5px;
  width: auto;
`;

export default function Calendario({ onDateChange }) {
  const handleDateChange = (newDate) => {
    if (onDateChange) {
      onDateChange(newDate.format("YYYY-MM-DD"));
    }
  };

  return (
    <Container>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar sx={{ width: 300 }} onChange={handleDateChange} />
      </LocalizationProvider>
    </Container>
  );
}
