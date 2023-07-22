import axios from 'axios';

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
document.getElementById('searchButton').addEventListener('click', () => {
    const tagInputValue = document.getElementById('tagInput').value
    const locationInputValue = document.getElementById('locationInput').value

    fetchRestaurants(tagInputValue, locationInputValue)
        .then((restaurants) => {
            displayRestaurants(restaurants)
        })
        .catch((error) => {
            console.error('Error fetching data:', error)
        })
});

// display list of restaurants on home page
const displayRestaurants = (restaurants) => {
    const restaurantList = document.getElementById('restaurantList')

    // clear previous results
    restaurantList.innerHTML = ''

    //display new list of restaurants
    restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement('li')
        restaurantItem.innerHTML = `${restaurant.name} - Type: ${restaurant.type}, Location: ${restaurant.location}`
        restaurantList.appendChild(restaurantItem)
    })
}



// replace apiEndpoint with our API endpoint

