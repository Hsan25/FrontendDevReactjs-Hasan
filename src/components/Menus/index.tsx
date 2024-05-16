import type { Menus } from "../../types";

const Menus = ({ menus }: { menus: Menus | undefined }) => {
  return (
    <div className="my-shadow-black p-2 mt-5 md:max-h-[30rem] rounded-md md:w-1/2">
      <div className="">Menus: </div>
      <div className="flex gap-4 ">
        <div className="pl-4">
          <div className="">Foods</div>
          <ul className="list-disc pl-8 block w-full">
            {menus?.foods.map((item, idx) => (
              <li key={idx} className="text-sm">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="pl-4">
          <div className="">Drinks</div>
          <ul className="list-disc pl-8 block w-full">
            {menus?.drinks.map((item, idx) => (
              <li key={idx} className="text-sm">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menus;
