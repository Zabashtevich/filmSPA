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
import { PaginationContainer } from "./../";
import { usePaginationContext } from "../../context";

export default function GalleryContainer() {
  const [{ active }, setPaginProps] = usePaginationContext();
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

  useEffect(() => {
    if (categories) {
      setPaginProps({
        active: 1,
        amount: 10,
        length: Math.ceil(content[selected.toLowerCase()].length / 20),
        loading: false,
      });
    }
  }, [categories, selected]);

  return (
    <Gallery>
      {!loading && (
        <Gallery.Header>
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
        </Gallery.Header>
      )}
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
          {!loading &&
            selected === "Posters" &&
            content.posters.slice(active * 10 - 10, active * 10).map((item) => (
              <CSSTransition
                in={true}
                classNames="fade"
                timeout={{ enter: 500, exit: 0, appear: 500 }}
                mountOnEnter
                unmountOnExit
                appear={true}
                key={item.file_path}
              >
                <Gallery.Poster slug={item.file_path} />
              </CSSTransition>
            ))}
          {!loading &&
            selected === "Videos" &&
            content.videos.slice(active * 10 - 10, active * 10).map((item) => (
              <CSSTransition
                in={true}
                classNames="fade"
                timeout={{ enter: 500, exit: 0, appear: 500 }}
                mountOnEnter
                unmountOnExit
                appear={true}
                key={item.file_path}
              >
                <Gallery.Video slug={item.key}>
                  <Gallery.Play />
                </Gallery.Video>
              </CSSTransition>
            ))}
          {!loading &&
            selected === "Backdrops" &&
            content.backdrops
              .slice(active * 10 - 10, active * 10)
              .map((item) => (
                <CSSTransition
                  in={true}
                  classNames="fade"
                  timeout={{ enter: 500, exit: 0, appear: 500 }}
                  mountOnEnter
                  unmountOnExit
                  appear={true}
                  key={item.file_path}
                >
                  <Gallery.Backdrop slug={item.file_path} />
                </CSSTransition>
              ))}
          <PaginationContainer />
        </Gallery.Column>
      </Gallery.Body>
    </Gallery>
  );
}
