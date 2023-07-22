import {useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    useEffect(() => {
        document.getElementById('searchButton').addEventListener('click', handleSearch)
    })
      
    // fetch restaurants from API
    const fetchRestaurants = (tag, location) => {
        const apiEndpoint = `API_ENDPOINT?tag=${encodeURIComponent(tag)}&location=${encodeURIComponent(location)}`

        return axios.get(apiEndpoint)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
            })
    }

    // call fetch function based on user input
    const handleSearch = () => {
        const tagInputValue = document.getElementById('tagInput').value
        const locationInputValue = document.getElementById('locationInput').value

        fetchRestaurants(tagInputValue, locationInputValue)
            .then((restaurants) => {
                displayRestaurants(restaurants)
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
            })
    }
    
    // display list of restaurants on home page
    const displayRestaurants = (restaurants) => {
        const restaurantList = document.getElementById('restaurantList')

        // clear previous results
        restaurantList.innerHTML = ''

        //display new list of restaurants
        restaurants.forEach((restaurant) => {
            const restaurantItem = document.createElement('li')
            restaurantItem.innerHTML = `${restaurant.name} - Type: ${restaurant.type}, Location: ${restaurant.city}`
            restaurantList.appendChild(restaurantItem)
        })
    }

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
            <ul id='restaurantList'></ul>
        </>
    ) 
}

export default Home;



// replace apiEndpoint with our API endpoint
// display 'type'??

