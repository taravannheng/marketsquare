import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

import SearchBoxInterface from "./searchbox.interface";
import {
  ClearIconSC,
  SearchIconSC,
  SearchBoxSC,
  TextFieldSC,
} from "./searchbox.style";
import _ from "lodash";

const SearchBox: FC<SearchBoxInterface> = ({ searchTerm, setSearchTerm, setIsFocused }) => {
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
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
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
