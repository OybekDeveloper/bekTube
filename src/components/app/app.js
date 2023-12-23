import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Main, Navbar,  Search,  VideoDetail } from "../";
import { Channel } from "../";
import { colors } from "../../constats/colors";
const App = () => {
  return (
    <Box
      position={"relative"}
      backgroundColor={colors.background}
    >
      <Navbar />
      <Box sx={{ marginTop: "76px" }}>
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/channel/:id"} element={<Channel />} />
          <Route path={"/search/:id"} element={<Search />} />
          <Route path={"/video/:id"} element={<VideoDetail />} />
          {/* <Route path={"/playlists:id"} element={<Playlists />} /> */}
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
