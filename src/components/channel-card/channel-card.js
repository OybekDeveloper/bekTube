import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ChannelCard = ({ video, marginTop }) => {
  const thumbnailUrl = video?.snippet?.thumbnails?.high?.url;
  const title = video?.snippet?.title;
  const channelId = video?.id?.channelId || video?.id;
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "100%", sm: "500px", lg: "345px" },
        height: "326px",
        margin: "auto",
        marginTop: marginTop,
      }}
    >
      <Link to={`/channel/${channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <CardMedia
            image={thumbnailUrl}
            alt={title}
            component="img" // Specify the component prop as "img"
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography color={"white"} variant={"h5"}>
            {title}{" "}
            <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
          </Typography>
          {video?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              {parseInt(video?.statistics?.subscriberCount).toLocaleString(
                "en-US"
              )}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
