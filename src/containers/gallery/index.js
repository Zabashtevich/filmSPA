import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CSSTransition } from "react-transition-group";

import { Gallery } from "../../components";
import {
  GalleryMenuSkeleton,
  GalleryPosterSkeleton,
} from "../../components/skeleton";
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
        <Gallery.Wrapper>
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
        </Gallery.Wrapper>
      </Gallery.Header> */}
      <Gallery.Body>
        <Gallery.Widget>
          <Gallery.Menu>
            <Gallery.Subtitle>MENU</Gallery.Subtitle>
            {loading &&
              range(0, 3).map((item) => (
                <CSSTransition
                  classNames="fade"
                  timeout={{ enter: 500, exit: 0, appear: 500 }}
                  mountOnEnter
                  unmountOnExit
                  appear={true}
                  key={item}
                >
                  <Gallery.Item>
                    <GalleryMenuSkeleton />
                  </Gallery.Item>
                </CSSTransition>
              ))}
            {!loading &&
              categories?.map((item) => (
                <CSSTransition
                  classNames="fade"
                  timeout={{ enter: 500, exit: 0, appear: 500 }}
                  mountOnEnter
                  unmountOnExit
                  appear={true}
                  key={item}
                >
                  <Gallery.Item
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
                </CSSTransition>
              ))}
          </Gallery.Menu>
        </Gallery.Widget>
        <Gallery.Column>
          {loading &&
            range(1, 20).map((item) => (
              <CSSTransition
                classNames="fade"
                timeout={{ enter: 500, exit: 0, appear: 500 }}
                mountOnEnter
                unmountOnExit
                appear={true}
                key={item}
              >
                <GalleryPosterSkeleton />
              </CSSTransition>
            ))}
          {!loading &&
            active === "Posters" &&
            content.posters.map((item) => (
              <CSSTransition
                classNames="fade"
                timeout={{ enter: 500, exit: 0, appear: 500 }}
                mountOnEnter
                unmountOnExit
                appear={true}
                key={item.file_path}
              >
                <GalleryPoster item={item} />
              </CSSTransition>
            ))}
          {!loading &&
            active === "Videos" &&
            content.videos.map((item) => (
              <CSSTransition
                classNames="fade"
                timeout={{ enter: 500, exit: 0, appear: 500 }}
                mountOnEnter
                unmountOnExit
                appear={true}
                key={item.file_path}
              >
                <GalleryVideo item={item} />
              </CSSTransition>
            ))}
          {!loading &&
            active === "Backdrops" &&
            content.backdrops.map((item) => (
              <CSSTransition
                classNames="fade"
                timeout={{ enter: 500, exit: 0, appear: 500 }}
                mountOnEnter
                unmountOnExit
                appear={true}
                key={item.file_path}
              >
                <GalleryBackdrop item={item} />
              </CSSTransition>
            ))}
        </Gallery.Column>
      </Gallery.Body>
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

function GalleryPoster({ item, visible }) {
  return (
    <Gallery.Poster
      key={item.file_path}
      slug={item.file_path}
      visible={visible}
    />
  );
}
