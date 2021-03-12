import React, { createContext, useContext, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { getCorrectSrc, getVisibleText } from "../../utils";

import {
  Container,
  Header,
  Nickname,
  Avatar,
  Placeholder,
  Value,
  Date,
  Body,
  Textblock,
  Link,
  Button,
} from "./styles/review";

const ReviewContext = createContext(null);

export default function Review({ children, ...rest }) {
  const [loadMoreVisible, setLoadMoreVisible] = useState(false);

  return (
    <ReviewContext.Provider value={[loadMoreVisible, setLoadMoreVisible]}>
      <Container {...rest}>{children}</Container>
    </ReviewContext.Provider>
  );
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

Review.Body = function ReviewBody({ children, ...rest }) {
  const [previewVisible, setPreviewVisible] = useContext(ReviewContext);
  const [...text] = children.split("\n");

  useEffect(() => {
    if (children.length > 300) {
      setPreviewVisible(true);
    }
  }, []);

  return (
    <Body {...rest}>
      {previewVisible &&
        children
          .slice(0, 300)
          .split("\n")
          .map((item) =>
            item.includes("http") ? (
              <Link>{item}</Link>
            ) : (
              <Textblock>{item}</Textblock>
            ),
          )}
      {!previewVisible &&
        children
          .split("\n")
          .map((item) =>
            item.includes("http") ? (
              <Link>{item}</Link>
            ) : (
              <Textblock>{item}</Textblock>
            ),
          )}
    </Body>
  );
};

Review.Button = function ReviewButton({ children, ...rest }) {
  const [loadMoreVisible, setLoadMoreVisible] = useContext(ReviewContext);

  return (
    <CSSTransition
      in={loadMoreVisible}
      classNames="fade"
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <Button {...rest} onClick={() => setLoadMoreVisible(false)}>
        {children}
      </Button>
    </CSSTransition>
  );
};
