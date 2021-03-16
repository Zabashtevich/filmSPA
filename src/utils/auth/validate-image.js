export default async function validateImage(file, setProps) {
  setProps((prev) => ({ ...prev, loading: true }));
  if (parseFloat(file.size / (1024 * 1024)) >= 3) {
    setProps((prev) => ({
      ...prev,
      loading: false,
      errorList: [...prev.errorList, "File size must be smaller than 3 MB"],
    }));
    return;
  }

  await getImageUrl(file)
    .then(() => {
      setProps((prev) => ({ ...prev, file }));
    })
    .catch(() => {
      setProps((prev) => ({
        ...prev,
        errorList: [
          ...prev.errorList,
          "File width or height must be smaller than 200px",
        ],
      }));
    });
}

function getImageUrl(file) {
  return new Promise(function (resolve, reject) {
    let img = new Image();
    img.src = window.URL.createObjectURL(file);

    img.onload = () => {
      if (img.width > 200 || img.height > 200) {
        reject();
      } else {
        resolve();
      }
    };
  });
}
