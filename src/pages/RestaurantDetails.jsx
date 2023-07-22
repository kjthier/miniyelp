import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    // Fetch the specific restaurant data using the 'id' from the API
    fetch(`https://wdpt14-mern-app-server.vercel.app/restaurants/${id}`)
      .then(response => response.json())
      .then(data => setRestaurant(data));
  }, [id]);

  if (!restaurant) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{restaurant.restaurantname}</h1>
      <p>City: {restaurant.city}</p>
      <p>Postcode: {restaurant.postcode}</p>
      <p>Opening Time: {restaurant.openningtime}</p>
    </div>
  );
};

export default RestaurantDetails;
