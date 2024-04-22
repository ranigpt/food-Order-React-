import { render } from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";


test("Logo should Load on rendering header",()=>{
    //Load Header
    const header =render(
    
    <StaticRouter>
    
    <Provider store={store}><Header/></Provider>
    </StaticRouter>
    
    
    );
  console.log(header);
    //check if logo is loaded

    const logo = header.getAllByTestId("logo")
    console.log(logo[0]);

    // expect(logo[0].src).toBe("http://localhost/https://pbs.twimg.com/profile_images/1453624303740620801/W3iD8Klp_400x400.jpg" )
   

    expect(logo[0].src).toBe("https://pbs.twimg.com/profile_images/1453624303740620801/W3iD8Klp_400x400.jpg");


});


test("cart should have zero items",()=>{
    //Load Header
    const header =render(
    
    <StaticRouter>
    
    <Provider store={store}><Header/></Provider>
    </StaticRouter>
    
    
    );
  console.log(header);
    //check if logo is loaded

    const cart = header.getByTestId("cart")
    console.log(cart);

    // expect(logo[0].src).toBe("http://localhost/https://pbs.twimg.com/profile_images/1453624303740620801/W3iD8Klp_400x400.jpg" )
   

    expect(cart.innerHTML).toBe("cart 0 items");


});