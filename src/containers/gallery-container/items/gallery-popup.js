import React from "react";

import { Gallery } from "../../../components";
import { useGalleryContext } from "./../../../context";
import { calculateOffset } from "../../../utils";

export default function GalleryPopup() {
  const [
    { offset, visible, images, url, process },
    { closeGallery, setOffset, setUrl, finishProcess },
  ] = useGalleryContext();
  const { start, end } = offset;

  function handleOffset(type) {
    setOffset(calculateOffset(images, offset, type));
  }

  return (
    <Gallery.Backdrop
      visible={visible}
      onClick={(e) => {
        e.stopPropagation();
        closeGallery();
      }}
    >
      <Gallery.Close
        onClick={(e) => {
          e.stopPropagation();
          closeGallery();
        }}
      />
      <Gallery.Container>
        <Gallery.Active
          url={url}
          finishProcess={finishProcess}
          process={process}
        />
        <Gallery.Footer>
          <Gallery.Left
            disabled={start === 0 && 1}
            onClick={() => {
              handleOffset("previous");
            }}
          />
          {images.slice(start, end).map(({ file_path }) => (
            <Gallery.Inner onClick={() => setUrl(file_path)} key={file_path}>
              <Gallery.Miniature path={file_path} url={url} />
            </Gallery.Inner>
          ))}
          <Gallery.Right
            onClick={() => handleOffset("next")}
            disabled={end === images.length && 1}
          />
        </Gallery.Footer>
      </Gallery.Container>
    </Gallery.Backdrop>
  );
}
