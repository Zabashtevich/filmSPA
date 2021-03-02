export default function calculateOffset(
  images,
  start,
  end,
  type,
  setGalleryOffset,
) {
  let newStart = null;
  let newEnd = null;

  switch (type) {
    case "previous":
      newStart = start - 5 <= 0 ? 0 : start - 5;
      newEnd = end - 5 <= 5 ? 5 : end - 5;
      break;
    case "next":
      newStart =
        images.length - (end + 5) < 0 && images.length !== end
          ? images.length
          : images.length - (end + 5) >= 5
          ? end + 5
          : end;
      newEnd = newEnd - 5;
      break;
  }

  setGalleryOffset({ start: newStart, end: newEnd });
}
