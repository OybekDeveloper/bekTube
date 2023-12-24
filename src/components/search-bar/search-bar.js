import React, { useState } from "react";
import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
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
        justifyContent:'space-between',
        width:{sm:'250px',md:'350px',lg:'450px'},
        borderRadius: "20px",
        backgroundColor: "#121212",
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
      />
      <IconButton
        className="voise"
        type={"submit"}
        sx={{
          background: "#222222",
          borderTopLeftRadius: "0px",
          borderBottomLeftRadius: "0px",
        }}
      >
        <Search sx={{ color: "#fff", opacity: "0.7" }} />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
