import React, { useState } from 'react';

const Pagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div>
      <ul>
        {currentItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <ul>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => handleClick(number)}
            style={{
              cursor: 'pointer',
              fontWeight: number === currentPage ? 'bold' : 'normal',
            }}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;