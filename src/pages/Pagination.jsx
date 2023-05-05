import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <a
            className="page-link"
            href="#"
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? 'disabled' : ''
          }`}
        >
          <a
            className="page-link"
            href="#"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
