export default async function validateImage(file, setProps) {
  setProps((prev) => ({ ...prev, process: true }));
  if (parseFloat(file.size / (1024 * 1024)) >= 3) {
    setProps((prev) => ({
      ...prev,
      precoess: false,
      errorList: ["File size must be smaller than 3 MB"],
    }));
    return;
  }

  await getImageUrl(file)
    .then(() => {
      setProps((prev) => ({ ...prev, process: false, file }));
    })
    .catch(() => {
      setProps((prev) => ({
        ...prev,
        process: false,
        errorList: ["File width or height must be smaller than 200px"],
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
