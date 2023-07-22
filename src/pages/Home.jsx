import {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // Declare a state variable to hold the fetched data
    const [data, setData] = useState([]);
    // Declare a state variable to track loading state
    
    useEffect(() => {
        // Function to fetch data from the API
        fetch('https://wdpt14-mern-app-server.vercel.app/restaurants/listall')
        .then(response => response.json())
        .then(list => setData(list.listAllRestaurants));
        console.log(data);
      }, []);

      console.log(data);

    
    console.log (data.listAllRestaurants)
    return (
        <>
            <header>
                <div className='logo-container'>
                    <img src="/yelplogo.png" alt="Yelp logo" />
                </div>
                <div className='search-container'>
                    <input 
                        className='tag-input' 
                        type="text" id="tagInput" 
                        placeholder="Find burgers, barbers, spas, handymen..." 
                    />
                    <input 
                        className='location-input' 
                        type="text" id="locationInput" 
                        placeholder="Near..."
                    />
                    <button id="searchButton">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </header>
            <ul id='restaurantList'>
                {data.map((item, index) => (
                    <li key={index}>
                        <Link to={`/restaurants/${item.id}`}>
                        {item.restaurantname}</Link>, {item.city} | Open {item.openningtime}
                    </li>
                ))}
             </ul>
        </>
    ) 
}

export default Home;



// replace apiEndpoint with our API endpoint
// display 'type'??

