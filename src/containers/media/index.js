import React, { useState } from "react";

import { Media } from "./../../components";
import { useLocation } from "react-router";

export default function MediaContainer({ data }) {
  const [scrollvalue, setScrollvalue] = useState(0);
  const { pathname } = useLocation();

  const visible = data?.images?.posters;

  return (
    visible && (
      <Media>
        <Media.Header>
          <Media.Title>Media</Media.Title>
          <Media.All to={`${pathname}/gallery`}>See full gallery</Media.All>
        </Media.Header>
        <Media.Scroller
          onScroll={(e) => setScrollvalue(e.target.scrollLeft)}
          blured={scrollvalue !== 0 && 1}
        >
          {data.images.posters.slice(0, 10).map((item) => (
            <Media.Poster key={item.file_path} slug={item.file_path} />
          ))}
        </Media.Scroller>
      </Media>
    )
  );
}
