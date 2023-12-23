import React from "react";
import {Avatar, Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import { colors } from "../../constats/colors";
import moment from "moment";
import '../../index.css'
import {Link} from "react-router-dom";

const VideoCard = ({ video }) => {
      const videoId = video?.id?.videoId;
      const channelId = video?.snippet?.channelId
      const thumbnailUrl = video?.snippet?.thumbnails?.high?.url || "";
    return (
      <Card
        sx={{
          width: { xs: "100%", sm: "500px", lg: "345px" },
          boxShadow: "none",
          borderRadius: 0,
        }}
      >
        <Link to={`/video/${videoId}`}>
          <CardMedia
            image={thumbnailUrl}
            alt={video?.snippet?.title}
            sx={{
              width: { xs: "100%", sm: "500px", lg: "345px" },
              height: "180px",
            }}
          />
        </Link>
        <CardContent
          sx={{
            backgroundColor: colors.navbarC,
            height: "200px",
            position: "relative",
          }}
        >
          <Link to={`/video/${videoId}`}>
            <Typography component="div" my={"5px"} sx={{ opacity: ".4" }}>
              {moment(video?.snippet?.publishedAt).fromNow()}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {video?.snippet?.title.slice(0, 50)}...
            </Typography>
            <Typography variant="subtitle2" sx={{ opacity: "0.6 " }}>
              {video?.snippet?.description.slice(0, 70)}...
            </Typography>
          </Link>
          <Link to={`/channel/${channelId}`}>
            <Stack
              direction={"row"}
              position={"absolute"}
              bottom={"10px"}
              alignItems={"center"}
              gap={"5px"}
            >
              <Avatar src={thumbnailUrl} />
              <Typography variant={"subtitle2"} color={"grey"} ml={"5px"}>
                {video?.snippet?.channelTitle}
              </Typography>
            </Stack>
          </Link>
        </CardContent>
      </Card>
    );
};

export default VideoCard;
