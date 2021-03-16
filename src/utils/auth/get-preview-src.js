export default function getPreviewSrc(file, setUrl) {
  const reader = new FileReader();
  reader.addEventListener("load", function () {
    setUrl(this.result);
  });

  reader.readAsDataURL(file);
}
