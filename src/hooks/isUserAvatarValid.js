import React, { useEffect, useState } from "react";

export default function isUserAvatarValid() {
  const [isValidating, setIsValidating] = useState(true);
  const [file, setfile] = useState(null);

  const addFile = (file) => {
    setFile(file);
  };

  useEffect(() => {}, []);
}
