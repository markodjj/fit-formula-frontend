import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchFilteredFoods } from '../../utils/foodService';


import "./InfiniteScroll.scss";

const InfiniteScroll = () => {
    const { type } = useParams();
    const [foods, setFoods] = useState([]);
    const [key, setKey] = useState(0); // Key to force re-render

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [searchQuery, setSearchQuery] = useState(''); // State for search input

    useEffect(() => {
        const loadFoods = async () => {
            const data = await fetchFilteredFoods(type);
            setFoods(data);
            setKey(prevKey => prevKey + 1); // Change key to reset animation
        };
        loadFoods();
    }, [type]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = foods.slice(indexOfFirstItem, indexOfLastItem);

    return (
        
        <div key={key} className='infinite-scroll'> {/* Key forces re-render */}
            <div className="wrapper">
                {currentItems.map((item, index) => (
                    <div key={index} className={`item item${index + 1}`}>
                        <div className='card-content'>
                            <img 
                                src={`/assets/${item.name}.jpg`} 
                                alt={item.name} 
                                className='bg-image' 
                                loading="lazy"
                            />
                            <div className="content">
                                <h1><Link to={`/article/${encodeURIComponent(item.name)}`} >{item.name}</Link></h1>
                                <button>Saznaj Više</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default InfiniteScroll;
