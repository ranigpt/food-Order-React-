import React from 'react';
import  {Outlet} from "react-router-dom";
import Profile from './Profile';

const About = () => {
  return (
    <div>
        <h1 className='m-5 p-2 flex justify-center text-2xl font-semibold font-mono'>About 
            us page
        </h1>
  <p className='m-4 p-2 font-serif text-2xl'>Introducing our new and innovative food ordering app, designed to revolutionize the way you experience dining. Say goodbye to long waits and busy phone lines, and hello to convenience at your fingertips. With our app, you have access to a vast array of culinary delights from the comfort of your own home or on the go.

Browse through a curated selection of restaurants, ranging from local favorites to popular chains, all within easy reach. Craving sushi, pizza, or perhaps something a bit more exotic? Our app has you covered with diverse cuisines to satisfy every palate and craving.</p>
        <Profile name ={"Rani"}/>
    </div>
  )
}

export default About