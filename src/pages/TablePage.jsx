import React, { useRef, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchAllFoods } from "../utils/foodService";
import InfiniteScroll from "../components/Articles/InfiniteScroll";
import CaloriesTable from "../components/Tables/CaloriesTable";

import "./TablePage.scss";

const TablePage = () => {
  const { type } = useParams();
  const [foods, setFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadFoods = async () => {
      const data = await fetchAllFoods();
      setFoods(data);
    };
    loadFoods();
  }, []);
  const filteredFoods = foods.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="table-langing-page">
      {type && (
        <div className="table-page">
          <CaloriesTable name={type} />
          {/* <InfiniteScroll /> */}
        </div>
      )}

      <div className="container">
        <div className="article-info">
          <div className="text-container">
            <h1> Pronađite Svoje Omiljene Namirnice!</h1>
            <p>
              Dobrodošli u našu bazu namirnica! Ovdje možete brzo i lako
              pretražiti različite vrste namirnica koristeći našu pretragu. Samo
              unesite naziv namirnice u polje za pretragu, a lista ispod će se
              automatski filtrirati kako biste lakše pronašli ono što tražite.
            </p>
            <p>
              Klikom na određenu namirnicu, bićete preusmereni na stranicu sa
              detaljnim informacijama o njoj – uključujući nutritivne vrednosti,
              savete za upotrebu i zanimljive činjenice.
            </p>
            <p>
              Bilo da planirate obrok, istražujete nove sastojke ili samo želite
              da saznate više o svojim omiljenim namirnicama, ovde ste na pravom
              mestu. Počnite pretragu odmah!
            </p>
            <div>
              <img src="../public/assets/plan-ad-wide.png" alt="" />
            </div>
          </div>
          <div className="search-list">
            <div className="search-container">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pretraga namirnica..."
              />
            </div>
            <ul>
              {filteredFoods.map((item, index) => (
                <li key={index}>
                  <label>
                    <Link to={`/tablica/${item.name}`}>{item.name}</Link>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <CaloriesTable />
      <InfiniteScroll /> */}
    </div>
  );
};

export default TablePage;
