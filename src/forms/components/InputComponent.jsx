import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { makeFirstLetterCapital } from "../utils/upperCaseMethod";
import { bool, func, object, string } from "prop-types";

const InputComponent = ({
  variant,
  type,
  name,
  data,
  label,
  required,
  error,
  handleChange,
  ...rest
}) => {
  return (
    <Grid item xs={12} {...rest}>
      <TextField
        variant={variant}
        label={makeFirstLetterCapital(label)}
        type={type}
        id={name}
        name={name}
        value={data[name] ? data[name] : ""}
        required={required}
        helperText={error}
        error={Boolean(error)}
        onChange={handleChange}
        fullWidth
        autoComplete="off"
      />
    </Grid>
  );
};

InputComponent.propTypes = {
  name: string.isRequired,
  required: bool.isRequired,
  type: string.isRequired,
  error: string,
  handleChange: func.isRequired,
  variant: string,
  data: object.isRequired,
};

InputComponent.defaultProps = {
  variant: "outlined",
  type: "text",
  required: true,
};
export default InputComponent;
