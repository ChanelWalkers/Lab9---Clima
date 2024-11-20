import { StyleSheet, View, Text } from "react-native";
import { getLocationWeather } from "../components/WeatherModel";
import { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";

function LoadingScreen({ navigation }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getWeatherData = async () => {
            try {
                const weatherData = await getLocationWeather();
                navigation.navigate('Location', { locationWeather: weatherData });
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getWeatherData();
    }, [navigation]);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="white" />
                <Text style={styles.loadingText}>Loading weather data...</Text>
            </View>
        );
    }
    return null;
}


export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242323',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingText: {
        marginTop: 20,
        color: 'white',
        fontSize: 16,
    },
});