import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Gallery } from "../../components";
import { checkCategories, getCategories } from "../../utils";
import { useFetch } from "./../../hooks";

export default function GalleryContainer() {
  const [visible, setVisible] = useState(false);
  const [{ categories, content, active }, setCategories] = useState({
    content: null,
    categories: null,
    active: null,
  });
  const { slug, direction } = useParams();

  const [data, loading] = useFetch(direction, slug);

  useEffect(() => {
    if (!loading && checkCategories(data)) {
      setCategories(getCategories(data));
      setVisible(true);
    }
  }, [loading, data]);

  console.log(data);

  return (
    visible && (
      <Gallery>
        <Gallery.Header>
          <Gallery.Inner>
            <Gallery.Folder slug={data.poster_path ?? null} />
            <Gallery.Information>
              <Gallery.Title>
                {data.title || data.original_title || data.name}
              </Gallery.Title>
              <Gallery.Back to={`/details/${direction}/${slug}`}>
                <Gallery.Icon />
                Back to main
              </Gallery.Back>
            </Gallery.Information>
          </Gallery.Inner>
        </Gallery.Header>
        <Gallery.Wrapper>
          <Gallery.Column type="menu">
            <Gallery.Menu>
              <Gallery.Subtitle>MENU</Gallery.Subtitle>
              {categories.map((item) => {
                const amount = content[item.toLowerCase()].length;

                return (
                  <Gallery.Item key={item} selected={item === active && 1}>
                    <Gallery.Value>{item}</Gallery.Value>
                    <Gallery.Amount>{amount}</Gallery.Amount>
                  </Gallery.Item>
                );
              })}
            </Gallery.Menu>
          </Gallery.Column>
          <Gallery.Column type="content">
            <Gallery.Backdrop />
            <Gallery.Poster />
          </Gallery.Column>
        </Gallery.Wrapper>
      </Gallery>
    )
  );
}
