import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name,region,capital}=props.country;

const divStyle=
{
    border:'1px solid grey',
    margin:'5px',
    textAlign:'center',
    padding:'5px'
}
    return (
        <div style={divStyle}>
            <h1>{name}</h1>
            <h3>{capital}</h3>
            <h3>{region}</h3>
        
            <Link to={`/ShowDetails/${name}`}>About {name} </Link>
            <br></br>


        </div>
    );
};

export default Country;