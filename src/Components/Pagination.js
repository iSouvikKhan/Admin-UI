import React from "react";

const Pagination = ({ pageNumber, currentPage, currentPageUpdate }) => {
  const pageNumberArr = [];
  for (let i = 1; i <= pageNumber; i++) {
    pageNumberArr.push(i);
  }

  const nextPage = () => {
    if (pageNumber <= 1) {
      return;
    }
    else if (currentPage === pageNumber) {
      return;
    }
    else {
      currentPageUpdate(currentPage + 1);
    }
  }
  const prevPage = () => {
    if (pageNumber <= 1) {
      return;
    }
    else if (currentPage === 1) {
      return;
    }
    else {
      currentPageUpdate(currentPage - 1);
    }
  }


  return (
    <div className="pagination-container">
      <div className="page-number" style={{ padding: "5px 6px" }}
        onClick={() => currentPageUpdate(1)}>&lt;&lt;</div>
      <div className="page-number" onClick={prevPage}>&lt;</div>
      {pageNumberArr.map((number) => (
        number === currentPage ?
          <div className="page-number active" key={number} onClick={() => currentPageUpdate(number)}>{number}</div>
          :
          <div className="page-number" key={number} onClick={() => currentPageUpdate(number)}>{number}</div>
      ))}
      <div className="page-number" onClick={nextPage}>&gt;</div>
      <div className="page-number" style={{ padding: "5px 6px" }}
        onClick={() => currentPageUpdate(pageNumberArr[pageNumberArr.length - 1])}>&gt;&gt;</div>
    </div>
  );
};

export default Pagination;
