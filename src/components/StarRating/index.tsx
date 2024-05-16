import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 items-center">
      {Array.from({ length: 5 }).map((_, idx) => {
        //  3.5 >= 3 -> 3 > 3
        //  3.5 >= 4 -> 4 >= 4  
        if (Math.floor(rating) >= idx + 1) {
          return <IoIosStar className="fill-gray-900" key={idx}/>;
        } else if (Math.ceil(rating) >= idx + 1) {
          return <IoIosStarHalf className="fill-gray-900" key={idx}/>;
        }
        return <IoIosStarOutline className="fill-gray-900" key={idx}/>;
      })}
    </div>
  );
};

export default StarRating;
