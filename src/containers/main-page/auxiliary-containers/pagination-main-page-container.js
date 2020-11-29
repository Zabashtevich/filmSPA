import React from "react";
import { Pagination } from "../../../components";
import { maxPagination } from "../../../constants/constants";
import {
  range,
  getPaginatorStart,
  getPaginatorEnd,
} from "../../../utils/utils";

export default function PaginationMainPageContainer({ setPage, currentPage }) {
  const paginatorStart = getPaginatorStart(currentPage);
  const paginatorEnd = getPaginatorEnd(currentPage);
  const pagesAmount = range(paginatorStart, paginatorEnd);

  return (
    <Pagination>
      <Pagination.List>
        {currentPage > 6 ? (
          <>
            <Pagination.Item to={`/?page=1`} onClick={() => setPage(`1`)}>
              1
            </Pagination.Item>
            <Pagination.Etc>...</Pagination.Etc>
          </>
        ) : null}
        {pagesAmount.map((item) => (
          <Pagination.Item
            key={item}
            selected={item === currentPage}
            to={`/?page=${item}`}
            onClick={() => setPage(`${item}`)}
          >
            {item}
          </Pagination.Item>
        ))}
        {currentPage >= 994 ? null : (
          <>
            <Pagination.Etc>...</Pagination.Etc>
            <Pagination.Max
              to={`/?page=${maxPagination}`}
              onClick={() => setPage(maxPagination)}
              selected={currentPage === 1000}
            >
              1000
            </Pagination.Max>
          </>
        )}
      </Pagination.List>
    </Pagination>
  );
}
