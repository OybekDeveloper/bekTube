import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import {
  ChannelCard,
  PlaylistDetail,
  PlaylistsCategory,
  Videos,
} from "../index";

const Channel = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState();
  const [dataVideos, setDataVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Main");
  const [playList, setPlayList] = useState([]);
  const [playlistVideo, setPlayListVideo] = useState([]);
  const selectedCategoryHandler = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const dataChannelDetail = await ApiService.fetching(
          `channels?part=snippet&id=${id}`
        );
        setChannelDetail(dataChannelDetail.items[0]);
        const dataVideo = await ApiService.fetching(
          `search?channelId=${id}&part=snippet%2Cid&order=date`
        );
        setDataVideos(dataVideo.items);
        const dataPlaylistDetail = await ApiService.fetching(
          `playlists?part=snippet&id=${id}`
        );
        setPlayList(dataPlaylistDetail);
        const dataPlaylistVideo = await ApiService.fetching(
          `playlistItems?playlistId=UC9Nvv7-5jjzlKRtX8Kfpx4A&part=snippet`
        );
        setPlayListVideo(dataPlaylistVideo);
        setPlayList(dataPlaylistVideo);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);
  console.log(playList, "play");
  return (
    <Box minHeight={"95vh"} mt={"1vh"}>
      <Box>
        <Box
          width={"100%"}
          height={"200px"}
          zIndex={10}
          sx={{
            backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <ChannelCard video={channelDetail} marginTop={"-100px"} />
      </Box>
      <Container maxWidth={"90%"}>
        <PlaylistsCategory
          selectedCategoryHandler={selectedCategoryHandler}
          selectedCategory={selectedCategory}
        />
        <hr style={{ marginBottom: "10px" }} />
        {selectedCategory === "Main" ? (
          <Videos videos={dataVideos} />
        ) : (
          <PlaylistDetail playList={playList}/>
        )}
      </Container>
    </Box>
  );
};

export default Channel;
