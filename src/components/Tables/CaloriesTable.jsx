import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { fetchFilteredFoods } from "../../utils/foodService";
import "./CaloriesTable.scss";
import "../Articles/InfiniteScroll.scss";

function CaloriesTable() {
  const [data, setData] = useState([]);
  const { type } = useParams();
  const [foods, setFoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/api/food');
  //     setFoods(response.data);
  //   } catch (error) {
  //     console.error('Error fetching food data: ', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [type]);

  // const filterFoodsByType = (type) => {
  //   return foods.filter((food) => food.type === type);
  // };

  // const filteredFoods = filterFoodsByType(type);

  // // Filter the foods by search query
  // const searchedFoods = filteredFoods.filter((food) =>
  //   food.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  useEffect(() => {
    const loadFoods = async () => {
      const data = await fetchFilteredFoods(type, searchQuery);
      setFoods(data);
    };
    loadFoods();
  }, [type, searchQuery]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = foods.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(foods.length / itemsPerPage);

  return (
    <div className="calories-table">
      <div className="container">
        <h2>Tabela Kalorija</h2>

        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pretraga namirnica..."
            className=""
          />
        </div>

        {/* Scrollable container */}
        <div className="table-container">
          <table>
            <thead>
              <tr className="head-row">
                <th>Namirnica (100 g)</th>
                <th>kCal</th>
                <th>Proteini</th>
                <th>Ugljeni Hidrati</th>
                <th>Masti</th>
                <th>Vrsta</th>
                <th>Makronutrijent</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index} className="table-row">
                  <td>
                    <Link to={`/article/${encodeURIComponent(item.name)}`}>
                      {item.name}
                    </Link>
                  </td>
                  <td>{item.calories}</td>
                  <td>{item.protein}</td>
                  <td>{item.carbohydrates}</td>
                  <td>{item.fats}</td>
                  <td>{item.type}</td>
                  <td>{item.macronutrient}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="pagination-container">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CaloriesTable;
