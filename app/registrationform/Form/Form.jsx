"use client";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Stack,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import React, { useRef, useState } from "react";
import styles from "./form.module.css";
import { numberValidator, emailValidator } from "@/app/Utility/validator";
import PleaseWaitLoader from "@/app/UIComponent/Loader/PleaseWaitLoader";
import axios from "axios";
import SuccessModal from "@/app/UIComponent/Modals/SuccessModal";
import EmailOtpLoader from "./EmailOtpLoader";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function Form({ db, onClick, apiLink, currentPath }) {
  const [visitorDb, setVisitorDb] = useState(db);
  const [showSuccessModal, setSuccessModal] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [emailOtp, setEmailOtp] = useState("");
  const [isOtpSend, setIsOtpSend] = useState(false);
  const isOtpVerifyingRef = useRef(false);
  const handleChange = async (e, index) => {
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
  const invalidEmailShowMessage = (item) => {
    item.showError = true;
    item.prevErrorMsg = item?.errorMsg;
    item.errorMsg = "Please Enter Valid email";
  };
  const handleValidate = async () => {
    setErrorMsg("");
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
          invalidEmailShowMessage(item);
        }
      }
    }
    if (isValidate) {
      setSubmit(isValidate);
      try {
        let finalObj = {};
        for (let item of visitorDb) finalObj[item?.key] = item?.value;
        let res = await axios({
          method: "POST",
          url: apiLink,
          data: finalObj,
        });
        setErrorMsg(res?.message || "Something went wrong");
        if (!res.status) {
          setSubmit(false);
        } else {
          setSuccessModal(true);
        }
      } catch (e) {
        console.log(e);
        setErrorMsg(e?.response?.data?.message || "Something went wrong");
        setSubmit(false);
      }
      typeof onClick === "function" && onClick(visitorDb);
    } else {
      setVisitorDb([...visitorDb]);
    }
  };
  const handleSendEmailOtp = async () => {
    let isValidEmail = true;
    for (let item of visitorDb) {
      if (item.key === "email") {
        let value = item?.value?.trim();
        isValidEmail = emailValidator(value);
        if (!isValidEmail) {
          invalidEmailShowMessage(item);
        }
        break;
      }
    }
    if (isValidEmail) {
      setIsOtpSend(true);
    } else {
      setVisitorDb([...visitorDb]);
    }
  };
  const handleEmailVerify = async () => {
    if (isOtpVerifyingRef.current) {
      return;
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
                  <Box>
                    {item?.key === "email" ? (
                      <TextField
                        error={item?.showError}
                        fullWidth
                        disabled={submit || isEmailVerified || isOtpSend}
                        value={item?.value || ""}
                        onChange={(e) => handleChange(e, key)}
                        helperText={item?.showError ? item?.errorMsg : ""}
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
                    {item.key === "email" &&
                      !isEmailVerified &&
                      (isOtpSend && !isEmailVerified ? (
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          marginTop={2}
                          gap={1}
                        >
                          <EmailOtpLoader setIsOtpSend={setIsOtpSend} />
                          <Button
                            variant="contained"
                            className="bg-blue-500"
                            onClick={handleEmailVerify}
                          >
                            Verify Otp
                          </Button>
                        </Stack>
                      ) : (
                        <Button onClick={handleSendEmailOtp}>Send Otp</Button>
                      ))}
                  </Box>
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
          {errorMsg && (
            <p
              style={{ color: submit ? "green" : "red" }}
              className="text-center"
            >
              {errorMsg}
            </p>
          )}
        </div>
      )}
      {showSuccessModal && <SuccessModal isOpen={true} />}
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
