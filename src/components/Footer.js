import { Link } from "react-router-dom";



const Footer =()=>{
    return(
        <div className=" grid grid-cols-3 w-full h-auto bg-black text-white">
            <div className="m-2"> 
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaDuD72PpQiAGi0GTDo2Kw6-CIWwXBhGN_J3aHC3wiaA&s" alt="logo" className="w-20  h-20 object-cover rounded-full shadow-md "/>
            <h4 className="font-mono"> Khana Khajana</h4>
            <h6>supporthelp@gmail.com</h6></div>
           <div className="mt-5 ">
            <h1 className="font-serif">Comapnay</h1>
            <h3><Link to ="./about">About</Link></h3>
            <h4><Link to ="./contact">Contact us</Link></h4>
            <h4>help</h4>
            </div>

            <div className="mt-5 ">
                <h1 className="font-serif">Restaurants</h1>
                <h2><Link to="./restaurant/41969">Pizza Hut</Link></h2>
                <h2>Cake</h2>
                <h2><Link to="./restaurant/31803">McDonald's</Link></h2>
            </div>
        </div>
    )
}

export default Footer;