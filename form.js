import React from 'react';


const form =(props)=>{
    return(
        <div className='form'>
            <form onSubmit={props.getWeather}>
                <input className='in' name="country" type="text" placeholder="country" />
                <input className='in' name="city" type="text" placeholder="city" />
                <button >submit</button>
            </form>
        </div>
    )
}
export default form;