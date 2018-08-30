import React from 'react';

const weather=(props)=>{

    
    return(
        <div className='weather__info'>
        {props.city && <p >city: {props.city}</p>}
        {props.country && <p >country: {props.country}</p>}
        {props.temp && <p>temperature: {props.temp}</p>}
        {props.pressure && <p>pressure: {props.pressure}</p>}
        {props.cloud && <p>cloud: {props.cloud}</p>}
        {props.humidity && <p>humidity: {props.humidity}</p>}
        {props.min_temp && <p>min_temp: {props.min_temp}</p>}
        {props.max_temp && <p>max_temp: {props.max_temp}</p>}
        {props.error && <p>error: {props.error}</p>}
        </div>
        );

};

export default weather;