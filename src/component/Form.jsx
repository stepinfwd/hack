import React from "react";
import "./Form.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";

function Form() {
  return (
    <div className="form-container">
      <div className="form-container-inner">
        <div className="form-header">
          <TextField id="filled-basic" label="Questions" variant="filled" />
        </div>
        <FormControl component="fieldset">
          {/* <FormLabel component="legend">Gender</FormLabel> */}
          <RadioGroup
            name="gender1"
            //   value={value}
            //   onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Option 1"
            />
            <FormControlLabel
              value="Option 1"
              control={<Radio />}
              label="Option 1"
            />
            <FormControlLabel
              value="Option 1"
              control={<Radio />}
              label="Option 1"
            />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            />
          </RadioGroup>
        </FormControl>
        <div className="form-footer">footer</div>
      </div>
    </div>
  );
}

export default Form;
