import * as Location from 'expo-location';

class LocationService {
    constructor() {
        this.latitude = null;
        this.longitude = null;
    }

    async getCurrentLocation() {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            const location = await Location.getCurrentPositionAsync({});
            this.latitude = location.coords.latitude;
            this.longitude = location.coords.longitude;

            console.log('Latitude:', this.latitude, 'Longitude:', this.longitude);
        } catch (e) {
            console.error('Error getting location:', e);
        }
    }
}

export default LocationService;
