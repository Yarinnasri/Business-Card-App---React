import { Box } from "@mui/material";
import LogoIcon from "../logo/LogoIcon";
import Logo from "../logo/Logo";
import NavItem from "../../../../routes/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";

const LeftNavBar = () => {
  const { user } = useUser();

  return (
    <Box>
      <LogoIcon />
      <Logo />

      <Box sx={{ pb: 1, display: { xs: "none", md: "inline-flex" } }}>
        <NavItem label="About" to={ROUTES.ABOUT}></NavItem>
        {user && user.isBusiness && (
          <>
            <NavItem label="My Cards" to={ROUTES.MY_CARDS}></NavItem>
            <NavItem label="Fav Cards" to={ROUTES.FAV_CARDS}></NavItem>
          </>
        )}
      </Box>
    </Box>
  );
};

export default LeftNavBar;
