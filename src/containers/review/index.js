import React from "react";
import { Review } from "../../components";

export default function ReviewContainer({ data, loading }) {
  return (
    <Review>
      <Review.List>
        <Review.Item>
          <Review.Header>
            <Review.Avatar />
            <Review.Nickname></Review.Nickname>
            <Review.Value></Review.Value>
            <Review.Date></Review.Date>
          </Review.Header>
          <Review.Content>
            <Review.Text>
              <Review.Paragraph></Review.Paragraph>
              <Review.All></Review.All>
            </Review.Text>
          </Review.Content>
        </Review.Item>
      </Review.List>
    </Review>
  );
}
