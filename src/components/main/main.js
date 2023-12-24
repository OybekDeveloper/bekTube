import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Category, Videos } from "../";
import { ApiService } from "../../service/api.service";
const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [selectedCategory]);
  const selectedCategoryHandler = (category) => {
    setSelectedCategory(category);
  };
  return (
    <Stack position={"relative"} >
        <Category
          selectedCategoryHandler={selectedCategoryHandler}
          selectedCategory={selectedCategory}
        />
      <Box p={2} paddingTop={"62.8px"} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant={"h4"} color={"red"} fontWeight={"bold"} mb={2}>
            {selectedCategory} <span style={{ color: "#fff" }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
