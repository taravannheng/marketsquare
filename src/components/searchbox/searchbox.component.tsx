import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

import SearchBoxProps from "./searchbox.interface";
import {
  ClearIconSC,
  SearchIconSC,
  SearchBoxSC,
  TextFieldSC,
} from "./searchbox.style";
import _ from "lodash";

const SearchBox: FC<SearchBoxProps> = ({ searchTerm, setSearchTerm }) => {
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
