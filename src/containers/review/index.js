import React, { useEffect } from "react";

import { Review } from "../../components";
import { getCorrectDate, range } from "../../utils";
import { PaginationContainer } from "..";
import { usePaginationContext } from "../../context";
import { ReviewSkeleton } from "../../components/skeleton";

export default function ReviewContainer({ combineReviews }) {
  const [{ active }, setPaginProps] = usePaginationContext();

  const { process, list } = combineReviews;

  useEffect(() => {
    if (!process) {
      setPaginProps((prev) => ({
        ...prev,
        loading: false,
        amount: 5,
        length: Math.ceil(list.length / 5),
      }));
    }
    return () =>
      setPaginProps({ loading: true, active: 1, amount: null, length: null });
  }, [process]);

  return (
    <>
      {process &&
        range(1, 5).map((item) => (
          <Review>
            <ReviewSkeleton key={item} />
          </Review>
        ))}
      {!process &&
        list.slice(active * 5 - 5, active * 5).map((item) => {
          const avatar = item.author_details.avatar_path;
          const value = item.author_details.rating || null;

          return (
            <Review key={item.id}>
              <Review.Header>
                {avatar && <Review.Avatar src={avatar} />}
                {!avatar && <Review.Placeholder />}
                <Review.Nickname>{item.author}</Review.Nickname>
                {value && <Review.Value value={value}>{value}</Review.Value>}
                <Review.Date>{getCorrectDate(item.created_at)}</Review.Date>
              </Review.Header>
              <Review.Body>{item.content}</Review.Body>
              <Review.Button>Load more</Review.Button>
            </Review>
          );
        })}
      <PaginationContainer />
    </>
  );
}
