import { useState } from 'react';
import './Country.css'

const COuntry = ({country}) => {
    const {name,flags,capital}=country;
    const [visited, setVisited]= useState(false)
    const handleVisited= ()=>{
        setVisited(!visited);
       
       
    }
    return (
        <div className='countryCard' style={{backgroundColor: visited? '#F5F5DC':'white'}}>
        <div className='countryStyle flex flex-col justify-between items-center gap-3'>
            <div>
            <h5 className='font-bold text-3xl mb-3' >{name?.common}</h5>
            
            </div>
         
            <img src={country?.flags?.png} alt="" className='border-2 w-[350px] h-[200px]' />
            <p className='text-lg'>{country?.capital}</p>
            <button className='btn text-white' id='button' onClick={handleVisited} style={{backgroundColor: visited? 'orange' : 'gray'}}>Visited</button>
            {visited? 'I have visited' :'I want to visit'}
        </div>
        </div>
    );
};

export default COuntry;