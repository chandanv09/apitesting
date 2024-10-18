import { useContext , useState} from "react";
import "./App.css";
import { DataContext } from "./Context";
import Pagination from "./Pagination";

function App() {
  const { data } = useContext(DataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.products ? data.products.slice(indexOfFirstItem, indexOfLastItem) : [];
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  
 

  return (
    <div className="container">
      <div className="row">
        {currentItems && currentItems.map((item) => (
          <div className="col-md-3 my-3 " key={item.id || item.title}>
            <div className="card h-100">
              <img src={item.images} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          
          <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} handlePageChange={handlePageChange} itemsPerPage={itemsPerPage} totalItems={data.products ? data.products.length : 0}/>
        </div>
      </div>
    </div>
  );
}

export default App;
