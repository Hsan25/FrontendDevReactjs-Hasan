import React, { createContext, ReactNode, useContext, useState } from "react";

export type Filter = {
  isOpenNow: boolean;
  categories: string;
  price: string;
  setPrice?: React.Dispatch<React.SetStateAction<string>>;
  setIsOpenNow?: React.Dispatch<React.SetStateAction<boolean>>;
  setCategories?: React.Dispatch<React.SetStateAction<string>>;
};
const initialState: Filter = {
  isOpenNow: false,
  categories: "0",
  price: "0",
};
const FilterContext = createContext<Filter>(initialState);

const FilterContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOpenNow, setIsOpenNow] = useState<boolean>(false);
  const [categories, setCategories] = useState<string>("0");
  const [price, setPrice] = useState<string>("0");
  return (
    <FilterContext.Provider
      value={{
        isOpenNow,
        setIsOpenNow,
        categories,
        price,
        setCategories,
        setPrice,
      }}>
      {children}
    </FilterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFilter = () => useContext(FilterContext);

export default FilterContextProvider;
