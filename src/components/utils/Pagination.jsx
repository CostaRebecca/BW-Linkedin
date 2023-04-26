import { useEffect, useState } from "react";

const Pagination = ({ total, start, setStart, stop, setStop }) => {
  const [step, setStep] = useState(50);
  const [nPages, setNPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setNPages(Math.ceil(total / step));
  }, []);

  useEffect(() => {
    const newNPages = Math.ceil(total / step);
    setNPages(newNPages);
    if (currentPage > newNPages) {
      setCurrentPage(newNPages);
    } else {
      for (let i = 1; i <= newNPages; i++) {
        let rangeStart = i * step;
        let rangeStop = rangeStart + step;

        if (start >= rangeStart && start < rangeStop) {
          //console.log(i, start, rangeStart, rangeStop);
          setCurrentPage(i);
        }
      }
    }
  }, [step]);

  useEffect(() => {
    handlePages();
  }, [currentPage]);

  const handlePages = () => {
    const start = (currentPage - 1) * step;
    setStart(start);
    setStop(start + step);
  };
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 && "disabled"}`}>
          <button className="page-link" aria-label="Previous" onClick={() => setCurrentPage(currentPage - 1)}>
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <li className="page-item">
          <div className="page-link">
            <span>pagina {currentPage} </span>
            <span>di {nPages}</span>
          </div>
        </li>
        <li className={`page-item ${currentPage === nPages && "disabled"}`}>
          <button className="page-link" aria-label="Next" onClick={() => setCurrentPage(currentPage + 1)}>
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
        <li className="page-item ps-2">
          <select
            className="form-select"
            aria-label="Default select example"
            value={step}
            onChange={(e) => setStep(parseInt(e.target.value))}
          >
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
            <option value="200">200</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
