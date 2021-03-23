import React, { useEffect, useState } from "react";

import { checkCategories, getCategories } from "../../utils";
import { Media } from "./../../components";
import { useLocation } from "react-router";

export default function MediaContainer({ data, loading }) {
  const [visible, setVisible] = useState(false);
  const [{ categories, active, content }, setCategories] = useState({
    categories: null,
    active: null,
    content: null,
  });
  const [scrollvalue, setScrollvalue] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!loading && checkCategories(data)) {
      setVisible(true);
      setCategories(getCategories(data));
    }
  }, [loading]);

  return (
    visible && (
      <Media>
        <Media.Header>
          <Media.Title>Media</Media.Title>
          <Media.Wrapper>
            {categories.map((item) => {
              return (
                <Media.Tab
                  key={item}
                  selected={item === active && 1}
                  onClick={() =>
                    setCategories((prev) => ({ ...prev, active: item }))
                  }
                >
                  {item}
                </Media.Tab>
              );
            })}
          </Media.Wrapper>
          <Media.All
            to={`${pathname}/gallery`}
          >{`See All ${active}`}</Media.All>
        </Media.Header>
        <Media.Scroller
          onScroll={(e) => setScrollvalue(e.target.scrollLeft)}
          blured={scrollvalue !== 0 && 1}
        >
          <MediaItems active={active} content={content} />
        </Media.Scroller>
      </Media>
    )
  );
}

function MediaItems({ active, content }) {
  return (
    <>
      {active === "Backdrops" &&
        content.backdrops
          .slice(0, 10)
          .map((item) => (
            <Media.Backdrop key={item.file_path} file={item.file_path} />
          ))}
      {active === "Posters" &&
        content.posters
          .slice(0, 10)
          .map((item) => (
            <Media.Poster key={item.file_path} file={item.file_path} />
          ))}
      {active === "Videos" &&
        content.videos.map((item) => (
          <Media.Video key={item.key} url={item.key}>
            <Media.Play />
          </Media.Video>
        ))}
    </>
  );
}
