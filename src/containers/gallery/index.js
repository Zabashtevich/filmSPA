import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Gallery } from "../../components";
import { GalleryMenuSkeleton } from "../../components/skeleton";
import { checkCategories, getCategories, range } from "../../utils";
import { useFetch } from "./../../hooks";

export default function GalleryContainer() {
  const [{ contentDelay, menuDelay }, setDelay] = useState({
    contentDelay: true,
    menuDelay: true,
  });
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
    }
  }, [loading, data]);

  return (
    <Gallery>
      {/* <Gallery.Header>
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
      </Gallery.Header> */}
      <Gallery.Wrapper>
        <Gallery.Column type="menu">
          <Gallery.Menu>
            <Gallery.Subtitle>MENU</Gallery.Subtitle>
            {range(0, 3).map((item) => (
              <Gallery.Item
                key={item}
                onexited={() =>
                  setDelay((prev) => ({ ...prev, menuDelay: false }))
                }
                visible={loading}
              >
                <GalleryMenuSkeleton />
              </Gallery.Item>
            ))}
            {categories?.map((item) => (
              <Gallery.Item
                key={item}
                visible={!loading && !menuDelay}
                selected={item === active && 1}
                onClick={() =>
                  setCategories((prev) => ({ ...prev, active: item }))
                }
              >
                <Gallery.Value>{item}</Gallery.Value>
                <Gallery.Amount>
                  {content[item.toLowerCase()].length}
                </Gallery.Amount>
              </Gallery.Item>
            ))}
          </Gallery.Menu>
        </Gallery.Column>
        {/* <Gallery.Column type="content" visible={!loading && !contentDelay}>
          {active === "Videos" &&
            content.videos.map((item) => (
              <GalleryVideo key={item.key} item={item} />
            ))}
          {active === "Backdrops" &&
            content.backdrops.map((item) => (
              <GalleryBackdrop key={item.file_path} item={item} />
            ))}
          {active === "Posters" &&
            content.posters.map((item) => (
              <GalleryPoster key={item.file_path} item={item} />
            ))}
        </Gallery.Column> */}
      </Gallery.Wrapper>
    </Gallery>
  );
}

function GalleryVideo({ item }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Gallery.Video slug={item.key} onLoad={() => setLoading(false)}>
        <Gallery.Play />
      </Gallery.Video>
    </>
  );
}

function GalleryBackdrop({ item }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Gallery.Backdrop
        slug={item.file_path}
        onLoad={() => setLoading(false)}
      />
    </>
  );
}

function GalleryPoster({ item }) {
  return <Gallery.Poster key={item.file_path} slug={item.file_path} />;
}
