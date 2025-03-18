import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchAllFoods } from '../../utils/foodService';
// import '../components/Tables/Table.scss';
import './Compare.scss';

import SearchList from './SearchList';

const Compare = () => {
    const [foods, setFoods] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [compareList, setCompareList] = useState([]);
    const [sortBy, setSortBy] = useState('calories');

    const addToComapreList = (item) => {
        if (compareList.length < 6 && !compareList.some(i => i.name === item.name)) {
            setCompareList(prevList => [...prevList, item]);
        }
    };

    const removeFromCompareList = (item) => {
        setCompareList(prevList => prevList.filter(i => i.name !== item.name));
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);  // Update the sortBy state when user selects a sort option
    };

    useEffect(() => {
        const loadFoods = async () => {
            const data = await fetchAllFoods();
            setFoods(data);
        };
        loadFoods();
    }, []); // Add empty dependency array to prevent infinite re-renders

    const filteredFoods = foods.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedCompareList = [...compareList].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
    });

    return (
        <div className='container-page'>
            <div className='table-container'>
                <div className='list-of-all'>
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
                                
                                <label>{item.name}</label>
                                <button  onClick={() => addToComapreList(item)}>+</button>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* <SearchList /> */}
                <div className='compare-table-container'>
                   
                    <div>
                        <table>
                            <thead>
                                <tr className="head-row">
                                    <th>Nutrijent</th>
                                    {compareList.map((item, index) => (
                                        <th key={index}>
                                            <Link to={`/article/${encodeURIComponent(item.name)}`}>
                                                {item.name}
                                            </Link>
                                            <button onClick={() => removeFromCompareList(item)}>X</button>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {/* {["calories", "protein", "carbohydrates", "fats", "type", "macronutrient"].map((key, index) => (
                                    <tr key={index} className="table-row">
                                        <td>{key === "calories" ? "kCal" : key.charAt(0).toUpperCase() + key.slice(1)}</td>
                                        {compareList.map((item, idx) => (
                                            <td key={idx}>{item[key]}</td>
                                        ))}
                                    </tr>
                                ))} */}
                                 {["calories", "protein", "carbohydrates", "fats", "type", "macronutrient"].map((key, index) => (
                                <tr key={index} className="table-row">
                                    <td>{key === "calories" ? "kCal" : key.charAt(0).toUpperCase() + key.slice(1)}</td>
                                    {sortedCompareList.map((item, idx) => (
                                        <td key={idx} className={key === sortBy ? 'sorted' : ''}>{item[key]}</td>
                                    ))}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="sort-options">
                        <label>Sort by: </label>
                        <select id="sort-by" value={sortBy} onChange={handleSortChange}>
                            {["calories", "protein", "carbohydrates", "fats", "macronutrient"].map((key) => (
                                <option key={key} value={key}>
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <footer>
                asdasd
            </footer>
        </div>
    );
};

export default Compare;
