import ROUTES from "../../../../routes/routesModel";
import NavBarLink from "../../../../routes/NavBarLink";
import { Typography } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
const Logo = () => {
  return (
    <NavBarLink to={ROUTES.CARDS}>
      <Typography
        variant="h4"
        sx={{
          display: { xs: "none", md: "inline-flex" },
          marginRight: 2,
          fontFamily: "fantasy",
        }}
      >
        {" "}
        <BusinessIcon />
        BCard
      </Typography>
    </NavBarLink>
  );
};
export default Logo;
