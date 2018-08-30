import React, { Component } from 'react';
import Text from './text';
import Form from './form';
import Weather from './weather'
import './App.css';
const API_KEY='3c3b934bd611c9cbc7945ff9bd725b9a';


class App extends Component {
  state={
    temperature:undefined,
    pressure:undefined,
    humidity:undefined,
    city:undefined,
    country:undefined,
    min_temp:undefined,
    max_temp:undefined,
    clouds:undefined,
    error:undefined

  }

 getWeather= async (e)=> {
  e.preventDefault();
  const city= e.target.elements.city.value;
  const country= e.target.elements.country.value;
  const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
  const data = await api_call.json();
  console.log(data);
  if(data.message === 'city not found' && city && country ){
    this.setState({
     error:"city not found" 
    })
    
  }
  else if(city && country) {
    this.setState({
      temperature:data.main.temp,
    pressure:data.main.pressure,
    humidity:data.main.humidity,
    city:data.name,
    country:data.sys.country,
    min_temp:data.main.temp_min,
    max_temp:data.main.temp_max,
    clouds:data.weather[0].description,
    error:''
});
  }
  else {
    this.setState({
      temperature:undefined,
    pressure:undefined,
    humidity:undefined,
    city:undefined,
    country:undefined,
    min_temp:undefined,
    max_temp:undefined,
    clouds:undefined,
    error: "Please enter the values."
    });
  }


 };

  render() {
    return (
      <div className="App">
      <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Text />
                  </div>
                  
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>
      <Weather 
       city={this.state.city}
       country={this.state.country}
       temp={this.state.temperature}
       pressure={this.state.pressure}
       humidity={this.state.humidity}
       cloud={this.state.clouds}
       min_temp={this.state.min_temp}
       max_temp={this.state.max_temp}
       error={this.state.error}/>
      </div>
      </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
