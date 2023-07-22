import { useEffect, useState } from 'react';
import axios from 'axios';

const RestaurantDetails = ({ match }) => {
    const [restaurant, setRestaurant] = useState(null)

    useEffect(() => {
        const restaurantId = match.params.id
        fetchRestaurant(restaurantId)
    }, [match.params.id])

    const fetchRestaurant = (restaurantId) => {
        const apiEndpoint = `API_ENDPOINT/${restaurantId}`

        return axios
            .get(apiEndpoint)
            .then((response) => {
                setRestaurant(response.data)
            })
            .catch((error) => {
                console.error('Error fetching restaurant details:', error)
            })
    }

    if (!restaurant) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h1>{restaurant.restaurantname}</h1>
            <p>City: {restaurant.city}</p>
            <p>Postcode: {restaurant.postcode}</p>
            <p>Opening Time: {restaurant.openningtime}</p>
            <p>Price: {restaurant.cuisine.price}</p>
            <p>Tags: {restaurant.tags.join(', ')}</p>
            <div>Comments: {/* Display comments here */}</div>
            <div>Map: {/* Display the map here */}</div>
    </div>
  );
};

export default RestaurantDetails;


// need to add comments, map, api endpoint
