import React from "react";

function Pagination({
  handlePageChange,
  itemsPerPage,
  totalItems,
  currentPage,
  setCurrentPage,
}) {
  const paginationBtn = [];

  for (let i = 1; i < Math.ceil(totalItems / itemsPerPage) + 1; i++) {
    paginationBtn.push(i);
  }
  const handleNext = ()=>{
    setCurrentPage((prev)=>prev+1)
  }

  const handlePre = ()=>{
    setCurrentPage((prev)=>prev-1)
  }

  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
        <a class={`page-link ${currentPage <= 1 ? "disabled" : ""}`} onClick={handlePre} href="#">
            Previous
          </a>
        </li>
        {paginationBtn.map((number, index) => (
          <li
            class={`page-item ${currentPage === number ? "active" : ""}`}
            key={index}
          >
            <a
              class="page-link"
              onClick={() => handlePageChange(number)}
              href="#"
            >
              {number}
            </a>
          </li>
        ))}
        <li class="page-item">
          <a class={`page-link ${currentPage == Math.ceil(totalItems / itemsPerPage) ? "disabled" : ""}`} onClick={handleNext} href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
