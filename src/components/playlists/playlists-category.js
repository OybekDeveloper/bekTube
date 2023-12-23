import { Stack } from "@mui/material";
import React from "react";
import { colors } from "../../constats/colors";
import { playlists } from "../../constats";

const PlaylistsCategory = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {playlists?.map((item) => (
        <button
          className={`category-btn ${
            item.name === selectedCategory && "active"
          }`}
          key={crypto.randomUUID()}
          style={{
            borderRadius: "10px",
            marginRight: "5px",
          }}
          onClick={() => selectedCategoryHandler(item.name)}
        >
          <span
            style={{
              color: item.name === selectedCategory ? "#0f0f0f" : "#fff",
              marginRight: "15px",
              opacity: "1",
            }}
          >
            {item.icon}
          </span>
          <span
            style={{
              color: item.name === selectedCategory ? "#0f0f0f" : "#fff",
            }}
          >
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default PlaylistsCategory;
