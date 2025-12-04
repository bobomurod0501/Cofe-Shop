import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

// contexts
import { useStateValuesContext } from "../context/stateValuesContext";

const SearchBar = () => {
  const { setSearchVal } = useStateValuesContext();

  return (
    <Paper
      component="form"
      sx={{ display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="search..."
        inputProps={{ "aria-label": "search google maps" }}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "5px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
