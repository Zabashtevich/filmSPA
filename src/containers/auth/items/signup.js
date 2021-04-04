import React, { useEffect, useState } from "react";
import { Auth } from "../../../components";

export default function Signup() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);

  console.log(file);

  useEffect(() => {
    if (file) {
      if (parseFloat(file.size / (1024 * 1024)) >= 3) {
        //todo error modal
      }
      let img = new Image();
      img.src = window.URL.createObjectURL(file);

      img.onload = () => {
        if (img.width > 200 || img.height > 200) {
          console.log("ne norm");
        } else {
          setUrl(img.src);
        }
      };
    }
  }, [file]);

  return (
    <>
      <Auth.Header type="signup">
        <Auth.Title>SIGN UP</Auth.Title>
        <Auth.Avatar src={url} disabled={url === null && 1} />
        <Auth.File type="file" onChange={(e) => setFile(e.target.files[0])} />
      </Auth.Header>
      <Auth.Row>
        <Auth.Input placeholder="Email" />
        <Auth.Mail />
      </Auth.Row>
      <Auth.Row>
        <Auth.Input placeholder="Nickname" />
        <Auth.Nickname />
      </Auth.Row>
      <Auth.Row>
        <Auth.Input placeholder="Password" />
        <Auth.Key />
      </Auth.Row>
      <Auth.Row>
        <Auth.Input placeholder="Repeat password" />
        <Auth.Key />
      </Auth.Row>
      <Auth.Wrapper>
        <Auth.Button>REGISTER</Auth.Button>
        <Auth.Back>BACK</Auth.Back>
      </Auth.Wrapper>
      <Auth.Message>
        <Auth.Subtitle>Already have an account?</Auth.Subtitle>
        <Auth.Link to="/authentication/login">Login here</Auth.Link>
      </Auth.Message>
    </>
  );
}
