import React, { useEffect } from "react";
import { PaginContainer } from "..";
import { Review } from "../../components";
import { usePaginContext } from "../../context";
import ReviewItem from "./items/review-item";

export default function ReviewContainer({ data }) {
  const [{ active }, setPaginProps] = usePaginContext();
  const reviews = data?.reviews?.results || null;

  useEffect(() => {
    if (reviews) {
      setPaginProps((prev) => ({
        ...prev,
        amount: Math.ceil(reviews.length) / 5,
        loading: false,
      }));
    }
  }, []);

  return (
    <Review>
      {reviews &&
        reviews
          .slice(active * 5 - 5, active * 5)
          .map((item) => <ReviewItem key={item.id} item={item} />)}
      <PaginContainer />
    </Review>
  );
}
