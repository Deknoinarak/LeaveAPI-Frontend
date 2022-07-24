import React, { useState, useRef } from "react";
import { DatePicker } from "../../components/DatePicker";
import religion from "../../assets/json/religion.json";
import countries from "../../assets/json/country_th.json";
import {
  PostCodeSelector,
  ProvinceSelector,
  AmphoeSelector,
} from "./PostCodeSelector";
import PhoneInput from "react-phone-input-2";
import * as mui from "@mui/material";
import * as muiIcon from "@mui/icons-material";
import * as bs from "react-bootstrap";
import "react-phone-input-2/lib/material.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../components/css/all.min.css";

export const FormModal = ({ handleShowForm, showForm }) => {
  // * Variables * //
  const steps = ["ข้อมูลทั่วไป", "Create an ad group", "Create an ad"];
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const progress = useRef();
  const [progressStatus, setProgressStatus] = useState();

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const formData = {
    first_th: "",
    last_th: "",
    first_en: "",
    last_en: "",
    gender: "",
    dob: new Date(),
    nationality: { name: "ไทย", code: "TH" },
    race: "",
    religion: "buddhism",
    pob: "",
    tel_phone: "",
    tel_home: "",
    tel_work: "",
    now_address: "",
    now_district: "",
    now_amphoe: "",
    now_province: "",
    now_zipcode: "",
    sameAddress: "",
    per_address: "",
    per_district: "",
    per_amphoe: "",
    per_province: "",
    per_zipcode: "",
    card_id: "",
    card_amphoe: "",
    card_province: "",
    card_issued: new Date(),
    card_expired: new Date(),
    taxcard_id: "",
    marital_status: "single",
    marital_if_married: "",
    marital_spouse_income: undefined,
  };

  const [form, setForm] = useState(formData);
  const [errors, setErrors] = useState({});
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const validateForm = () => {
    const newErrors = {};

    if (activeStep === 0) {
      if (!form.first_th || form.first_th === "")
        newErrors.first_th = "กรุณากรอกชื่อจริงภาษาไทย";
      if (!form.last_th || form.last_th === "")
        newErrors.last_th = "กรุณากรอกนามสกุลภาษาไทย";
      if (!form.first_en || form.first_en === "")
        newErrors.first_en = "กรุณากรอกชื่อจริงภาษาอังกฤษ";
      if (!form.last_en || form.last_en === "")
        newErrors.last_en = "กรุณากรอกชื่อจริงภาษาอังกฤษ";

      if (!form.gender || form.gender === "")
        newErrors.gender = "กรุณาเลือกเพศ";
      if (!form.dob || form.dob === "")
        newErrors.dob = "กรุณาเลือกวันเดือนปีเกิด";
      else if (form.dob === "Invalid Date")
        newErrors.dob = "รูปแบบวันที่ไม่ถูกต้อง กรุณาเลือกวันเดือนปีเกิดใหม่";

      if (!form.nationality || form.nationality === "")
        newErrors.nationality = "กรุณาเลือกสัญชาติ";
      if (!form.race || form.race === "") newErrors.race = "กรุณากรอกเชื้อชาติ";
      if (!form.religion || form.religion === "")
        newErrors.religion = "กรุณาเลือกศาสนา";

      if (!form.pob || form.pob === "") newErrors.pob = "กรุณากรอกสถานที่เกิด";

      if (!form.tel_phone || form.tel_phone === "")
        newErrors.tel_phone = "กรุณากรอกเบอร์โทรศัพท์มือถือ";

      if (!form.now_address || form.now_address === "")
        newErrors.now_address = "กรุณากรอกที่อยู่ปัจจุบัน";
      if (!form.now_district || form.now_district === "")
        newErrors.now_district = "กรุณากรอกตำบลของที่อยู่ปัจจุบัน";
      if (!form.now_amphoe || form.now_amphoe === "")
        newErrors.now_amphoe = "กรุณากรอกอำเภอของที่อยู่ปัจจุบัน";
      if (!form.now_province || form.now_province === "")
        newErrors.now_province = "กรุณากรอกจังหวัดของที่อยู่ปัจจุบัน";
      if (!form.now_zipcode || form.now_zipcode === "")
        newErrors.now_zipcode = "กรุณากรอกรหัสไปรษณีย์ของที่อยู่ปัจจุบัน";

      if (!form.per_address || form.per_address === "")
        newErrors.per_address = "กรุณากรอกที่อยู่บนบัตรประชาชน";
      if (!form.per_district || form.per_district === "")
        newErrors.per_district = "กรุณากรอกตำบลของที่อยู่บนบัตรประชาชน";
      if (!form.per_amphoe || form.per_amphoe === "")
        newErrors.per_amphoe = "กรุณากรอกอำเภอของที่อยู่บนบัตรประชาชน";
      if (!form.per_province || form.per_province === "")
        newErrors.per_province = "กรุณากรอกจังหวัดของที่อยู่บนบัตรประชาชน";
      if (!form.per_zipcode || form.per_zipcode === "")
        newErrors.per_zipcode = "กรุณากรอกรหัสไปรษณีย์ของที่อยู่บนบัตรประชาชน";
    }

    return newErrors;
  };

  const handleSameAddress = (notChecked) => {
    if (!notChecked) {
      setForm({
        ...form,
        card_address: form.now_address,
        card_district: form.now_district,
        card_amphoe: form.now_amphoe,
        card_province: form.now_province,
        card_zipcode: form.now_zipcode,
        sameAddress: true,
      });
    } else {
      setForm({
        ...form,
        card_address: "",
        card_district: "",
        card_amphoe: "",
        card_province: "",
        card_zipcode: "",
        sameAddress: false,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      handleNext();
      if (activeStep === steps.length - 1) {
        if (progress.current) {
          clearTimeout(progress.current);
        }

        progress.current = window.setTimeout(() => {
          setProgressStatus("success");
        }, 3000);

        console.log("Form Submited!");
      }
    }
  };

  const handleResetForm = () => {
    if (activeStep === steps.length) {
      setActiveStep(0);
      setForm(formData);
      handleShowForm();
    }
  };

  return (
    <bs.Modal
      show={showForm}
      onHide={handleShowForm}
      backdrop="static"
      keyboard={false}
      size="lg"
      centered
    >
      <bs.Modal.Header closeButton>
        <bs.Modal.Title>สร้างพนักงาน</bs.Modal.Title>
      </bs.Modal.Header>
      <bs.Modal.Body>
        <mui.Stepper activeStep={activeStep} sx={{ mb: 3 }}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <mui.Typography variant="caption">Optional</mui.Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <mui.Step key={label} {...stepProps}>
                <mui.StepLabel {...labelProps}>{label}</mui.StepLabel>
              </mui.Step>
            );
          })}
        </mui.Stepper>
        {activeStep === steps.length && (
          <bs.Row className="justify-content-center align-items-center my-5">
            <div className="mb-3 flex justify-content-center align-items-center">
              {progressStatus === "success" ? (
                <mui.Fab color="success">
                  <muiIcon.Check />
                </mui.Fab>
              ) : (
                <mui.CircularProgress />
              )}
            </div>
            {progressStatus === "success"
              ? "เพิ่มข้อมูลเสร็จสิ่้น"
              : "กำลังเพิ่มข้อมูลพนักงาน..."}
          </bs.Row>
        )}
        {activeStep === 0 && (
          <bs.Container fluid>
            <bs.Form>
              <bs.Form.Group controlId="nameTH" as={bs.Row}>
                <bs.Form.Label column sm="12">
                  ชื่อภาษาไทย <sup className="text-danger fw-bold">*</sup>
                </bs.Form.Label>
                <bs.Col sm="6" className="mb-3">
                  <bs.Form.Control
                    type="text"
                    placeholder="ชื่อจริง..."
                    value={form.first_th}
                    onChange={(e) => setField("first_th", e.target.value)}
                    isInvalid={!!errors.first_th}
                  />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.first_th}
                  </bs.Form.Control.Feedback>
                </bs.Col>
                <bs.Col sm="6" className="mb-3">
                  <bs.Form.Control
                    type="text"
                    placeholder="นามสกุล..."
                    value={form.last_th}
                    onChange={(e) => setField("last_th", e.target.value)}
                    isInvalid={!!errors.last_th}
                  />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.last_th}
                  </bs.Form.Control.Feedback>
                </bs.Col>
              </bs.Form.Group>
              <bs.Form.Group controlId="nameEN" as={bs.Row}>
                <bs.Form.Label column sm="12">
                  ชื่อภาษาอังกฤษ <sup className="text-danger fw-bold">*</sup>
                </bs.Form.Label>
                <bs.Col sm="6" className="mb-3">
                  <bs.Form.Control
                    type="text"
                    placeholder="ชื่อจริง..."
                    value={form.first_en}
                    onChange={(e) => setField("first_en", e.target.value)}
                    isInvalid={!!errors.first_en}
                  />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.first_en}
                  </bs.Form.Control.Feedback>
                </bs.Col>
                <bs.Col sm="6" className="mb-3">
                  <bs.Form.Control
                    type="text"
                    placeholder="นามสกุล..."
                    value={form.last_en}
                    onChange={(e) => setField("last_en", e.target.value)}
                    isInvalid={!!errors.last_en}
                  />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.last_en}
                  </bs.Form.Control.Feedback>
                </bs.Col>
              </bs.Form.Group>
              <bs.Form.Group controlId="gender_dob" as={bs.Row}>
                <bs.Col sm="6" className="mb-3">
                  <bs.Form.Label>
                    เพศ <sup className="text-danger fw-bold">*</sup>
                  </bs.Form.Label>
                  <mui.FormControl fullWidth>
                    <mui.InputLabel id="gender-select-label">
                      เพศ...
                    </mui.InputLabel>
                    <mui.Select
                      labelId="gender-select-label"
                      id="gender-select"
                      value={form.gender}
                      label="เพศ..."
                      onChange={(e) => setField("gender", e.target.value)}
                      error={!!errors.gender}
                    >
                      <mui.MenuItem value={"male"}>ผู้ชาย</mui.MenuItem>
                      <mui.MenuItem value={"female"}>ผู้หญิง</mui.MenuItem>
                      <mui.MenuItem value={"not_spec"}>ไม่ระบุ</mui.MenuItem>
                    </mui.Select>
                  </mui.FormControl>
                  <bs.Form.Control type="hidden" isInvalid={!!errors.gender} />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.gender}
                  </bs.Form.Control.Feedback>
                </bs.Col>
                <bs.Col sm="6">
                  <bs.Form.Label>
                    วัน เดือน ปี เกิด{" "}
                    <sup className="text-danger fw-bold">*</sup>
                  </bs.Form.Label>
                  <DatePicker
                    label="วันเกิด"
                    time={form.dob}
                    setTime={setField}
                    name="dob"
                    maxDate={new Date()}
                    inputFormat={`dd LLL yyyy`}
                    error={!!errors.dob}
                  />
                  <bs.Form.Control type="hidden" isInvalid={!!errors.dob} />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.dob}
                  </bs.Form.Control.Feedback>
                </bs.Col>
              </bs.Form.Group>
              <bs.Form.Group controlId="national_race_religion" as={bs.Row}>
                <bs.Col lg="4" className="mb-3">
                  <bs.Form.Label>
                    สัญชาติ <sup className="text-danger fw-bold">*</sup>
                  </bs.Form.Label>
                  <mui.Autocomplete
                    id="country-select-demo"
                    freeSolo
                    sx={{ width: "100%" }}
                    options={countries}
                    autoHighlight
                    value={form.nationality}
                    onChange={(e, newValue) => {
                      setField("nationality", newValue);
                    }}
                    getOptionLabel={(option) => option.name}
                    renderOption={(props, option) => (
                      <mui.Box
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...props}
                      >
                        <img
                          loading="lazy"
                          width="20"
                          src={`https://flagcdn.com/w20/${option.alpha2.toLowerCase()}.png`}
                          srcSet={`https://flagcdn.com/w40/${option.alpha2.toLowerCase()}.png 2x`}
                          alt=""
                        />
                        {option.name} ({option.alpha2})
                      </mui.Box>
                    )}
                    renderInput={(params) => (
                      <mui.TextField
                        {...params}
                        label="สัญชาติ"
                        error={!!errors.nationality}
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                  />
                  <bs.Form.Control
                    type="hidden"
                    isInvalid={!!errors.nationality}
                  />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.nationality}
                  </bs.Form.Control.Feedback>
                </bs.Col>
                <bs.Col lg="4" sm="6">
                  <bs.Form.Label>
                    เชื้อชาติ <sup className="text-danger fw-bold">*</sup>
                  </bs.Form.Label>
                  <bs.Form.Control
                    type="text"
                    placeholder="เชื้อชาติ..."
                    value={form.race}
                    onChange={(e) => setField("race", e.target.value)}
                    isInvalid={!!errors.race}
                  />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.race}
                  </bs.Form.Control.Feedback>
                </bs.Col>
                <bs.Col lg="4" sm="6">
                  <bs.Form.Label>
                    ศาสนา <sup className="text-danger fw-bold">*</sup>
                  </bs.Form.Label>
                  <mui.FormControl fullWidth>
                    <mui.InputLabel id="nationality-select-label">
                      ศาสนา...
                    </mui.InputLabel>
                    <mui.Select
                      labelId="religion-select-label"
                      id="religion-select"
                      value={form.religion}
                      label="ศาสนา..."
                      onChange={(e) => setField("religion", e.target.value)}
                      error={!!errors.religion}
                    >
                      {religion.map((e) => (
                        <mui.MenuItem value={e.id} key={e.id}>
                          {e.name}
                        </mui.MenuItem>
                      ))}
                    </mui.Select>
                  </mui.FormControl>
                  <bs.Form.Control
                    type="hidden"
                    isInvalid={!!errors.religion}
                  />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.religion}
                  </bs.Form.Control.Feedback>
                </bs.Col>
              </bs.Form.Group>
              <bs.Form.Group className="mb-3" controlId="pob">
                <bs.Form.Label>สถานที่เกิด</bs.Form.Label>
                <bs.Form.Control
                  type="text"
                  placeholder="สถานที่เกิด..."
                  value={form.pob}
                  onChange={(e) => setField("pob", e.target.value)}
                  isInvalid={!!errors.pob}
                />
                <bs.Form.Control.Feedback type="invalid">
                  {errors.pob}
                </bs.Form.Control.Feedback>
              </bs.Form.Group>
              <bs.Form.Group controlId="phone" as={bs.Row}>
                <bs.Col sm="12" className="mb-3">
                  <bs.Form.Label>
                    โทรศัพท์มือถือ <sup className="text-danger fw-bold">*</sup>
                  </bs.Form.Label>
                  <PhoneInput
                    country="th"
                    value={form.tel_phone}
                    onChange={(e) => setField("tel_phone", e)}
                    inputStyle={{ width: "100%" }}
                    enableSearch
                  />
                  <bs.Form.Control
                    type="hidden"
                    isInvalid={!!errors.tel_phone}
                  />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.tel_phone}
                  </bs.Form.Control.Feedback>
                </bs.Col>
                <bs.Col sm="12" className="mb-3">
                  <bs.Form.Label>โทรศัพท์บ้าน</bs.Form.Label>
                  <PhoneInput
                    country="th"
                    value={form.tel_home}
                    onChange={(e) => setField("tel_home", e)}
                    enableSearch
                    inputStyle={{ width: "100%" }}
                  />
                  <bs.Form.Control
                    type="hidden"
                    isInvalid={!!errors.tel_home}
                  />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.tel_home}
                  </bs.Form.Control.Feedback>
                </bs.Col>
                <bs.Col sm="12" className="mb-3">
                  <bs.Form.Label>โทรศัพท์สำนักงาน</bs.Form.Label>
                  <PhoneInput
                    country="th"
                    value={form.tel_work}
                    onChange={(e) => setField("tel_work", e)}
                    enableSearch
                    inputStyle={{ width: "100%" }}
                  />
                  <bs.Form.Control
                    type="hidden"
                    isInvalid={!!errors.tel_work}
                  />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.tel_work}
                  </bs.Form.Control.Feedback>
                </bs.Col>
              </bs.Form.Group>
              <bs.Form.Group>
                <bs.Form.Label>
                  ที่อยู่ปัจจุบัน <sup className="text-danger fw-bold">*</sup>
                </bs.Form.Label>
                <div className="mb-3">
                  <bs.Form.Control
                    as="textarea"
                    value={form.now_address}
                    isInvalid={!!errors.now_address}
                    onChange={(e) => setField("now_address", e.target.value)}
                    rows={2}
                    placeholder="ที่อยู่..."
                  />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.now_address}
                  </bs.Form.Control.Feedback>
                </div>
                <PostCodeSelector
                  value="district"
                  form={form}
                  setForm={setForm}
                  setErrors={setErrors}
                  errors={errors}
                  setField={setField}
                  label="ตำบล"
                  prefix="now_"
                  className="mb-3"
                />
                <PostCodeSelector
                  value="amphoe"
                  form={form}
                  setForm={setForm}
                  setErrors={setErrors}
                  errors={errors}
                  setField={setField}
                  label="อำเภอ"
                  prefix="now_"
                  className="mb-3"
                />
                <PostCodeSelector
                  value="province"
                  form={form}
                  setForm={setForm}
                  setErrors={setErrors}
                  errors={errors}
                  setField={setField}
                  label="จังหวัด"
                  prefix="now_"
                  className="mb-3"
                />
                <PostCodeSelector
                  value="zipcode"
                  form={form}
                  setForm={setForm}
                  setErrors={setErrors}
                  errors={errors}
                  setField={setField}
                  label="รหัสไปรษณีย์"
                  prefix="now_"
                  className="mb-3"
                  type="number"
                />
              </bs.Form.Group>
              <bs.Form.Group className="mb-3">
                <bs.Form.Check
                  type="checkbox"
                  label="ที่อยู่เดียวกันกับบัตรประชาชน"
                  onChange={(e) =>
                    e.target.checked
                      ? handleSameAddress()
                      : handleSameAddress(true)
                  }
                />
              </bs.Form.Group>
              <bs.Form.Group>
                <bs.Form.Label>
                  ที่อยู่บนบัตรประชาชน{" "}
                  <sup className="text-danger fw-bold">*</sup>
                </bs.Form.Label>
                <div className="mb-3">
                  <bs.Form.Control
                    as="textarea"
                    value={form.per_address}
                    isInvalid={!!errors.per_address}
                    onChange={(e) => setField("per_address", e.target.value)}
                    rows={2}
                    placeholder="ที่อยู่..."
                    readOnly={!!form.sameAddress}
                  />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.per_address}
                  </bs.Form.Control.Feedback>
                </div>
                <PostCodeSelector
                  value="district"
                  form={form}
                  setForm={setForm}
                  setErrors={setErrors}
                  errors={errors}
                  setField={setField}
                  label="ตำบล"
                  prefix="per_"
                  readOnly={!!form.sameAddress}
                  className="mb-3"
                />
                <PostCodeSelector
                  value="amphoe"
                  form={form}
                  setForm={setForm}
                  setErrors={setErrors}
                  errors={errors}
                  setField={setField}
                  label="อำเภอ"
                  prefix="per_"
                  readOnly={!!form.sameAddress}
                  className="mb-3"
                />
                <PostCodeSelector
                  value="province"
                  form={form}
                  setForm={setForm}
                  setErrors={setErrors}
                  errors={errors}
                  setField={setField}
                  label="จังหวัด"
                  prefix="per_"
                  readOnly={!!form.sameAddress}
                  className="mb-3"
                />
                <PostCodeSelector
                  value="zipcode"
                  form={form}
                  setForm={setForm}
                  setErrors={setErrors}
                  errors={errors}
                  setField={setField}
                  label="รหัสไปรษณีย์"
                  readOnly={!!form.sameAddress}
                  prefix="per_"
                  className="mb-3"
                  type="number"
                />
              </bs.Form.Group>
              <bs.Form.Group as={bs.Row}>
                <bs.Form.Label column sm="12">
                  เลขที่บัตรประชาชน <sup className="text-danger fw-bold">*</sup>
                </bs.Form.Label>
                <bs.Col sm="12" className="mb-3">
                  <bs.Form.Control
                    placeholder="เลขที่บัตรประชาชน..."
                    type="number"
                    value={form.card_id}
                    onChange={(e) => setField("card_id", e.target.value)}
                    isInvalid={!!errors.card_id}
                  />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.card_id}
                  </bs.Form.Control.Feedback>
                </bs.Col>
                <bs.Form.Label column sm="12">
                  ออกให้ ณ <sup className="text-danger fw-bold">*</sup>
                </bs.Form.Label>
                <bs.Col sm="6" className="mb-3">
                  <AmphoeSelector value={form.card_amphoe} label="อำเภอ/เขต" />
                  <bs.Form.Control
                    type="hidden"
                    isInvalid={!!errors.card_amphoe}
                  />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.card_amphoe}
                  </bs.Form.Control.Feedback>
                </bs.Col>
                <bs.Col sm="6" className="mb-3">
                  <ProvinceSelector
                    value={form.card_province}
                    label="จังหวัด"
                  />
                  <bs.Form.Control
                    type="hidden"
                    isInvalid={!!errors.card_province}
                  />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.card_province}
                  </bs.Form.Control.Feedback>
                </bs.Col>
                <bs.Col sm="6" className="mb-3">
                  <DatePicker
                    label="วันออกบัตร"
                    time={form.card_issued}
                    setTime={setField}
                    name="card_issued"
                    maxDate={new Date()}
                    inputFormat={`dd LLL yyyy`}
                    error={!!errors.card_issued}
                  />
                  <bs.Form.Control
                    type="hidden"
                    isInvalid={!!errors.card_issued}
                  />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.card_issued}
                  </bs.Form.Control.Feedback>
                </bs.Col>
                <bs.Col sm="6" className="mb-3">
                  <DatePicker
                    label="วันบัตรหมดอายุ"
                    time={form.card_expired}
                    setTime={setField}
                    name="card_expired"
                    minDate={new Date()}
                    inputFormat={`dd LLL yyyy`}
                    error={!!errors.card_expired}
                  />
                  <bs.Form.Control
                    type="hidden"
                    isInvalid={!!errors.card_expired}
                  />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.card_expired}
                  </bs.Form.Control.Feedback>
                </bs.Col>
              </bs.Form.Group>
              <bs.Form.Group className="mb-3">
                <bs.Form.Label>
                  เลขที่บัตรประจำตัวผู้เสียภาษี{" "}
                  <sup className="text-danger fw-bold">*</sup>
                </bs.Form.Label>
                <bs.Form.Control
                  placeholder="เลขที่บัตรประจำตัวผู้เสียภาษี..."
                  type="text"
                  value={form.taxcard_id}
                  onChange={(e) => setField("taxcard_id", e.target.value)}
                  isInvalid={!!errors.taxcard_id}
                />
                <bs.Form.Control.Feedback type="invalid">
                  {errors.taxcard_id}
                </bs.Form.Control.Feedback>
              </bs.Form.Group>
              <bs.Form.Group as={bs.Row}>
                <bs.Col sm="12" className="mb-3">
                  <mui.FormControl fullWidth>
                    <bs.Form.Label>
                      สถานะครอบครัว <sup className="text-danger fw-bold">*</sup>
                    </bs.Form.Label>
                    <mui.RadioGroup
                      row
                      value={form.marital_status}
                      onChange={(e) =>
                        setField("marital_status", e.target.value)
                      }
                    >
                      <mui.FormControlLabel
                        value="single"
                        control={<mui.Radio />}
                        label="โสด"
                      />
                      <mui.FormControlLabel
                        value="married"
                        control={<mui.Radio />}
                        label="แต่งงาน"
                      />
                      <mui.FormControlLabel
                        value="divorced"
                        control={<mui.Radio />}
                        label="หย่า"
                      />
                      <mui.FormControlLabel
                        value="windowed"
                        control={<mui.Radio />}
                        label="หม้าย"
                      />
                      <mui.FormControlLabel
                        value="separated"
                        control={<mui.Radio />}
                        label="แยกกันอยู่"
                      />
                    </mui.RadioGroup>
                  </mui.FormControl>
                </bs.Col>
                {form.marital_status === "married" && (
                  <>
                    <bs.Col sm="12" className="mb-3">
                      <mui.FormControl fullWidth>
                        <bs.Form.Label>
                          กรณีแต่งงาน{" "}
                          <sup className="text-danger fw-bold">*</sup>
                        </bs.Form.Label>
                        <mui.RadioGroup
                          row
                          value={form.marital_if_married}
                          onChange={(e) =>
                            setField("marital_if_married", e.target.value)
                          }
                        >
                          <mui.FormControlLabel
                            value="registerd"
                            control={<mui.Radio />}
                            label="จดทะเบียน"
                          />
                          <mui.FormControlLabel
                            value="non_registerd"
                            control={<mui.Radio />}
                            label="ไม่จดทะเบียน"
                          />
                        </mui.RadioGroup>
                      </mui.FormControl>
                    </bs.Col>
                    <bs.Col sm="12" className="mb-3">
                      <mui.FormControl fullWidth>
                        <bs.Form.Label>
                          คู่สมรสมีรายได้หรือไม่{" "}
                          <sup className="text-danger fw-bold">*</sup>
                        </bs.Form.Label>
                        <mui.RadioGroup
                          row
                          value={form.marital_spouse_income}
                          onChange={(e) =>
                            setField("marital_spouse_income", e.target.value)
                          }
                        >
                          <mui.FormControlLabel
                            value={true}
                            control={<mui.Radio />}
                            label="มี"
                          />
                          <mui.FormControlLabel
                            value={false}
                            control={<mui.Radio />}
                            label="ไม่มี"
                          />
                        </mui.RadioGroup>
                      </mui.FormControl>
                    </bs.Col>
                  </>
                )}
              </bs.Form.Group>
            </bs.Form>
          </bs.Container>
        )}
      </bs.Modal.Body>
      <bs.Modal.Footer className="justify-content-between">
        <div>
          {activeStep < steps.length && (
            <bs.Button variant="danger" onClick={handleShowForm}>
              ยกเลิก
            </bs.Button>
          )}
        </div>
        <div>
          <bs.Button
            variant={activeStep >= steps.length ? "success" : "outline-primary"}
            disabled={activeStep === 0}
            onClick={activeStep >= steps.length ? handleResetForm : handleBack}
            className="me-2"
          >
            {activeStep >= steps.length ? "ปิด" : "ย้อนกลับ"}
          </bs.Button>
          {isStepOptional(activeStep) && (
            <bs.Button
              variant="outline-secondary"
              onClick={handleSkip}
              className="me-2"
            >
              ข้าม
            </bs.Button>
          )}
          {activeStep < steps.length && (
            <bs.Button
              variant={activeStep >= steps.length - 1 ? "success" : "primary"}
              onClick={handleSubmit}
            >
              {activeStep >= steps.length - 1 ? "สร้าง" : "ต่อไป"}
            </bs.Button>
          )}
        </div>
      </bs.Modal.Footer>
    </bs.Modal>
  );
};
