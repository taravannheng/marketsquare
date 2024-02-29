import { FC } from "react";

// 3rd-party dependencies imports
import _ from "lodash";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

// props or interfaces imports
import SearchBoxProps from "./searchbox.interface";

// styling imports
import {
  ClearIconSC,
  SearchIconSC,
  SearchBoxSC,
  TextFieldSC,
} from "./searchbox.style";

  
const SearchBox: FC<SearchBoxProps> = ({ searchTerm, setSearchTerm }) => {
  
  const handleChangeSearchTerm = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const handleClearSearchTerm = () => {
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
        onChange={handleChangeSearchTerm}
      />
      {!_.isEmpty(searchTerm) && (
        <ClearIconSC onClick={handleClearSearchTerm}>
          <ClearIcon />
        </ClearIconSC>
      )}
    </SearchBoxSC>
  );
};

export default SearchBox;
