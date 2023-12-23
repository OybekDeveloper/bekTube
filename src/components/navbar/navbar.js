import { Box, Stack } from "@mui/material";
import logo from "../../constats/logo3.jpg";
import { colors } from "../../constats/colors";
import { Link } from "react-router-dom";
import SearchBar from "../search-bar/search-bar";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{
        width: "100%",
        top: 0,
        left: 0,
        position: "fixed",
        zIndex: 999,
        background: colors.navbarC,
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Link to={"/"}>
          <img
            src={logo}
            alt={"logo"}
            height={40}
            style={{ borderRadius: "4px" }}
          />
        </Link>
      </Stack>
      <SearchBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all .3s ease-in-out",
        }}
      ></Box>
    </Stack>
  );
};

export default Navbar;