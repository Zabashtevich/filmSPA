import { parse } from "query-string";

export const range = (start, end) => {
  return [...Array(end)].map((_, index) => index + start);
};

export const getPaginator = ({ search }) => {
  const parsedSearch = parse(search);
  const currentPage = parsedSearch.page ? +parsedSearch.page : 1;
  return currentPage;
};

export const getPaginatorStart = (currentPage) => {
  const start = currentPage === 2 ? 1 : currentPage > 6 ? currentPage - 3 : 1;
  return start;
};

export const getPaginatorEnd = (currentPage, paginatorStart) => {
  const end = currentPage <= 994 ? 10 : 1004 - currentPage;
  return end;
};
