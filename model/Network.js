class Network {
    constructor(url) {
        this.url = url;
    }

    async getData() {
        try {
            const response = await fetch(this.url);

            if (response.ok) {
                const data = await response.json();  
                return data;
            } else {
                console.log('Error: ' + response.status);
            }
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    }



};

export default Network;