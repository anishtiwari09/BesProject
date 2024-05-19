"use client";
import { emailValidator, numberValidator } from "@/app/Utility/validator";
import {
  Autocomplete,
  Button,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import styles from "@/app/registrationform/Form/form.module.css";
import PleaseWaitLoader from "@/app/UIComponent/Loader/PleaseWaitLoader";
export default function BookYourSpace({ countryData }) {
  const [data, setData] = useState({});
  const [submit, setSubmit] = useState(false);
  const handleChange = (type, value) => {
    console.log(value, type);
    if (data[type]) data[type].value = value?.trim();
    else {
      data[type] = { value: value?.trim() };
    }
    if (value?.trim()) {
      data[type].isError = false;
    }
    setData({ ...data });
  };
  const checkValidator = (type, data, customError) => {
    let isFlag = true;
    if (data[type]?.value?.trim()) {
      data[type].isError = false;
    } else {
      isFlag = false;
      data[type] = data[type] || {};
      data[type].isError = true;
    }
    console.log({ type: data[type] });
    data[type].error = "";
    return isFlag;
  };
  const handleSubmit = () => {
    let isFlag = [];
    isFlag.push(checkValidator("name", data));
    isFlag.push(checkValidator("company", data));
    isFlag.push(checkValidator("city", data));
    let temp = checkValidator("email", data);
    if (temp) {
      console.log(data["email"]?.value);
      let validator = emailValidator(data["email"]?.value || "");
      isFlag.push(validator);
      if (!validator) {
        data["email"].isError = true;
        data["email"].error = "Please provide valid email";
      }
    }
    isFlag.push(temp);
    temp = checkValidator("mobile", data);
    if (temp) {
      let validator = numberValidator(data["mobile"]?.value || "");
      isFlag.push(validator);
      if (!validator) {
        data["mobile"].isError = true;
        data["mobile"].error = "Please provide valid mobile";
      }
    }
    isFlag.push(temp);
    isFlag.push(checkValidator("country", data));
    isFlag.push(checkValidator("about_expo", data));
    if (isFlag.includes(false)) {
      console.log(data);
      setData({ ...data });
    } else {
      setSubmit(true);
    }
  };
  return (
    <div className="flex gap-2 flex-col bg-white p-4 rounded">
      <h3 className="text-[30px] font-bold">Book your space</h3>
      <p className="text-[16px] font-bold">
        Please submit your details in the form below and a member of from our
        team will get back to you.
      </p>
      <div className="flex flex-col gap-4 my-8">
        <div className="flex flex-row gap-4 items-center ">
          <label className="w-[180px]">
            Full Name <span className="text-[red]">*</span>
          </label>
          <div className="flex flex-1">
            <TextField
              fullWidth
              onChange={(e) => handleChange("name", e.target.value)}
              error={data["name"]?.isError || false}
              helperText={
                data["name"]?.isError
                  ? data["name"]?.error || "This Field is Required"
                  : ""
              }
              value={data["name"]?.value || ""}
            />
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <label className="w-[180px]">
            Company / Organisation Name <span className="text-[red]">*</span>
          </label>
          <div className="flex flex-1">
            <TextField
              fullWidth
              onChange={(e) => handleChange("company", e.target.value)}
              value={data["company"]?.value || ""}
              error={data["company"]?.isError || false}
              helperText={
                data["company"]?.isError
                  ? data["company"]?.error || "This Field is Required"
                  : ""
              }
            />
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <label className="w-[180px]">Designation</label>
          <div className="flex flex-1">
            <TextField
              fullWidth
              value={data["designation"]?.value || ""}
              onChange={(e) => handleChange("designation", e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <label className="w-[180px]">
            Email <span className="text-[red]">*</span>
          </label>
          <div className="flex flex-1">
            <TextField
              fullWidth
              value={data["email"]?.value || ""}
              error={data["email"]?.isError || false}
              onChange={(e) => handleChange("email", e.target.value)}
              helperText={
                data["email"]?.isError
                  ? data["email"]?.error || "This Field is Required"
                  : ""
              }
            />
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <label className="w-[180px]">
            Mobile No. <span className="text-[red]">*</span>
          </label>
          <div className="flex flex-1">
            <TextField
              fullWidth
              value={data["mobile"]?.value || ""}
              error={data["mobile"]?.isError || false}
              onChange={(e) => handleChange("mobile", e.target.value)}
              helperText={
                data["mobile"]?.isError
                  ? data["mobile"]?.error || "This Field is Required"
                  : ""
              }
            />
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <label className="w-[180px]">
            City <span className="text-[red]">*</span>
          </label>
          <div className="flex flex-1">
            <TextField
              fullWidth
              value={data["city"]?.value || ""}
              error={data["city"]?.isError || false}
              onChange={(e) => handleChange("city", e.target.value)}
              helperText={
                data["city"]?.isError
                  ? data["city"]?.error || "This Field is Required"
                  : ""
              }
            />
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <label className="w-[180px]">
            Country <span className="text-[red]">*</span>
          </label>
          <div className="flex flex-1">
            <FormControl fullWidth>
              <Autocomplete
                value={data["country"]?.value || null}
                className="cursor-pointer"
                fullWidth
                options={countryData}
                getOptionLabel={(role) => role}
                onChange={(e, value) => handleChange("country", value)}
                renderInput={(params) => {
                  return (
                    <TextField
                      {...params}
                      label={"Select Country"}
                      error={data["country"]?.isError}
                      helperText={
                        data["country"]?.isError
                          ? data["city"]?.error || "This Field is Required"
                          : ""
                      }
                    />
                  );
                }}
              />
            </FormControl>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <label className="w-[180px]">
            How did you hear about the expo?{" "}
            <span className="text-[red]">*</span>
          </label>
          <div className="flex flex-1">
            <FormControl fullWidth>
              <Select
                error={data["about_expo"]?.isError}
                fullWidth
                disabled={false}
                value={data["about_expo"]?.value || " "}
                onChange={(e) => handleChange("about_expo", e.target.value)}
              >
                <MenuItem value={" "}>Select an option</MenuItem>
                <MenuItem value={"Google"}>Google</MenuItem>
                <MenuItem value={"LinkedIn"}>LinkedIn</MenuItem>
                <MenuItem value={"Facebook"}>Facebook</MenuItem>
                <MenuItem value={"Twitter"}>Twitter</MenuItem>
                <MenuItem value={"Instagram"}>Instagram</MenuItem>
                <MenuItem value={"Emailer"}>Emailer</MenuItem>
                <MenuItem value={"Newspaper Ads"}>Newspaper Ads</MenuItem>
                <MenuItem value={"Magazine Ads"}>Magazine Ads</MenuItem>
                <MenuItem value={"Referral from friend / colleague"}>
                  Referral from friend / colleague
                </MenuItem>
                <MenuItem value={"Whatsapp / SMS"}>Whatsapp / SMS</MenuItem>
                <MenuItem value={"Others"}>Others</MenuItem>
              </Select>
              {data["about_expo"]?.isError && (
                <FormHelperText sx={{ color: "#d32f2f" }}>
                  {data["about_expo"]?.error || "This Field is Required"}
                </FormHelperText>
              )}
            </FormControl>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center">
          {submit ? (
            <PleaseWaitLoader />
          ) : (
            <div
              className={`${styles.btn_container} m-auto justify-center flex`}
            >
              <Button
                onClick={handleSubmit}
                variant="contained"
                className={`${styles.submit_btn} w-fit m-auto`}
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
