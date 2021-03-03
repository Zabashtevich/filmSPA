export default function calculateOffset(
  images,
  { start, end },
  type,
  setOffset,
) {
  let newStart = null;
  let newEnd = null;
  const length = images.length;

  switch (type) {
    case "previous":
      newStart = start - 5 >= 0 ? start - 5 : 0;
      newEnd = newStart + 5;
      break;
    case "next":
      newEnd =
        length - (end + 5) > 0
          ? end + 5
          : length - (end + 5) < 0
          ? length
          : end;
      newStart = newEnd - 5;
      break;
  }

  return { start: newStart, end: newEnd };
}
