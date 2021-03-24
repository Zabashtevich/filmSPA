import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CSSTransition } from "react-transition-group";

import { Gallery } from "../../components";
import {
  GalleryHeaderSkeleton,
  GalleryMenuSkeleton,
  GalleryPosterSkeleton,
} from "../../components/skeleton";
import {
  checkCategories,
  getCategories,
  getSelectedArray,
  range,
} from "../../utils";
import { useFetch } from "./../../hooks";
import { PaginationContainer } from "./../";
import GalleryItems from "./items/gallery-items";

export default function GalleryContainer() {
  const [{ categories, content, selected }, setCategories] = useState({
    content: null,
    categories: null,
    selected: null,
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
      <Gallery.Header>
        <Gallery.Wrapper visible={loading}>
          <GalleryHeaderSkeleton />
        </Gallery.Wrapper>
        <Gallery.Wrapper visible={!loading}>
          <Gallery.Folder slug={data?.poster_path ?? null} />
          <Gallery.Information>
            <Gallery.Title>
              {data?.title || data?.original_title || data?.name}
            </Gallery.Title>
            <Gallery.Back to={`/details/${direction}/${slug}`}>
              <Gallery.Icon />
              Back to main
            </Gallery.Back>
          </Gallery.Information>
        </Gallery.Wrapper>
      </Gallery.Header>
      <Gallery.Body>
        <Gallery.Widget>
          <Gallery.Menu>
            <Gallery.Subtitle>MENU</Gallery.Subtitle>
            <Gallery.List>
              {loading &&
                range(0, 3).map((item) => (
                  <CSSTransition
                    in={true}
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
                    in={true}
                    timeout={{ enter: 500, exit: 0, appear: 500 }}
                    mountOnEnter
                    unmountOnExit
                    appear={true}
                    key={item}
                  >
                    <Gallery.Item
                      selected={item === selected ? 1 : 0}
                      onClick={() =>
                        setCategories((prev) => ({ ...prev, selected: item }))
                      }
                    >
                      <Gallery.Value>{item}</Gallery.Value>
                      <Gallery.Amount>
                        {content[item.toLowerCase()].length}
                      </Gallery.Amount>
                    </Gallery.Item>
                  </CSSTransition>
                ))}
            </Gallery.List>
          </Gallery.Menu>
        </Gallery.Widget>
        <Gallery.Column>
          {loading &&
            range(1, 20).map((item) => (
              <CSSTransition
                in={true}
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
          {categories &&
            getSelectedArray(selected, content)
              // .slice(active * 10 - 10, active * 10)TODO PAGIN
              .map((item) => (
                <CSSTransition
                  in={true}
                  classNames="fade"
                  timeout={{ enter: 500, exit: 0, appear: 500 }}
                  mountOnEnter
                  unmountOnExit
                  appear={true}
                  key={item.file_path || item.key}
                >
                  <GalleryItems item={item} selected={selected} />
                </CSSTransition>
              ))}
        </Gallery.Column>
      </Gallery.Body>
    </Gallery>
  );
}
