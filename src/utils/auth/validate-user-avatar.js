export default function validateUserAvatar(event) {
  return new Promise((resolve, reject) => {
    const file = event.target.files[0];
    if (parseFloat(file.size / (1024 * 1024)) >= 3) {
      reject();
    }
    let img = new Image();
    img.src = window.URL.createObjectURL(file);

    img.onload = () => {
      if (img.width > 200 || img.height > 200) {
        reject();
      } else {
        resolve({ src: img.src, file });
      }
    };
  });
}
