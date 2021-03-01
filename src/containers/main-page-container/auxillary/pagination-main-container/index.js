import React from "react";
import { Pagination } from "../../../../components";
import { getPaginatorStart, getPaginatorEnd } from "../../../../utils/utils";
import { range } from "../../../../utils";

export default function PaginationMainContainer({ currentPage }) {
  const paginatorStart = getPaginatorStart(currentPage);
  const paginatorEnd = getPaginatorEnd(currentPage);
  const pagesAmount = range(paginatorStart, paginatorEnd);

  return (
    <Pagination>
      <Pagination.List>
        {currentPage > 6 ? (
          <>
            <Pagination.Item to={`/?page=1`}>1</Pagination.Item>
            <Pagination.Etc>...</Pagination.Etc>
          </>
        ) : null}
        {pagesAmount.map((item) => (
          <Pagination.Item
            key={item}
            selected={item === currentPage}
            to={`/?page=${item}`}
          >
            {item}
          </Pagination.Item>
        ))}
        {currentPage >= 994 ? null : (
          <>
            <Pagination.Etc>...</Pagination.Etc>
            <Pagination.Max
              to={`/?page=${1000}`}
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
