import React from "react";

import { useUtilityContext } from "./../../context";
import { Utility } from "../../components";

export default function UtilityContainer() {
  const [{ visible, errors, type, message }] = useUtilityContext();
  console.log(errors);
  return (
    <Utility visible={visible}>
      {type === "default" && (
        <>
          <Utility.Message></Utility.Message>
          <Utility.Loading />
        </>
      )}
      {type === "error" && (
        <>
          <Utility.Icon />
          <Utility.Wrapper>
            {visible &&
              errors.map((item, index) => (
                <Utility.Error key={index}>{item}</Utility.Error>
              ))}
          </Utility.Wrapper>
        </>
      )}
    </Utility>
  );
}
