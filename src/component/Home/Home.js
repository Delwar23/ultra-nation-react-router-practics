import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);
   

    return (
        
        <div>
            <h1>This Is Home </h1>
            {
                countries.map(country => <Country country={country} ></Country>)
            }
            
        </div>
    );
};

export default Home;