import React from "react";

import { range } from "./../../utils";
import { Pagin } from "../../components";

export default function PaginContainer({ setActivePage, amount }) {
  return <Pagin>{range(1, amount).slice}</Pagin>;
}
