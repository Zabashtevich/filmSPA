import React, { useEffect } from "react";

import { PaginContainer } from "./../";
import { usePaginContext } from "./../../context";
import { Review } from "../../components";
import ReviewItem from "./items/review-item";
import { range } from "../../utils";
import { ReviewSkeleton } from "../../components/skeleton";

export default function ReviewContainer({ data, loading }) {
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
  }, [reviews]);

  return (
    <Review>
      {range(1, 5).map((item) => (
        <Review.Item visible={loading} key={item}>
          <ReviewSkeleton />
        </Review.Item>
      ))}
      {reviews &&
        reviews
          .slice(active * 5 - 5, active * 5)
          .map((item) => (
            <ReviewItem key={item.id} item={item} visible={!loading} />
          ))}
      <PaginContainer />
    </Review>
  );
}
