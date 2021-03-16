export default function getPreviewSrc(file, setUrl) {
  if (file === null) return;
  const reader = new FileReader();
  reader.addEventListener("load", function () {
    setUrl(this.result);
  });

  reader.readAsDataURL(file);
}
