import React, { useState } from "react";
import { ModalGallery } from "../../../../components";
import { CSSTransition } from "react-transition-group";

export default function ModalGalleryContainer({
  items,
  setVisibleGallery,
  visibleGallery,
}) {
  const [activeImage, setActiveImage] = useState(null);
  const [firstIndexImagesOffset, setFirstIndexImagesOffset] = useState(0);
  const [lastIndexImagesOffset, setLastIndexImagesOffset] = useState(5);

  const hideModal = (e) => {
    if (
      e.target.classList.value.includes("Backdrop") > 0 ||
      e.target.classList.value.includes("Close") > 0
    ) {
      document.body.style.overflow = "auto";
      setActiveImage(null);
      setVisibleGallery(false);
    }
  };

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
    const offset = items.length - lastIndexImagesOffset;
    if (offset > 0 && lastIndexImagesOffset + 5 > items.length) {
      setFirstIndexImagesOffset((prev) => prev + offset);
      setLastIndexImagesOffset((prev) => prev + offset);
    } else if (lastIndexImagesOffset + 5 > items.length) {
      return;
    } else {
      setFirstIndexImagesOffset((prev) => prev + 5);
      setLastIndexImagesOffset((prev) => prev + 5);
    }
  };

  return (
    <ModalGallery.Backdrop
      onClick={(e) => {
        hideModal(e);
      }}
    >
      <CSSTransition
        timeout={{ enter: 500, exit: 600 }}
        appear={true}
        in={visibleGallery}
      >
        {(state) => (
          <ModalGallery.Photo
            state={state}
            src={activeImage ? activeImage : items[0].file_path}
          >
            <ModalGallery.CloseIcon
              onClick={(e) => {
                hideModal(e);
              }}
            />
            <ModalGallery.BottomWrapper>
              <ModalGallery.Button
                onClick={handleSlideLeft}
                disabled={firstIndexImagesOffset === 0 ? 1 : 0}
              >
                <ModalGallery.IconSlider />
              </ModalGallery.Button>
              <ModalGallery.ListContainer>
                {items
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
                        onClick={() => {
                          setActiveImage(item.file_path);
                        }}
                      />
                    );
                  })}
              </ModalGallery.ListContainer>
              <ModalGallery.Button
                disabled={items.length - lastIndexImagesOffset <= 0 ? 1 : 0}
              >
                <ModalGallery.IconSlider
                  rightdirection={1}
                  onClick={handleSlideRight}
                />
              </ModalGallery.Button>
            </ModalGallery.BottomWrapper>
          </ModalGallery.Photo>
        )}
      </CSSTransition>
    </ModalGallery.Backdrop>
  );
}
