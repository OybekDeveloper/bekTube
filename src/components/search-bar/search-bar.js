import React, { useState } from "react";
import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import { colors } from "../../constats/colors";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const changeHandler = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`);
    }
    setValue("");
  };
  return (
    <Paper
      onSubmit={changeHandler}
      component={"form"}
      sx={{
        display: "flex",
        borderRadius: "10px",
        backgroundColor: "#0f0f0f",
        pl: 2,
        boxShadow: "none",
        border: `1px solid #303030`,
        color: "#fff",
      }}
    >
      <input
        value={value}
        backgroundColor={"transparent"}
        onChange={(e) => setValue(e.target.value)}
        type={"text"}
        placeholder={"Search..."}
        className={"search-bar"}
      />
      <IconButton type={"submit"}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
