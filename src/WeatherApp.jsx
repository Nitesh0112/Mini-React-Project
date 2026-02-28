import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        feelsLike: 28.84,
        temp: 29.24,
        tempMin: 29.24,
        tempMax: 29.5,
        humidity: 27,
        weather: "clear sky"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    );
};