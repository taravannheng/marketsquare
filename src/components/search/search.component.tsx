import { FC, useEffect, useState } from 'react';
import _ from 'lodash';

import SearchInterface from './search.interface';
import ProductInterface from '../../interfaces/product-interface';
import { SearchSC } from './search.style';
import SearchBox from '../searchbox/searchbox.component';
import SuggestionList from '../suggestion-list/suggestion-list.component';
import { searchProducts } from '../../apis/products/products.api';

const Search: FC<SearchInterface> = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [suggestions, setSuggestions] = useState<ProductInterface[]>([]);

  useEffect(() => {
    const getSuggestions = async () => {
      const response = await searchProducts(searchTerm);
      const products = response.data;
      setSuggestions(products);
    }

    if (searchTerm.length > 2) {
      getSuggestions();
    }
  }, [searchTerm]);

  return (
    <SearchSC>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {searchTerm.length > 2 && <SuggestionList suggestions={suggestions} />}
    </SearchSC>
  )
}

export default Search;