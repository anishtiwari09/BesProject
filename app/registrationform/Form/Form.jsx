"use client";
import {
  Button,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import React, { useRef, useState } from "react";
import styles from "./form.module.css";
import { numberValidator, emailValidator } from "@/app/Utility/validator";
import PleaseWaitLoader from "@/app/UIComponent/Loader/PleaseWaitLoader";
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
                ) : item?.type === "textarea" ? (
                  <AutoSizeTextarea
                    value={item.value || ""}
                    index={key}
                    state={visitorDb}
                    dispatcher={setVisitorDb}
                  />
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

const useStyles = {
  autoSizeTextarea: {
    width: "100%",
    minWidth: "100px",
    minHeight: "150px",
    resize: "none",
    padding: "8px 12px",
    fontFamily: "inherit",
    fontSize: "inherit",
    lineHeight: "inherit",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "4px",
    outline: "none",
  },
};
const AutoSizeTextarea = ({ index, value, dispatcher, state }) => {
  const textareaRef = useRef(null);
  const handleTextareaChange = (event) => {
    state[index].value = event.target.value;
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
    dispatcher([...state]);
  };
  return (
    <React.Fragment>
      <TextareaAutosize
        ref={textareaRef}
        style={useStyles.autoSizeTextarea}
        value={value}
        onChange={handleTextareaChange}
        fullWidth
        // Minimum number of rows
      />
    </React.Fragment>
  );
};
