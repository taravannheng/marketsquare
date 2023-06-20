import { FC } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from '@mui/material';

import SearchBoxInterface from './searchbox.interface';
import { IconSC, SearchBoxSC, TextFieldSC } from './searchbox.style';


const SearchBox: FC<SearchBoxInterface> = ({ searchTerm, setSearchTerm }) => {
  const isSmallScreen = useMediaQuery("(max-width: 639px)");

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

  return (
      <SearchBoxSC>
        <IconSC>
          <SearchIcon />
        </IconSC>
        <TextFieldSC
          sx={{ width: '100%'}}
          hiddenLabel
          label=""
          variant="filled"
          value={searchTerm}
          placeholder="Search products..."
          onChange={handleSearchTermChange}
        />
      </SearchBoxSC>
  )
}

export default SearchBox;