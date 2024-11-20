const apiKey = '01739ca49de4a0723c876865bb73416d'
const openWeatherMapURL = 'https://api.openweathermap.org/data/2.5/weather';

export const getCityWeather = async (cityName) => {
    try {
        const response = await fetch(
            `${openWeatherMapURL}?q=${cityName}&appid=${apiKey}&units=metric`
        );
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.error('Error fetching city weather:', error);
        return null;
    }
};

export const getLocationWeather = async (latitude, longitude) => {
    try {
        const response = await fetch(
            `${openWeatherMapURL}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        );
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.error('Error fetching location weather:', error);
        return null;
    }
};

export const getWeatherIcon = (condition) => {
    if (condition < 300) return '🌩'; 
    if (condition < 400) return '🌧'; 
    if (condition < 600) return '☔️'; 
    if (condition < 700) return '☃️'; 
    if (condition < 800) return '🌫'; 
    if (condition === 800) return '☀️'; 
    if (condition <= 804) return '☁️'; 
    return '🤷‍'; 
};

export const getMessage = (temp) => {
    if (temp > 25) return "It's 🍦 time";
    if (temp > 20) return 'Time for shorts and 👕';
    if (temp < 10) return "You'll need 🧣 and 🧤";
    return 'Bring a 🧥 just in case';
};
