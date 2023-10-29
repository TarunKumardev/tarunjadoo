import { Idata } from '@/types';
import { useState } from 'react';



function useSearch(data: Idata[]) {
  const [searchResults, setSearchResults] = useState(data);
  
  function handleSearch(searchTerm: string) {
    const filteredResults = data.filter((value) => {
      return value.productname.toLowerCase().includes(searchTerm.toLowerCase());
    });
    console.log(filteredResults , "filteredResults");
    
    setSearchResults(filteredResults);
  }

  let debounceTimeout: NodeJS.Timeout | undefined;

  const debounceSearch = (value: string) => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    debounceTimeout = setTimeout(() => {
      handleSearch(value);
    }, 300);
  };
 
  return {
    searchResults,
    debounceSearch
  };
}

export default useSearch;
