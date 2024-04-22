import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='mb-96 '>
        <h1 className='font-semibold flex justify-center items-center text-3xl'>Contact us</h1>
        <h3 className='text-lg text-black m-2'>Here u can visit and Contact us for any Queries !!:-</h3>
        <span className='border border-black shadow-md m-3 w-24 p-3 mt-5'>
          <Link to="https://github.com/ranigpt">Git Profile</Link>
        </span>

        <span className='border border-black shadow-md m-2 w-28 p-3'>
          <Link to="www.linkedin.com/in/rani-gupta-6a0584256">Linkedin Profile</Link>
        </span>

    </div>
  )
}

export default Contact