import { Stack } from '@mui/material';
import React from 'react'
import { colors } from '../../constats/colors';
import { playlists } from '../../constats';

const PlaylistsCategory = ({ selectedCategoryHandler,selectedCategory }) => {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {playlists?.map((item) => (
        <button
          className={"category-btn"}
          key={crypto.randomUUID()}
          style={{
            borderRadius: "10px",
            backgroundColor: item.name === selectedCategory && colors.icon,
            color: item.name === selectedCategory ? "#fff" : colors.icon,
          }}
          onClick={() => selectedCategoryHandler(item.name)}
        >
          <span
            style={{
              color: item.name === selectedCategory ? "#fff" : colors.icon,
              marginRight: "15px",
              opacity: "1",
            }}
          >
            {item.icon}
          </span>
          <span
            style={{
              color: item.name === selectedCategory ? "#fff" : colors.icon,
            }}
          >
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default PlaylistsCategory