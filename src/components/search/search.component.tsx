import { FC, useEffect, useState } from "react";
import _ from "lodash";
import { useSelector } from "react-redux";

import SearchInterface from "./search.interface";
import ProductInterface from "../../interfaces/product-interface";
import { SearchSC } from "./search.style";
import SearchBox from "../searchbox/searchbox.component";
import SuggestionList from "../suggestion-list/suggestion-list.component";
import { searchProducts } from "../../apis/products/products.api";
import getCorrectedSearchTerm from "../../apis/search/search.api";
import { selectProducts } from "../../store/product/product.selector";

const Search: FC<SearchInterface> = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<ProductInterface[]>([]);
  const [correctedSearchTerm, setCorrectedSearchTerm] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const products = useSelector(selectProducts);

  useEffect(() => {
    setSuggestions([]);

    const getSuggestions = async () => {
      // find products that match the search term
      let foundProducts;
      foundProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // if no products found, call api to get suggestions
      if (_.isEmpty(foundProducts)) {
        const response = await searchProducts(searchTerm);
        let data = response.data;
        if (_.isEmpty(data)) {
          foundProducts = null;
        }

        if (!_.isEmpty(data)) {
          foundProducts = await response.data;
        }
      }

      setSuggestions(foundProducts);
    };

    if (searchTerm.length > 2) {
      setIsLoading(true);
      getSuggestions();
    }
  }, [searchTerm]);

  useEffect(() => {
    const fetchCorrectedSearchTerm = async () => {
      const response = await getCorrectedSearchTerm(searchTerm);
      const correctedSearchTerm = response?.data?.spelling?.correctedQuery;
      setCorrectedSearchTerm(correctedSearchTerm);
    };

    if (!_.isEmpty(suggestions) || suggestions === null) {
      setIsLoading(false);
    }

    if (_.isEmpty(suggestions) && searchTerm.length > 2) {
      fetchCorrectedSearchTerm();
    }
  }, [suggestions]);

  return (
    <SearchSC>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} setIsFocused={setIsFocused} />
      {searchTerm.length > 2 && isFocused && (
        <SuggestionList
          setSearchTerm={setSearchTerm}
          suggestions={suggestions}
          correctedSearchTerm={correctedSearchTerm}
          isLoading={isLoading}
        />
      )}
    </SearchSC>
  );
};

export default Search;
