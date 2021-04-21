import React, { useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { Gallery } from "../../components";
import {
  GalleryHeaderSkeleton,
  GalleryMenuSkeleton,
  GalleryPosterSkeleton,
} from "../../components/skeleton";
import { usePaginContext } from "../../context";
import {
  checkCategories,
  getCategories,
  getSelectedArray,
  range,
} from "../../utils";
import { PaginContainer } from "./../";
import GalleryItems from "./items/gallery-items";

export default function GalleryContainer({ data, loading, slug, direction }) {
  const [{ active }, setPagin] = usePaginContext();

  const [{ categories, content, selected }, setCategories] = useState({
    content: null,
    categories: null,
    selected: null,
  });

  useEffect(() => {
    if (!loading && checkCategories(data)) {
      setCategories(getCategories(data));
    }
  }, [loading, data]);

  useEffect(() => {
    if (categories && selected) {
      setPagin((prev) => ({
        ...prev,
        loading: false,
        amount: Math.ceil(getSelectedArray(selected, content).length / 20),
      }));
    }
  }, [categories, selected]);

  function menuToggler(value) {
    setCategories((prev) => ({
      ...prev,
      selected: value,
    }));
    setPagin((prev) => ({ ...prev, active: 1 }));
  }

  return (
    <Gallery>
      <Gallery.Header>
        <SwitchTransition mode={"out-in"}>
          <CSSTransition key={loading} classNames="fade" timeout={500}>
            <Gallery.Wrapper>
              {loading && <GalleryHeaderSkeleton />}
              {!loading && (
                <>
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
                </>
              )}
            </Gallery.Wrapper>
          </CSSTransition>
        </SwitchTransition>
      </Gallery.Header>
      <Gallery.Body>
        <Gallery.Widget>
          <Gallery.Menu>
            <Gallery.Subtitle>MENU</Gallery.Subtitle>
            <SwitchTransition mode={"out-in"}>
              <CSSTransition key={loading} classNames="fade" timeout={500}>
                <Gallery.List>
                  {loading &&
                    range(0, 3).map((item) => (
                      <GalleryMenuSkeleton key={item} />
                    ))}
                  {!loading &&
                    categories?.map((item) => (
                      <Gallery.Item
                        key={item}
                        selected={item === selected ? 1 : 0}
                        onClick={() => menuToggler(item)}
                      >
                        <Gallery.Value>{item}</Gallery.Value>
                        <Gallery.Amount>
                          {content[item.toLowerCase()].length}
                        </Gallery.Amount>
                      </Gallery.Item>
                    ))}
                </Gallery.List>
              </CSSTransition>
            </SwitchTransition>
          </Gallery.Menu>
        </Gallery.Widget>
        <SwitchTransition mode={"out-in"}>
          <CSSTransition classNames="fade" timeout={500} key={loading}>
            <Gallery.Column>
              {loading &&
                range(1, 20).map((item) => (
                  <GalleryPosterSkeleton key={item} />
                ))}
              {categories &&
                getSelectedArray(selected, content)
                  .slice(active * 20 - 20, active * 20)
                  .map((item) => (
                    <GalleryItems
                      key={item.file_path || item.key}
                      item={item}
                      selected={selected}
                    />
                  ))}
              <PaginContainer />
            </Gallery.Column>
          </CSSTransition>
        </SwitchTransition>
      </Gallery.Body>
    </Gallery>
  );
}
