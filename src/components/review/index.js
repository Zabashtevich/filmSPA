import React from "react";
import { getCorrectSrc } from "../../utils";

import {
  Container,
  Header,
  Nickname,
  Avatar,
  Placeholder,
  Value,
  Date,
  Text,
  Textblock,
  Link,
} from "./styles/review";

export default function Review({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Review.Header = function ReviewHeader({ children, ...rest }) {
  return <Header {...rest}>{children}</Header>;
};

Review.Nickname = function ReviewNickname({ children, ...rest }) {
  return <Nickname {...rest}>{children}</Nickname>;
};

Review.Avatar = function ReviewAvatar({ src, ...rest }) {
  return <Avatar {...rest} src={getCorrectSrc(src)} />;
};

Review.Placeholder = function ReviewPlaceholder({ ...rest }) {
  return <Placeholder {...rest} src={"https://dummyimage.com/75x75/aaa/aaa"} />;
};

Review.Value = function ReviewValue({ children, ...rest }) {
  return <Value {...rest}>{children}</Value>;
};

Review.Date = function ReviewDate({ children, ...rest }) {
  return <Date {...rest}>{children}</Date>;
};

Review.Text = function ReviewText({ children, ...rest }) {
  const [...rst] = children.split("\n");
  return (
    <Text {...rest}>
      {rst.map((item, i) => {
        return item.includes("https") ? (
          <Link key={i} href={item} target="_blank">
            {item}
          </Link>
        ) : (
          <Textblock key={i}>{item}</Textblock>
        );
      })}
    </Text>
  );
};
