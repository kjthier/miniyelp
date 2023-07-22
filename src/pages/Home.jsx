import {useEffect, useState } from 'react';
import axios from 'axios';

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

    // call fetch function based on user input
    // const handleSearch = () => {
    //     const tagInputValue = document.getElementById('tagInput').value
    //     const locationInputValue = document.getElementById('locationInput').value

    //     fetchRestaurants(tagInputValue, locationInputValue)
    //         .then((restaurants) => {
    //             displayRestaurants(restaurants)
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching data:', error)
    //         })
    // }
    
    // display list of restaurants on home page
    // const displayRestaurants = (restaurants) => {
    //     const restaurantList = document.getElementById('restaurantList')

    //     // clear previous results
    //     restaurantList.innerHTML = ''

    //     //display new list of restaurants
    //     restaurants.forEach((restaurant) => {
    //         const restaurantItem = document.createElement('li')
    //         restaurantItem.innerHTML = `${restaurant.name} - Type: ${restaurant.type}, Location: ${restaurant.city}`
    //         restaurantList.appendChild(restaurantItem)
    //     })
    // }
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
            <ul id='restaurantList'>{
                data.map((item, index) => {
                    return (
                        <li key={index} >{item.restaurantname}</li>
                    )

                })} 
            </ul>
        </>
    
    ) 
}

export default Home;



// replace apiEndpoint with our API endpoint
// display 'type'??

