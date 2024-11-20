import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CityScreen = ({ navigation }) => {
    const [cityName, setCityName] = useState('');

    return (
        <ImageBackground
            source={require('../assets/images/city_background.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

                <View style={styles.inputContainer}>
                    <View style={styles.icon}>
                        <MaterialIcons name="location-city" size={30} color="black" />
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter city"
                        placeholderTextColor="black"
                        onChangeText={(value) => setCityName(value)}
                        value={cityName}
                    />
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonText}>Get Weather</Text>
                </TouchableOpacity>
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
        justifyContent: 'flex-start',
        padding: 20,
    },
    backButton: {
        alignSelf: 'flex-start',
        marginTop: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
    },
    input: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        fontSize: 18,
        backgroundColor: 'white',
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#ff9800',
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
    },
    icon: {
        padding: 8,
    }
});

export default CityScreen;
