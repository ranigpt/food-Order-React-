import { IMG_CND } from "../../constant";





const FoodItem =(props)=>{
    return(

        <div className="w-56 border-b-slate-700 rounded-sm h-auto p-2 m-5 shadow-md justify-center">
            {console.log(props?.card?.info?.name)}
        <img src={IMG_CND+props?.card?.info?.imageId}/>
        <h2 className="font-semibold ">{props?.card?.info?.name}</h2>
       
       
<h4>{props?.card?.info?.description
 }</h4>
         <h4>{props?.card?.info?.price/100} Rs</h4>
      
        </div>
    )
}


export default FoodItem ;