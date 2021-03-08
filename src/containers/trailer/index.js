import React, { useState } from "react";
import { createPortal } from "react-dom";

import { Trailer } from "../../components";
import {
  ItemTrailerSkeleton,
  VideoplayerSkeleton,
} from "../../components/skeleton";
import { useTrailerContext } from "../../context";

export default function TrailerContainer({ data }) {
  const [
    { url, visible, videos, process },
    { setUrl, finishProcess, closeModal },
  ] = useTrailerContext();

  return (
    visible &&
    createPortal(
      <Trailer onClick={closeModal}>
        <Trailer.Close />
        <Trailer.Container onClick={(e) => e.stopPropagation()}>
          <Trailer.Videoplayer src={url} onLoad={finishProcess} />
          <VideoplayerSkeleton visible={process} />
          <Trailer.Wrapper>
            <Trailer.Info>
              <Trailer.Poster src={data.poster_path} />
              <Trailer.Meta>
                <Trailer.Title>{data.title}</Trailer.Title>
                <Trailer.Description>
                  {data.genres.map((item) => item.name).join(" , ")}
                </Trailer.Description>
                <Trailer.Row>
                  <Trailer.Average average={data.vote_average}>
                    {data.vote_average}
                  </Trailer.Average>
                  <Trailer.Amount>{data.vote_count}</Trailer.Amount>
                </Trailer.Row>
              </Trailer.Meta>
            </Trailer.Info>
            <Trailer.List>
              {videos
                .filter((item) => item.key !== url)
                .map((item) => (
                  <TrailerItem item={item} setUrl={setUrl} key={item.id} />
                ))}
            </Trailer.List>
          </Trailer.Wrapper>
        </Trailer.Container>
      </Trailer>,
      document.getElementById("root"),
    )
  );
}

function TrailerItem({ item, setUrl }) {
  const [loading, setLoading] = useState(true);
  console.log(loading);
  return (
    <Trailer.Item onClick={() => setUrl(item.key)}>
      <ItemTrailerSkeleton visible={loading} />
      <Trailer.Preview src={item.key} onLoad={() => setLoading(false)} />
      <Trailer.Subtitle>{item.name}</Trailer.Subtitle>
    </Trailer.Item>
  );
}
