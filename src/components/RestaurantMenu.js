
import { useParams } from "react-router-dom";
import { IMG_CND } from "../../constant";
import Shimmer from "./Shimmer";
import { useRestaurant } from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestrauntMenu = () => {
  const { id } = useParams();


  const restaurant = useRestaurant(id)

 const dispatch = useDispatch();
  

  // const handleAddItem = ()=>{
  //   dispatch(addItem(""))
  // }
  

  const addFoodItem=(item)=>{
    dispatch(addItem(item))
  }
  
  
  
  return (!restaurant) ? <Shimmer/> :(
    <div>
      <div className=" flex justify-center items-center">
      <div className="w-72 h-auto border border-black shadow-sm  block m-2 p-4 rounded-sm">
        <h1>Restaurant id: {id}</h1>
        <img
          src={
            IMG_CND + restaurant[2]?.card?.card?.info?.cloudinaryImageId
          }
          className="w-52 "
          alt=""
        />
        <h1>{restaurant?.name}</h1>
        <h2>Cost for two: {restaurant[2]?.card?.card?.info?.costForTwo}</h2>
        <h3>Average Rating: {restaurant[2]?.card?.card?.info?.avgRating}</h3>
        {restaurant[2]?.card?.card?.info?.cuisines && (
          <h4>{restaurant[2]?.card?.card?.info?.cuisines.join(", ")}</h4>
        )}
        <h3>City: {restaurant[2]?.card?.card?.info?.city}</h3>
        {/* <button className="p-2 m-5 bg-green-300" onClick={()=>handleAddItem()}>Add Item</button> */}
      </div>
      </div>
      
     
       
       
        <div className="w-full h-auto shadow-sm m-5 flex flex-wrap justify-start gap-1">
          {(
            restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
              ?.card?.itemCards || []
          ).map((item) => (
            <div className="flex flex-col items-center m-1 p-4 border border-black rounded-md gap-2" key={item?.card?.info?.id}>
           
              <img src={IMG_CND + item?.card?.info?.imageId} alt="" className="w-52" />
              <span>{item?.card?.info?.name}</span>
              <button className="p-2 m-5 bg-green-200 rounded-sm shadow-md" onClick={()=>addFoodItem(item)}>Add</button>
            </div>
          ))}
        
        </div>
      </div>
   
  );
};

export default RestrauntMenu;
