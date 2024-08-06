document.getElementById('get-weather-btn').addEventListener('click', function() {
    const location = document.getElementById('location-input').value;
    const apiKey = '5c4e4017fd0926754480e3f7e57fba2b' // Replace with your actual API key

    if (location) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.cod === 200) {
                    const locationName = data.name;
                    const temperature = data.main.temp;
                    const description = data.weather[0].description;

                    document.getElementById('location-name').innerText = locationName;
                    document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
                    document.getElementById('description').innerText = description;
                } else {
                    alert(`Error: ${data.message}`);
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('Error fetching weather data. Please try again later.');
            });
    } else {
        alert('Please enter a location.');
    }
});
