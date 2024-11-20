import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { getWeatherIcon, getMessage, getLocationWeather } from "../components/WeatherModel"
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import Style from '../components/Style';

const LocationScreen = ({ navigation,route }) => {
    const { locationWeather } = route.params;
    const [temperature, setTemperature] = useState(0);
    const [weatherIcon, setWeatherIcon] = useState('');
    const [weatherMessage, setWeatherMessage] = useState('');
    const [cityName, setCityName] = useState('');

    useEffect(() => {
        // updateUI(locationWeather);
        console.log(locationWeather)
    }, [locationWeather]);

    // const updateUI = (weatherData) => {
    //     if (!weatherData) {
    //         setTemperature(0);
    //         setWeatherIcon('Error');
    //         setWeatherMessage('Unable to get weather data');
    //         setCityName('');
    //         return;
    //     }
    //     const temp = weatherData.main.temp;
    //     const condition = weatherData.weather[0].id;
    //     setTemperature(Math.round(temp));
    //     setWeatherIcon(getWeatherIcon(condition));
    //     setWeatherMessage(getMessage(temp));
    //     setCityName(weatherData.name);
    // };

    // const handleRefresh = async () => {
    //     const refreshedWeather = await getLocationWeather(latitude, longitude);
    //     updateUI(refreshedWeather);
    // };

    return (
        <ImageBackground
            source={require('../assets/images/location_background.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <View style={styles.row}>
                    <TouchableOpacity >
                        <FontAwesome5 name="location-arrow" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CityScreen')}>
                        <MaterialIcons name="location-city" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.weatherContainer}>
                    <Text style={Style.tmpTxt}>{temperature}°</Text>
                    <Text style={Style.conditionTxt}>{weatherIcon}</Text>
                </View>
                <Text style={Style.msgTxt}>
                    {weatherMessage} in {cityName}
                </Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        fontSize: 50,
        color: 'white',
    },
    weatherContainer: {
        alignItems: 'center',
    },
});

export default LocationScreen;
