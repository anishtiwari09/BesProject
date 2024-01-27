"use client";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./form.module.css";
import { numberValidator, emailValidator } from "@/app/Utility/validator";
export default function Form({ db, onClick }) {
  const [visitorDb, setVisitorDb] = useState(db);
  const [submit, setSubmit] = useState(false);
  const handleChange = (e, index) => {
    let value = e.target.value;

    if (visitorDb[index].fieldType === "number" && value) {
      let isValid = numberValidator(value);
      if (!isValid) return;
    }
    visitorDb[index].value = e.target.value;

    if (e.target.value && visitorDb[index]?.showError)
      visitorDb[index].showError = false;
    setVisitorDb([...visitorDb]);
  };
  const handleValidate = () => {
    let isValidate = true;
    for (let item of visitorDb) {
      let value = item?.value || "";
      value = value.trim();
      if (item?.required && !value) {
        isValidate = false;
        if (item.key == "email") {
          item.errorMsg = item.prevErrorMsg || item.errorMsg;
        }
        item.showError = true;
      } else if (item.key === "email") {
        isValidate = emailValidator(value);
        if (!isValidate) {
          item.showError = true;
          item.prevErrorMsg = item?.errorMsg;
          item.errorMsg = "Please Enter Valid email";
        }
      }
    }
    if (isValidate) {
      setSubmit(isValidate);
      typeof onClick === "function" && onClick(visitorDb);
    } else {
      setVisitorDb([...visitorDb]);
    }
  };

  return (
    <React.Fragment>
      {visitorDb.map((item, key) => (
        <React.Fragment key={key}>
          {
            <div className={styles.boxContainer}>
              <div>
                <label>{item?.name || ""}</label>
              </div>
              <div>
                {item?.type === "select" ? (
                  <FormControl fullWidth>
                    <Select
                      error={item?.showError}
                      fullWidth
                      disabled={submit}
                      value={item?.value || " "}
                      onChange={(e) => handleChange(e, key)}
                    >
                      {item?.options?.map((sub_item, key) => (
                        <MenuItem key={key} value={sub_item.value}>
                          {sub_item?.label}
                        </MenuItem>
                      ))}
                    </Select>
                    {item?.showError && (
                      <FormHelperText sx={{ color: "#d32f2f" }}>
                        {item?.errorMsg}
                      </FormHelperText>
                    )}
                  </FormControl>
                ) : (
                  <TextField
                    error={item?.showError}
                    fullWidth
                    disabled={submit}
                    value={item?.value || ""}
                    onChange={(e) => handleChange(e, key)}
                    helperText={item?.showError ? item?.errorMsg : ""}
                  />
                )}
              </div>
            </div>
          }
        </React.Fragment>
      ))}
      {submit ? (
        <PleaseWaitLoader />
      ) : (
        <div className={styles.btn_container}>
          <Button
            fullWidth
            onClick={handleValidate}
            variant="contained"
            className={styles.submit_btn}
          >
            Submit
          </Button>
        </div>
      )}
    </React.Fragment>
  );
}
