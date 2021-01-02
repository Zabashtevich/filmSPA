import React from "react";

export default function ModalGalleryContainer({
  hideModal,
  items,
  setActiveImage,
}) {
  const handleSlideLeft = () => {
    if (firstIndexImagesOffset - 5 < 0 && firstIndexImagesOffset > 0) {
      setFirstIndexImagesOffset(0);
      setLastIndexImagesOffset((prev) => prev - firstIndexImagesOffset);
    } else {
      setFirstIndexImagesOffset((prev) => prev - 5);
      setLastIndexImagesOffset((prev) => prev - 5);
    }
  };

  const handleSlideRight = () => {
    const offset = list.images.posters.length - lastIndexImagesOffset;
    if (offset > 0 && lastIndexImagesOffset + 5 > list.images.posters.length) {
      setFirstIndexImagesOffset((prev) => prev + offset);
      setLastIndexImagesOffset((prev) => prev + offset);
    } else if (lastIndexImagesOffset + 5 > list.images.posters.length) {
      return;
    } else {
      setFirstIndexImagesOffset((prev) => prev + 5);
      setLastIndexImagesOffset((prev) => prev + 5);
    }
  };
  return (
    <ModalGallery.Backdrop onClick={(e) => hideModal(e)}>
      <ModalGallery.Photo
        src={activeImage ? activeImage : list.images.posters[0].file_path}
      >
        <ModalGallery.CloseIcon onClick={(e) => hideModal(e)} />
        <ModalGallery.BottomWrapper>
          <ModalGallery.Button
            onClick={handleSlideLeft}
            disabled={firstIndexImagesOffset === 0 ? 1 : 0}
          >
            <ModalGallery.IconSlider />
          </ModalGallery.Button>
          <ModalGallery.ListContainer>
            {list.images.posters
              .slice(firstIndexImagesOffset, lastIndexImagesOffset)
              .map((item, i) => {
                return (
                  <ModalGallery.ListItem
                    key={i}
                    src={item.file_path}
                    active={
                      activeImage === item.file_path ||
                      (i === 0 && activeImage === null)
                        ? "true"
                        : null
                    }
                    onClick={() => setActiveImage(item.file_path)}
                  />
                );
              })}
          </ModalGallery.ListContainer>
          <ModalGallery.Button
            disabled={
              list.images.posters.length - lastIndexImagesOffset === 0 ? 1 : 0
            }
          >
            <ModalGallery.IconSlider
              rightdirection={true}
              onClick={handleSlideRight}
            />
          </ModalGallery.Button>
        </ModalGallery.BottomWrapper>
      </ModalGallery.Photo>
    </ModalGallery.Backdrop>
  );
}
