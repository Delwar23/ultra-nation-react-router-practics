
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ShowDetails = () => {

    const [details, setDetails] = useState([])
    const { properties } = useParams();

    const url = `https://restcountries.com/v2/name/${properties}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [url]);

    const detailsStyle =

    {
        border: '2px solid grey',
        textAlign: 'center',
        padding: '5px',
        margin: '50px',
        borderRadius: '10px',
        backgroundColor: 'grey'

    }
    const imgStyle = {
        height: '70px',
        width: '150px'

    }


    return (
        <div >
            {

                details.length > 0 && <div style={detailsStyle}>
                    <h1>Conutry : {details[0].name}</h1>
                    <h1> <img style={imgStyle} src={details[0].flag} alt=""></img></h1>
                    <h3>Capital : {details[0].capital}</h3>
                    <h3>Region : {details[0].region}</h3>
                    <h3>Population : {details[0].population}</h3>
                    <Link to="/"><button>Home</button></Link>


                </div>
            }

        </div>

    );
};

export default ShowDetails;

