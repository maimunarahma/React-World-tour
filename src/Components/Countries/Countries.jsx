import { useEffect } from "react";
import { useState } from "react";
import COuntry from "../Country/COuntry";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] =useState([])
    useEffect(
        ()=>{
            fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => setCountries(data))
        }
        ,[])
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 countriesStyle ">
            <div>
            <p className="text-4xl font-semibold"> Total Country: {countries.length} </p>
            <h5>Visited Countries</h5>
            <ul>
                
            </ul>
            </div>
          
           {countries.map(country=><COuntry key={country.cca3} country={country}></COuntry>

           )}
        </div>
    );
};

export default Countries;