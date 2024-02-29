import { FC } from "react";

// 3rd-party dependencies imports
import _ from "lodash";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

// props or interfaces imports
import SearchBoxInterface from "./searchbox.interface";

// styling imports
import {
  ClearIconSC,
  SearchIconSC,
  SearchBoxSC,
  TextFieldSC,
} from "./searchbox.style";

const SearchBox: FC<SearchBoxInterface> = ({ searchTerm, setSearchTerm }) => {
  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const clearSearchTermHandler = () => {
    setSearchTerm("");
  };

  return (
    <SearchBoxSC>
      <SearchIconSC>
        <SearchIcon />
      </SearchIconSC>
      <TextFieldSC
        sx={{ width: "100%" }}
        hiddenLabel
        label=""
        variant="filled"
        value={searchTerm}
        placeholder="Search products..."
        onChange={handleSearchTermChange}
      />
      {!_.isEmpty(searchTerm) && (
        <ClearIconSC onClick={clearSearchTermHandler}>
          <ClearIcon />
        </ClearIconSC>
      )}
    </SearchBoxSC>
  );
};

export default SearchBox;
