import { Link } from "react-router-dom";
import { Restaurant } from "../../types";
import Button from "../ui/Button";
import StarRating from "../StarRating";
type CardProps = {
  data: Restaurant;
};

const Card = ({ data }: CardProps) => {
  return (
    <div className="max-w-60 flex flex-col gap-1">
      <div className="img w-full h-44 bg-gray-400">
        <img
          src={`https://restaurant-api.dicoding.dev/images/small/${data.pictureId}`}
          alt=""
          className="h-full w-full"
        />
      </div>
      <div className="text-sm sm:text-base w-full ">{data.name}</div>
      <StarRating rating={data.rating} />
      <div className="flex justify-between">
        <div className="AMERICAN text-xs">{data.city}</div>
        <div className="AMERICAN flex gap-2 items-center">
          <span className="block w-2 h-2 bg-cyan-300 rounded-full"></span>
          <span className="text-[11px]">OPEN NOW</span>
        </div>
      </div>
      <Link to={`/detail/${data.id}`} className="mt-5">
        <Button label="LEARN MORE" className="text-sm w-full" />
      </Link>
    </div>
  );
};

export default Card;
