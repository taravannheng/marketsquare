import { FC, useEffect, useState } from "react";
import _ from "lodash";

import SearchInterface from "./search.interface";
import ProductInterface from "../../interfaces/product-interface";
import { SearchSC } from "./search.style";
import SearchBox from "../searchbox/searchbox.component";
import SuggestionList from "../suggestion-list/suggestion-list.component";
import { searchProducts } from "../../apis/products/products.api";
import getCorrectedSearchTerm from "../../apis/search/search.api";

const Search: FC<SearchInterface> = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<ProductInterface[]>([]);
  const [correctedSearchTerm, setCorrectedSearchTerm] = useState<string>("");

  useEffect(() => {
    const getSuggestions = async () => {
      const response = await searchProducts(searchTerm);
      const products = response.data;
      setSuggestions(products);
    };

    const fetchCorrectedSearchTerm = async () => {
      const response = await getCorrectedSearchTerm(searchTerm);
      const correctedSearchTerm = response?.data?.spelling?.correctedQuery;
      setCorrectedSearchTerm(correctedSearchTerm);
    };

    if (searchTerm.length > 2) {
      getSuggestions();
    }

    if (_.isEmpty(suggestions) && searchTerm.length > 2) {
      fetchCorrectedSearchTerm();
    }
  }, [searchTerm, suggestions]);

  return (
    <SearchSC>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {searchTerm.length > 2 && (
        <SuggestionList
          setSearchTerm={setSearchTerm}
          suggestions={suggestions}
          correctedSearchTerm={correctedSearchTerm}
        />
      )}
    </SearchSC>
  );
};

export default Search;
