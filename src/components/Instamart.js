import React, { useState } from 'react'



 const Section= ({title , desc , isVisible , setIsVisible}) => {

  return (
    <div className='border border-black p-2'>
      <h3 className='text-2xl font-semibold'>{title}</h3>

      {
        isVisible ?(<button onClick={()=> setIsVisible(false)} className=' cursor-pointer underline'>Hide</button>):(  <button onClick={()=> setIsVisible(true)} className=' cursor-pointer underline'>Show</button>
        )
      }
     {isVisible && <p>{desc}</p>}


    
      
    </div>
  )
}


const Instamart = () => {
 const [visibleSection , setVisbleSection] = useState("about")
  return (
    <div className='m-3'>
<h1 className='text-3xl p-4 m-4'>Instamart</h1>
<Section title={"About Instamart"} desc={"Instamart is an online grocery delivery service provided by Instacart. a company that allows customers to order groceries and have them delivered to their doorstep. Instamart operates similarly to other grocery delivery services, offering a convenient way for customers to shop for groceries from the comfort of their homes or workplaces"}
isVisible={visibleSection ==="about"}
setIsVisible={()=>setVisbleSection("about")}



/>


<Section title={"Services"} desc={"Online Platform: Instamart operates through a website and mobile app, where customers can browse through a wide selection of grocery items, including fresh produce, pantry staples, household essentials, and more.Product Selection: Instamart partners with various grocery stores and retailers to offer a diverse range of products. Customers can choose from popular brands as well as specialty items based on their preferences and dietary needs.Delivery Options: Instamart provides flexible delivery options, allowing customers to schedule deliveries for a convenient time slot that fits their schedule. Depending on the location and availability, customers may have the option for same-day delivery or scheduled delivery for a later date."} 
isVisible={visibleSection ==="Services"}
setIsVisible={()=>setVisbleSection("Services")}
/>


<Section title={"Career"} desc={" I can provide some general insights into potential career opportunities within Instacart, the parent company of Instamart, and the broader online grocery delivery industry.Technology and Engineering: Companies like Instacart rely heavily on technology to power their platforms, manage orders, optimize delivery routes, and enhance the overall user experience. Career opportunities in this area may include software engineering, data science, product management, user experience (UX) design, and information technology (IT) roles.Operations and Logistics: Instamart and similar online grocery delivery services require efficient operations and logistics management to ensure timely and accurate delivery of orders. Careers in operations management, supply chain logistics, fleet management, and warehouse operations could be available."}
isVisible={visibleSection ==="Career"}
setIsVisible={()=>setVisbleSection("Career")}





/>

    </div>
   
  )
}

export default Instamart