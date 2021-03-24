import React, { useEffect, useState } from "react";

import { checkCategories, getCategories } from "../../utils";
import { Media } from "./../../components";
import { useLocation } from "react-router";

export default function MediaContainer({ data, loading }) {
  const [visible, setVisible] = useState(false);
  const [{ categories, selected, content }, setCategories] = useState({
    categories: null,
    selected: null,
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
                  selected={item === selected && 1}
                  onClick={() =>
                    setCategories((prev) => ({ ...prev, selected: item }))
                  }
                >
                  {item}
                </Media.Tab>
              );
            })}
          </Media.Wrapper>
          <Media.All
            to={`${pathname}/gallery`}
          >{`See All ${selected}`}</Media.All>
        </Media.Header>
        <Media.Scroller
          onScroll={(e) => setScrollvalue(e.target.scrollLeft)}
          blured={scrollvalue !== 0 && 1}
        >
          <MediaItems selected={selected} content={content} />
        </Media.Scroller>
      </Media>
    )
  );
}

function MediaItems({ selected, content }) {
  return (
    <>
      {selected === "Backdrops" &&
        content.backdrops
          .slice(0, 10)
          .map((item) => (
            <Media.Backdrop key={item.file_path} file={item.file_path} />
          ))}
      {selected === "Posters" &&
        content.posters
          .slice(0, 10)
          .map((item) => (
            <Media.Poster key={item.file_path} file={item.file_path} />
          ))}
      {selected === "Videos" &&
        content.videos.map((item) => (
          <Media.Video key={item.key} url={item.key}>
            <Media.Play />
          </Media.Video>
        ))}
    </>
  );
}
