"use client";

import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export default function SelectBox({ allImagePath, selectedValue }) {
  const [state, setState] = useState(selectedValue?.value);
  const [isSubmit, setIsSubmit] = useState(false);
  const ref = useRef();
  const handleChange = (event) => {
    setState(event.target.value);
    setIsSubmit(true);
  };
  useEffect(() => {
    if (isSubmit && ref.current) {
      ref.current.click();
    }
  }, [isSubmit]);
  return (
    <form className="flex w-[300px] gap-2 items-center" method="GET">
      <label>Select Year:</label>
      <FormControl className="flex-1" fullWidth>
        <Select value={state} onChange={handleChange} name="selectedValue">
          {allImagePath.map((image, index) => (
            <MenuItem value={image.value} key={index}>
              {image.name}{" "}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <button className="hidden" ref={ref} type="submit"></button>
    </form>
  );
}
