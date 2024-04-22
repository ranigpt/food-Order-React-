import React from 'react';
import { useState, useEffect } from 'react';

export const useRestaurant = (id) => {

    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
      getRestaurantInfo();
    }, []);
  
    async function getRestaurantInfo() {
      try {
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1394188&lng=72.9223861&restaurantId="+id+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
        );
  
        const json = await data.json();
        console.log(json);
        setRestaurant(json.data.cards);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    }

    return restaurant;
}
