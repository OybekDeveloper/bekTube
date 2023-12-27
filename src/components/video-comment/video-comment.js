import React from "react";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FeedIcon from "@mui/icons-material/Feed";

const VideoComment = ({
  video,
  display,
  editComment,
  setEditComment,
  editCommentHandler,
  editedCommentId,
  editCancel,
  saveEditedComment,
  deleteCommentHandler
}) => {
   
  const {
    snippet: { topLevelComment },
  } = video;
  return (
    <Stack m={2} display={display} sx={{ transition: "all .3s ease-in-out" }}>
      <Stack direction={"row"} alignItems={"center"}>
        <Avatar src={topLevelComment?.snippet?.authorProfileImageUrl} />
        {editedCommentId === video.id ? (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <input
              value={editComment}
              style={{
                width: "100%",
                paddingBottom: "4px",
                borderBottom: "2px solid white",
                transition: "border-bottom 0.3s ease",
              }}
              onChange={(e) => setEditComment(e.target.value)}
              type={"text"}
            />
            <Button sx={{marginRight:'3px'}} variant="outlined" onClick={saveEditedComment}>Save</Button>
            <Button variant="outlined" color="error" onClick={editCancel}>
              Cancel
            </Button>
          </Box>
        ) : (
          <Typography
            variant={"subtitle2"}
            color={"grey"}
            ml={"5px"}
            display={"flex"}
            sx={{ flexDirection: "column" }}
          >
            <Typography color={"white"}>
              {" "}
              @{topLevelComment?.snippet?.authorDisplayName}
            </Typography>
            <Typography variant={"subtitle2"}>
              {topLevelComment?.snippet?.textOriginal}
            </Typography>
          </Typography>
        )}
      </Stack>
      {editedCommentId === video.id ? (
        ""
      ) : (
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box alignItems={"center"} m={2}>
            <Box
              alignItems={"center"}
              flexDirection={"row"}
              display={"flex"}
              color={"white"}
            >
              <FavoriteIcon
                sx={{ color: "red", width: "20px", cursor: "pointer" }}
              />
              like {topLevelComment?.snippet?.likeCount}
            </Box>
            <Box
              alignItems={"center"}
              flexDirection={"row"}
              display={"flex"}
              color={"white"}
            >
              <FeedIcon
                sx={{ width: "20px", color: "grey", cursor: "pointer" }}
              />
              data: {topLevelComment?.snippet?.publishedAt}
            </Box>
          </Box>
          {topLevelComment?.snippet?.auth && (
            <Box
              sx={{
                display: "felx",
                alignItems: "center",
              }}
            >
              <Button
              sx={{marginRight:'3px'}}
              variant="contained"
                onClick={() =>
                  editCommentHandler(
                    video?.id,
                    topLevelComment?.snippet?.textOriginal
                  )
                }
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => deleteCommentHandler(video.id)}
              >
                Delete
              </Button>
            </Box>
          )}
        </Stack>
      )}
      <hr color="grey" />
    </Stack>
  );
};

export default VideoComment;
