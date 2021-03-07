import React from "react";
import { createPortal } from "react-dom";

import { Trailer } from "../../components";
import { useTrailerContext } from "../../context";

export default function TrailerContainer({ data }) {
  const [{ url, visible, videos }] = useTrailerContext();
  //https://www.youtube.com/watch?v=sfM7_JLk-84
  console.log(data);
  return createPortal(
    <Trailer>
      <Trailer.Close />
      {!!videos && (
        <Trailer.Container>
          <Trailer.Videoplayer
            width="800"
            height="315"
            src="https://www.youtube.com/embed/OOy764mDtiA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <Trailer.Wrapper>
            <Trailer.Info>
              <Trailer.Poster src={data.poster_path} />
              <Trailer.Meta>
                <Trailer.Title>{data.title}</Trailer.Title>
                <Trailer.Description>
                  {data.genres.map((item) => item.name).join(", ")}
                </Trailer.Description>
                <Trailer.Row>
                  <Trailer.Average>{data.vote_average}</Trailer.Average>
                  <Trailer.Amount>{data.vote_amount}</Trailer.Amount>
                </Trailer.Row>
              </Trailer.Meta>
            </Trailer.Info>
            <Trailer.List>
              {visible &&
                videos.map(({}) => (
                  <Trailer.Item>
                    <Trailer.Preview />
                    <Trailer.Subtitle></Trailer.Subtitle>
                  </Trailer.Item>
                ))}
            </Trailer.List>
          </Trailer.Wrapper>
        </Trailer.Container>
      )}
    </Trailer>,
    document.getElementById("root"),
  );
}
