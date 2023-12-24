import { Avatar, IconButton, Stack } from "@mui/material";
import logo from "../../constats/logo2.jpg";
import { colors } from "../../constats/colors";
import { Link } from "react-router-dom";
import SearchBar from "../search-bar/search-bar";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";

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
      <Stack 
      
      sx={{
        width:{xs:'80px',sm:'200px',md:'350px',lg:'450px'}
      }}
      direction={"row"} justifyContent={"end"} alignItems={"center"}>
        <SearchBar />
        <IconButton
          className="voise"
          type={"submit"}
          sx={{
            background: "#222222",
            marginLeft: "5px",
          }}
        >
          <KeyboardVoiceIcon
            sx={{
              width: "100%",
              color: "white",
              opacity: "0.7",
            }}
          />
        </IconButton>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
        sx={{
          display: { xs: "none", sm: "flex" },
        }}
      >
        <IconButton
          className="voise"
          type={"submit"}
          sx={{ background: "#222222", marginLeft: "5px" }}
        >
          <VideoCallIcon
            sx={{
              width: "100%",
              color: "white",
              opacity: "0.7",
            }}
          />
        </IconButton>
        <IconButton
          className="voise"
          type={"submit"}
          sx={{ background: "#222222", marginLeft: "5px" }}
        >
          <NotificationsIcon
            sx={{
              width: "100%",
              color: "white",
              opacity: "0.7",
            }}
          />
        </IconButton>
        <Avatar
          alt="Remy Sharp"
          src="https://yt3.ggpht.com/HRPRlXL9YVa4ufggoa0k97L3-p9GRivDmh9E4GeclvHtaD7iWgAtu0BIOhbXE_PPyiiS7yPPQA=s88-c-k-c0x00ffffff-no-rj"
        />
      </Stack>
    </Stack>
  );
};

export default Navbar;
