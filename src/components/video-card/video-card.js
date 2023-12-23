import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { colors } from "../../constats/colors";
import moment from "moment";
import "../../index.css";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const videoId = video?.id?.videoId;
  const channelId = video?.snippet?.channelId;
  const thumbnailUrl = video?.snippet?.thumbnails?.high?.url || "";

  return (
    <Card
      sx={{
        width: { xs: "200px", sm: "500px", lg: "345px" },
        height: "100%",
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={`/video/${videoId}`}>
        <CardMedia
          image={thumbnailUrl}
          alt={video?.snippet?.title}
          sx={{
            width: "100%",
            paddingTop: "56.25%", 
          }}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: colors.navbarC,
          height: "200px", 
          position: "relative",
          overflow: "hidden", 
        }}
      >
        <Link to={`/video/${videoId}`}>
          <Typography
            color={"white"}
            component="div"
            my={"5px"}
            sx={{ opacity: ".4" }}
          >
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            fontSize={{ xs: "14px", sm: "16px", md: "18px" }}
            sx={{ fontWeight: "bold", color: "white" }}
          >
            {video?.snippet?.title.slice(0, 40)}...
          </Typography>
          <Typography
            color={"white"}
            variant="subtitle2"
            fontSize={{ xs: "10px", sm: "12px", md: "14px" }}
            sx={{ opacity: "0.6 " }}
          >
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
