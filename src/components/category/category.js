import React from "react";
import { category } from "../../constats";
import {  Stack } from "@mui/material";


const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        margin:'0px 10px',
         overflowX: "scroll",
        position:'sticky',
        zIndex:998,
        backgroundColor:'#0f0f0f'
      }}
    >
      {category?.map((item) => (
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

export default Category;
