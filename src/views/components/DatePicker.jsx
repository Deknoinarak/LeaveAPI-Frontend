import React from "react";
import { TextField } from "@mui/material";
import {
  LocalizationProvider,
  DatePicker as DatePick,
  TimePicker as TimePick,
} from "@mui/x-date-pickers";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { th } from "date-fns/locale";

export const DatePicker = ({ setTime, time, label, name, ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={th}>
      <DatePick
        label={label}
        renderInput={(params) => (
          <TextField
            {...params}
            style={{ ...props.style, width: "100%" }}
            error={props.error}
          />
        )}
        value={time}
        onChange={(time) => {
          setTime(name, time);
        }}
        disableMaskedInput={true}
        {...props}
      />
    </LocalizationProvider>
  );
};

export const TimePicker = ({ setTime, time, label, name, ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={th}>
      <TimePick
        label={label}
        renderInput={(params) => <TextField {...params} />}
        value={time}
        onChange={(time) => {
          setTime(name, time);
        }}
        disableMaskedInput={true}
        {...props}
      />
    </LocalizationProvider>
  );
};
