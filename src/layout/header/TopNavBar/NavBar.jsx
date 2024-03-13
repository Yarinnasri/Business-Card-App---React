import { Box } from "@mui/material";
import LeftNavBar from "./left-area/LeftNavBar";
import AppBar from "@mui/material/AppBar";
import RightNavBar from "./right-area/RightNavBar";
import Toolbar from "@mui/material/Toolbar";
import SearchBar from "./right-area/SearchBar";
import MenuProvider from "./menu/MenuProvider";
const NavBar = () => {
  return (
    <MenuProvider>
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <LeftNavBar />

          {/* only on sx screen, in the middle */}
          <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
            <SearchBar />
          </Box>

          <RightNavBar />
        </Toolbar>
      </AppBar>
    </MenuProvider>
  );
};

export default NavBar;
