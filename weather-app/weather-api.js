const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const APP_ID = "d3b21d6d398de81ad9f40d6e66b7cee6"

class WeatherAPI {

  constructor(userInput){

    this.userInput = userInput;
    this.weatherAPIURL = new URL(WEATHER_API_BASE_URL);
  }


  buildURL(){

    this.weatherAPIURL.searchParams.append("units", "metric");
    this.weatherAPIURL.searchParams.append("q", this.userInput);
    this.weatherAPIURL.searchParams.append("appid", APP_ID);

    console.log(`Final URL is ${this.weatherAPIURL}`);
  }


  async invokeAPI(){
    const responseobj=await fetch(this.weatherAPIURL.toString());
    const jsonResponse=await responseobj.json();
    return jsonResponse; 
  }

}

export {WeatherAPI}