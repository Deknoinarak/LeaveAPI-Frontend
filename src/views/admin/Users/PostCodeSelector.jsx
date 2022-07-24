import React, { useRef } from "react";
import * as bs from "react-bootstrap";
import * as mui from "@mui/material";
import postcode from "../../assets/json/th_postcode.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../components/css/all.min.css";

export const PostCodeSelector = (props) => {
  const {
    form,
    setForm,
    setErrors,
    errors,
    label,
    value,
    setField,
    prefix,
    className,
    readOnly,
  } = props;

  const handleUpdateAddress = (t, a, p, z) => {
    setForm({
      ...form,
      [prefix + "district"]: t,
      [prefix + "amphoe"]: a,
      [prefix + "province"]: p,
      [prefix + "zipcode"]: z,
    });

    if (!!errors[prefix + "district"])
      setErrors({
        ...errors,
        [prefix + "district"]: null,
      });
    if (!!errors[prefix + "amphoe"])
      setErrors({
        ...errors,
        [prefix + "district"]: null,
      });
    if (!!errors[prefix + "province"])
      setErrors({
        ...errors,
        [prefix + "district"]: null,
      });
    if (!!errors[prefix + "zipcode"])
      setErrors({
        ...errors,
        [prefix + "district"]: null,
      });
  };

  const elementRef = useRef();

  return (
    <div className={className}>
      <bs.Form.Control
        type="text"
        placeholder={`${label}...`}
        value={form[prefix + value]}
        onChange={(e) => setField(e.target.name, e.target.value)}
        isInvalid={!!errors[prefix + value]}
        name={prefix + value}
        ref={elementRef}
        readOnly={!!readOnly}
      />
      <bs.ListGroup
        className={`position-absolute ${
          document.activeElement === elementRef.current ? "d-block" : "d-none"
        }`}
        style={{ zIndex: 3000 }}
      >
        {postcode
          .filter((val) => {
            if (
              form[prefix + value] &&
              val[value].toString().includes(form[prefix + value].toString())
            ) {
              return val;
            }
            return null;
          })
          .slice(0, 10)
          .map((option, index) => (
            <bs.ListGroup.Item
              onClick={() =>
                handleUpdateAddress(
                  option.district,
                  option.amphoe,
                  option.province,
                  option.zipcode
                )
              }
              key={index}
              style={{ cursor: "pointer" }}
            >{`${option.district} >> ${option.amphoe} >> ${option.province} >> ${option.zipcode}`}</bs.ListGroup.Item>
          ))}
      </bs.ListGroup>
      <bs.Form.Control.Feedback type="invalid">
        {errors[prefix + value]}
      </bs.Form.Control.Feedback>
    </div>
  );
};

export const ProvinceSelector = (props) => {
  const { value, error, onChange, label } = props;
  const province = [...new Set(postcode.map((data) => data.province))];

  return (
    <mui.Autocomplete
      id="country-select-demo"
      freeSolo
      sx={{ width: "100%" }}
      options={province}
      autoHighlight
      value={value}
      onChange={onChange}
      getOptionLabel={(option) => option}
      renderOption={(props, option) => (
        <mui.Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          {option}
        </mui.Box>
      )}
      renderInput={(params) => (
        <mui.TextField
          {...params}
          label={label}
          error={!!error}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
        />
      )}
    />
  );
};

export const AmphoeSelector = (props) => {
  const { value, error, onChange, label } = props;
  const amphoe = [...new Set(postcode.map((data) => data.amphoe))];

  return (
    <mui.Autocomplete
      id="country-select-demo"
      freeSolo
      sx={{ width: "100%" }}
      options={amphoe}
      autoHighlight
      value={value}
      onChange={onChange}
      getOptionLabel={(option) => option}
      renderOption={(props, option) => (
        <mui.Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          {option}
        </mui.Box>
      )}
      renderInput={(params) => (
        <mui.TextField
          {...params}
          label={label}
          error={!!error}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
        />
      )}
    />
  );
};
