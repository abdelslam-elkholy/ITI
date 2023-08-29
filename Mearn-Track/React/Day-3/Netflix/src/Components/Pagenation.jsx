import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const range = [];
  for (let i = 1; i <= totalPages; i++) {
    range.push(i);
  }

  return (
    <nav className="flex justify-center mt-8">
      <ul className="pagination">
        {range.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`pagination-item ${
              pageNumber === currentPage ? "active" : ""
            }`}
          >
            <button
              className="pagination-link"
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
