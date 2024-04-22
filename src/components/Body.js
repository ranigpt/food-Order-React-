
import { restaurantList } from "../../constant";
import RestrauntCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";






const Body =()=>{

    const [searchText , setSearchText] = useState(""); 


    const [allRestaurants , setAllRestaurants] = useState([]);
    const [filteredRestaurants , setFilteredRestaurants] = useState([]);


  useEffect(()=>{
    getRestaurants();
  },[])

    async function getRestaurants (){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1394188&lng=72.9223861&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const json = await data.json();
      console.log(json)

      setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    const isOnline = useOnline();

    // const {user,setUser} = useContext(UserContext)

    if(!isOnline){
      return <h1>Offline, please check your internet connection</h1>
    }

    if(!allRestaurants) return null;


    // if (filteredRestaurants?.length===0) return <h1>No Data Found</h1>
    return allRestaurants?.length===0 ?(
      <Shimmer/>
    ):(

        <>

        <div className="search-container p-5 my-5">
            <input type="text" className="search-input border border-black p-5 h-8 focus:bg-slate-100 rounded-md shadow-md"
            value={searchText}
            placeholder="Search here...."

            onChange={(e)=>{
              setSearchText(e.target.value);
            }}
            />
            <button className="search-btn bg-orange-300 rounded-md w-20 text-cyan-50 p-2 font-serif ml-3 hover:bg-slate-300"
            onClick={()=>{
            const data = filterData(searchText,allRestaurants);
            setFilteredRestaurants(data);
            }}>Search</button>

            {/* <input  value={user.name} onChange={(e=>setUser({
              name:e.target.value,
            }))}/> */}
        </div>

        <div className="flex flex-wrap ">
        {filteredRestaurants.map(restaurant => (

          <Link to={"/restaurant/"+restaurant?.info?.id}key={restaurant?.info?.id}>
    <RestrauntCard
         // Make sure to provide a unique key
        name={restaurant?.info?.name}
        cuisines={restaurant?.info?.cuisines}
        cloudinaryImageId={restaurant?.info?.cloudinaryImageId}
        avgRating={restaurant?.info?.avgRating}
    />
    </Link>
))}

        </div>

        </>
    )
}

export default Body;