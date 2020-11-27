import { parse } from "query-string";

export const range = (start, end) => {
  return [...Array(end)].map((_, index) => index + start);
};

export const getPaginator = ({ search }) => {
  const parsedSearch = parse(search);
  console.log(parsedSearch);
  const currentPage = parsedSearch.page ? +parsedSearch.page : 1;
  return currentPage;
};
