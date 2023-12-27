import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Avatar, Box, Button, Chip, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { Loader, VideoComment, Videos } from "../index";
import TagFacesIcon from "@mui/icons-material/TagFaces";

import {
  CheckCircle,
  FavoriteOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from "@mui/icons-material";
const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState([]);
  const [relatedVideo, setRelatedVideo] = useState([]);
  const [videoComment, setVideoComment] = useState([]);
  const [onComment, setOnComment] = useState(false);
  const [addComment, setAddComment] = useState("");
  const [editAuthComment, setEditAuthComment] = useState(false);
  const [editComment, setEditComment] = useState("");
  const [editedCommentId, setEditedCommentId] = useState(null);
  const [editedCommentText, setEditedCommentText] = useState("");
  const randID = 100000;
  const bugun = new Date();
  const yil = bugun.getFullYear();
  const oy = bugun.getMonth() + 1;
  const kun = bugun.getDate();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `videos?part=snippet,statistics&id=${id}`
        );
        const related = await ApiService.fetching(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );
        const videoComment = await ApiService.fetching(
          `commentThreads?part=snippet&videoId=${id}`
        );
        setVideoComment(videoComment.items);
        setRelatedVideo(related.items);
        setVideoDetails(data.items[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id]);
  console.log(videoComment);
  // useEffect(() => {
  //   const storedComments = localStorage.getItem("videoComments");

  //   try {
  //     if (storedComments !== null && storedComments !== "undefined") {
  //       setVideoComment(JSON.parse(storedComments));
  //     }
  //   } catch (error) {
  //     console.error("Error parsing JSON:", error);
  //     setVideoComment([]);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("videoComments", JSON.stringify(videoComment));
  // }, [videoComment]);

  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     console.log("Before Unload Event");
  //     localStorage.setItem("videoComments", JSON.stringify(videoComment));
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     console.log("Cleanup");
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, [videoComment]);

  const addCommentHandler = (e) => {
    e.preventDefault();
    if (addComment.trim() !== "") {
      const newComment = {
        id: videoComment ? videoComment.length + 1 : randID,
        snippet: {
          topLevelComment: {
            snippet: {
              authorProfileImageUrl: "https://yt3.ggpht.com/...", // Your image URL
              textOriginal: addComment,
              authorDisplayName: "Oybek Baxtiyorov",
              likeCount: 2,
              publishedAt: `${kun}/${oy}/${yil}`,
              auth: true,
            },
          },
        },
      };

      // If videoComment is not null or undefined, create a new array by spreading its contents
      const newComments = videoComment
        ? [newComment, ...videoComment]
        : [newComment];

      setVideoComment(newComments);
      setAddComment("");
    }
  };

  const saveEditedComment = () => {
    const updatedComments = videoComment.map((item) =>
      item.id === editedCommentId
        ? {
            id: videoComment.length + 1,
            snippet: {
              topLevelComment: {
                snippet: {
                  authorProfileImageUrl:
                    "https://yt3.ggpht.com/HRPRlXL9YVa4ufggoa0k97L3-p9GRivDmh9E4GeclvHtaD7iWgAtu0BIOhbXE_PPyiiS7yPPQA=s88-c-k-c0x00ffffff-no-rj",
                  textOriginal: editComment,
                  authorDisplayName: "Oybek Baxtiyorov",
                  likeCount: 2,
                  publishedAt: `${kun}/${oy}/${yil}`,
                  auth: true,
                },
              },
            },
          }
        : item
    );
    setVideoComment(updatedComments);
    setEditedCommentId(null);
    setEditedCommentText("");
  };
  const deleteCommentHandler = (id) => {
    const updatedComments = videoComment.filter((comment) => comment.id !== id);
    setVideoComment(updatedComments);
  };

  const editCommentHandler = (id, text) => {
    setEditedCommentId(id);
    setEditComment(text);
    setEditAuthComment(true);
  };
  const editCancel = () => {
    setEditedCommentId(null);
  };

  const commetHandler = () => {
    setOnComment(!onComment);
  };
  if (!videoDetails?.snippet) return <Loader />;

  const {
    snippet: { title, channelTitle, description, thumbnails },
    statistics: { viewCount, likeCount, commentCount },
  } = videoDetails;

  return (
    <Box minHeight={"90vh"} mb={10}>
      <Box
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: { xs: "center", md: "start" },
          alignItems: { xs: "center", md: "start" },
        }}
        display={"flex"}
        alignItems={"center"}
      >
        <Box width={{ xs: "100%", md: "75%" }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            className={"react-player"}
          />
          {videoDetails?.snippet?.tags?.map((item, idx) => (
            <Chip
              label={item}
              key={idx}
              sx={{
                color: "white",
                opacity: 0.7,
                marginTop: "10px",
                cursor: "pointer",
                ml: "10px",
              }}
              deleteIcon={<Tag className="tag" />}
              onDelete={() => {}}
              variant="outlined"
            />
          ))}
          <Typography variant={"h6"} fontWeight={"bold"} p={2} color={"white"}>
            {title}
          </Typography>
          <Typography
            variant={"subtitle2"}
            width={"100%"}
            p={2}
            sx={{ opacity: "0.5", width: "90%" }}
            color={"white"}
          >
            {description}
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            gap={"20px"}
            alignItems={{ xs: "start", md: "center" }}
            justifyContent={"start"}
          >
            <Stack
              sx={{ color: "white", opacity: "0.7", cursor: "pointer" }}
              direction={"row"}
              alignItems={"center"}
              py={1}
              px={2}
            >
              <Visibility />
              {parseInt(viewCount).toLocaleString()} views
            </Stack>
            <Stack
              sx={{ color: "white", opacity: "0.7", cursor: "pointer" }}
              direction={"row"}
              alignItems={"center"}
              py={1}
              px={2}
            >
              <FavoriteOutlined />
              {parseInt(likeCount).toLocaleString()} likes
            </Stack>
            <Stack
              sx={{ color: "white", opacity: "0.7" }}
              direction={"row"}
              alignItems={"center"}
              py={1}
              px={2}
            >
              <MarkChatRead sx={{ cursor: "pointer" }} />
              {parseInt(commentCount).toLocaleString()} comments
            </Stack>
          </Stack>

          <Link to={`/channel/${videoDetails?.snippet?.channelId}`}>
            <Stack direction={"row"} py={1} px={2}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={"5px"}
                marginTop={"5px"}
              >
                <Avatar alt={channelTitle} src={thumbnails.default.url} />
                <Typography variant={"subtitle2"} color={"gray"}>
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "grey", ml: "5px" }}
                  />
                </Typography>
                <Typography
                  variant={"subtitle2"}
                  sx={{ color: "white", fontSize: "18" }}
                >
                  Channel
                </Typography>
              </Stack>
            </Stack>
          </Link>
          <hr />
          <Stack sx={{ opacity: "0.7" }} alignItems={"start"} py={1} px={2}>
            <Stack direction={"row"} paddingY={1} width={"100%"}>
              <Avatar
                alt="Remy Sharp"
                src="https://yt3.ggpht.com/HRPRlXL9YVa4ufggoa0k97L3-p9GRivDmh9E4GeclvHtaD7iWgAtu0BIOhbXE_PPyiiS7yPPQA=s88-c-k-c0x00ffffff-no-rj"
              />
              <Stack
                justifyContent={"start"}
                alignItems={"start"}
                width={"100%"}
                paddingX={1}
                gap={1}
              >
                <input
                  value={addComment}
                  style={{
                    width: "100%",
                    paddingBottom: "4px",
                    borderBottom: "2px solid white",
                    transition: "border-bottom 0.3s ease",
                  }}
                  onChange={(e) => setAddComment(e.target.value)}
                  type={"text"}
                  placeholder="Izoh yoshing"
                />
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <TagFacesIcon sx={{ color: "white" }} />
                  <Box>
                    <Button onClick={() => setAddComment("")}>cancel</Button>
                    <Button onClick={(e) => addCommentHandler(e)}>Enter</Button>
                  </Box>
                </Box>
              </Stack>
            </Stack>
            <button
              onClick={commetHandler}
              style={{
                borderStyle: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                backgroundColor: "#0f0f0f",
                color: "#138d85",
              }}
            >
              <Typography variant={"subtitle1"} sx={{ paddingRight: "10px" }}>
                All Comments
              </Typography>
              <MarkChatRead />
              {parseInt(commentCount).toLocaleString()} comments
            </button>
          </Stack>
          <Stack overflow={"scroll"} maxHeight={"120vh"}>
            {videoComment?.map((item, idx) => (
              <VideoComment
                key={idx}
                video={item}
                display={onComment ? "none" : "block"}
                editCommentHandler={editCommentHandler}
                editComment={editComment}
                setEditComment={setEditComment}
                setEditedCommentText={setEditedCommentText}
                setEditedCommentId={setEditedCommentId}
                editedCommentText={editedCommentText}
                editAuthComment={editAuthComment}
                editedCommentId={editedCommentId}
                editCancel={editCancel}
                saveEditedComment={saveEditedComment}
                deleteCommentHandler={deleteCommentHandler}
              />
            ))}
          </Stack>
        </Box>
        <Box
          width={{ xs: "90%", md: "25%" }}
          mx={1}
          py={{ md: 1, xs: 5 }}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"scroll"}
          maxHeight={"120vh"}
        >
          <Videos videos={relatedVideo} />
        </Box>
      </Box>
    </Box>
  );
};

export default VideoDetail;
