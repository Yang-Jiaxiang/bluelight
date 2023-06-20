import React, { useState } from "react";

import {
  FormControl,
  InputLabel,
  Box,
  TextField,
  Grid,
  Select,
  MenuItem,
  Popover,
} from "@mui/material";
import useStyles from "./formRenderStyle.js";

import { DayPicker } from "react-day-picker";
import { zhTW } from "date-fns/locale";
import "react-day-picker/dist/style.css";

const FormRender = ({ type, tempFormData, setTempFormData, formParam }) => {
  const classes = useStyles();
  const [anchorE, setAnchorE] = useState({ Start: null, End: null });
  function formatDate(date) {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}${month}${day}`;
  }
  switch (type) {
    case "text":
      return (
        <Grid item xs={12} md={6} lg={3}>
          <TextField
            variant="outlined"
            label={formParam.label}
            value={tempFormData[formParam.name] || ""}
            key={formParam.key}
            className={classes.TextField}
            fullWidth
            InputProps={{
              style: {
                fontSize: "1rem",
                color: "#dbdbdb",
              },
            }}
            InputLabelProps={{
              style: { color: "#dbdbdb" },
            }}
            sx={{
              color: "#dbdbdb",
            }}
            onChange={(e) => {
              setTempFormData({
                ...tempFormData,
                [formParam.name]: e.target.value,
              });
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch(tempFormData);
              }
            }}
          />
        </Grid>
      );
    case "select":
      return (
        <Grid item xs={12} md={6} lg={3}>
          <FormControl className={classes.TextField}>
            <InputLabel htmlFor={formParam.key} sx={{ color: "#dbdbdb" }}>
              {formParam.label}
            </InputLabel>
            <Select
              value={tempFormData[formParam.key] || ""}
              label={formParam.label}
              onChange={(e) => {
                setTempFormData({
                  ...tempFormData,
                  [formParam.key]: e.target.value,
                });
              }}
              sx={{
                "& .MuiSelect-select.MuiSelect-select": {
                  color: "#dbdbdb",
                },
              }}
              MenuProps={{
                PaperProps: {
                  style: {
                    backgroundColor: "#27365b",
                    color: "#dbdbdb",
                  },
                },
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {formParam.options.map((option) => (
                <MenuItem value={option.value} key={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      );

    case "rangeDate":
      const originalDate = tempFormData[formParam.name].split("-");
      return (
        <>
          {["Start", "End"].map((item, index) => {
            return (
              <Grid item xs={6} md={3} lg={1.5} key={item}>
                <TextField
                  variant="outlined"
                  label={item + " " + formParam.label}
                  value={originalDate[index]}
                  className={classes.TextField}
                  InputProps={{
                    style: {
                      fontSize: "1rem",
                      color: "#dbdbdb",
                    },
                    readOnly: true,
                  }}
                  InputLabelProps={{
                    style: { color: "#dbdbdb" },
                  }}
                  onClick={(e) =>
                    setAnchorE({ ...anchorE, [item]: e.currentTarget })
                  }
                />
                <Popover
                  open={Boolean(anchorE[item])}
                  id={item}
                  anchorEl={anchorE[item]}
                  onClose={() => setAnchorE({ ...anchorE, [item]: null })}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <DayPicker
                    mode="single"
                    selected={new Date()}
                    onDayClick={(date) => {
                      const newDate = originalDate;
                      newDate[index] = formatDate(date);
                      setTempFormData({
                        ...tempFormData,
                        [formParam.name]: newDate.join("-"),
                      });
                      setAnchorE({ ...anchorE, [item]: null });
                    }}
                    fromYear={1930}
                    toYear={new Date().getFullYear()}
                    captionLayout="dropdown"
                    locale={zhTW}
                  />
                </Popover>
              </Grid>
            );
          })}
        </>
      );
    default:
      return "default";
  }
};
export default FormRender;
