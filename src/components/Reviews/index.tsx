import { CustomerReview } from "../../types";

const Reviews = ({ reviews }: { reviews: CustomerReview[] | undefined }) => {
  return (
    <div className="my-shadow-black p-2 mt-5 rounded-md md:w-1/2">
      <div className="">Reviews</div>
      <div className="flex flex-col gap-3">
        {reviews?.map((item, idx) => (
          <div className="border-2 shadow-lg p-2 rounded-md" key={idx}>
            <div className="text-sm flex gap-5">
              <div className="">{item.name}</div>
              <div className="text-gray-600/95">{item.date}</div>
            </div>
            <p className="text-sm">{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
