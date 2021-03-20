import React from "react";

import { useNoticeContext } from "../../context";
import { Notice } from "../../components";
import { SpinnerSmall } from "../../components/loading-spinner";

export default function NoticeContainer() {
  const [{ visible, errors, type, message }] = useNoticeContext();
  return (
    <Notice visible={visible} type={type}>
      {type === "default" && (
        <>
          <Notice.Info />
          <Notice.Message>{message}</Notice.Message>
          <SpinnerSmall />
        </>
      )}
      {type === "error" && (
        <>
          <Notice.Error />
          <Notice.List>
            {visible &&
              errors.map((item, index) => (
                <Notice.Item key={index}>{item}</Notice.Item>
              ))}
          </Notice.List>
        </>
      )}
    </Notice>
  );
}
