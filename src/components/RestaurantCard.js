import { IMG_CND } from "../../constant";





const RestrauntCard =({name,cuisines,cloudinaryImageId,avgRating})=>{
    return(

        <div className="w-56 border-b-slate-700 rounded-sm h-auto p-2 m-5 shadow-md justify-center">
        <img src={IMG_CND+cloudinaryImageId}/>
        <h2 className="font-semibold ">{name}</h2>
        {cuisines && <h4>{cuisines.join(" , ")}</h4>} 
         <h4>{avgRating} Rating</h4>
      
        </div>
    )
}


export default RestrauntCard;