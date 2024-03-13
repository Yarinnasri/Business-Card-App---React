import { useNavigate } from "react-router-dom";
import { func, node, number, object, string } from "prop-types";
import { Box, Typography, Grid } from "@mui/material";
import { memo } from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import FormButtons from "./FormButtons";
import SendIcon from "@mui/icons-material/Send";

const FormComponent = ({
  title,
  onSubmit,
  onReset,
  onChange,
  to,
  color,
  spacing,
  styles,
  children,
}) => {
  const navigate = useNavigate();
  return (
    <Box
      component="form"
      color={color}
      sx={{ mt: 2, p: { xs: 1, sm: 2 }, ...styles }}
      onSubmit={onSubmit}
      autoComplete="off"
      noValidate
      title={title}
    >
      <Typography
        variant="h5"
        align="center"
        component="h1"
        color="text.primary"
        sx={{ pb: 2 }}
      >
        {title.toUpperCase()}
      </Typography>
      <Grid container spacing={spacing}>
        {children}
      </Grid>
      <Grid container spacing={2} my={3} width="100">
        <Grid item xs={12} sm={6}>
          <FormButtons
            node="cancel"
            color="error"
            component="div"
            variant="outlined"
            onClick={() => navigate(to)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormButtons
            node={<DeleteOutlinedIcon />}
            component="div"
            variant="outlined"
            onClick={onReset}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormButtons
            node={<SendIcon />}
            disabled={!!onChange()}
            onClick={onSubmit}
            size="large"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

FormComponent.propTypes = {
  children: node.isRequired,
  onSubmit: func.isRequired,
  onReset: func.isRequired,
  onChange: func.isRequired,
  color: string.isRequired,
  to: string.isRequired,
  spacing: number.isRequired,
  title: string.isRequired,
  styles: object.isRequired,
};
FormComponent.defaultProps = {
  color: "inherit",
  to: "/",
  spacing: 2,
  title: "",
  styles: {},
};

export default memo(FormComponent);
