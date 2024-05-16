import { useState } from "react";
import Select, { Option } from "../Select";
import Button from "../ui/Button";
import { useFilter } from "../../context/FilterContext";
const optionPrice: Option[] = [
  {
    value: "ASC",
    label: "> Rp 100.000",
  },
  {
    value: "DESC",
    label: "< Rp 100.000",
  },
];
const optionCategory: Option[] = [
  {
    value: "1",
    label: "Modern",
  },
  {
    value: "2",
    label: "Tradisional",
  },
  {
    value: "3",
    label: "Italia",
  },
];
const Filter = () => {
  const {
    categories,
    isOpenNow,
    price,
    setCategories,
    setIsOpenNow,
    setPrice,
  } = useFilter();

  const [showFilter, setShowFilter] = useState<boolean>(false);
  const clearFilter = (): void => {
    if (setCategories && setPrice && setIsOpenNow) {
      setCategories("0");
      setPrice("0");
      setIsOpenNow(false);
    }
  };

  return (
    <>
      <div className="sm:hidden mt-3 ml-4">
        <Button
          label={showFilter ? "close" : "Filter"}
          onClick={() => setShowFilter(!showFilter)}
        />
      </div>
      <div
        className={` ${
          showFilter ? "flex" : "hidden"
        } sm:flex flex-col gap-5 sm:flex-row p-3 px-10 justify-between items-center border-y-2 mt-2 border-black/35`}>
        <div className="sm:flex sm:flex-nowrap gap-3 items-center">
          <span>Filter By: </span>
          <div className="flex gap-3 flex-col sm:flex-row">
            <div className="flex gap-3 p-1 border-b-gray-600/35 border-b-2">
              <input
                onChange={() => {
                  if (setIsOpenNow) {
                    setIsOpenNow(!isOpenNow);
                  }
                }}
                type="checkbox"
                checked={isOpenNow}
                id="open_now"
                className="cursor-pointer"
              />
              <label
                htmlFor="open_now"
                className="select-none cursor-pointer text-gray-900 text-sm">
                Open Now
              </label>
            </div>
            <div className="flex gap-3 text-gray-900 p-1 border-b-gray-600/35 border-b-2">
              <Select
                option={optionPrice}
                label="Price"
                defaultValue={String(price)}
                onChange={(e) => {
                  if (setPrice) {
                    setPrice(e.currentTarget.value);
                  }
                }}
              />
            </div>
            <div className="flex gap-3 p-1 text-gray-900 border-b-gray-600/35 border-b-2">
              <Select
                option={optionCategory}
                label="Categories"
                onChange={(e) => {
                  if (setCategories) {
                    setCategories(e.currentTarget.value);
                  }
                }}
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => clearFilter()}
          disabled={
            isOpenNow || Number(categories) || price != "0" ? false : true
          }
          className={`${
            isOpenNow || Number(categories) || price != "0"
              ? "hover:scale-[1.02] hover:bg-gray-900/90 transition-transform bg-gray-900 text-white"
              : "bg-transparent border-gray-500/75 text-gray-500/75 border "
          } rounded-none text-xs  px-5 py-2`}>
          CLEAR ALL
        </button>
      </div>
    </>
  );
};

export default Filter;
