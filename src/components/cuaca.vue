<template>
  <div class="weather-widget">
    <h2 class="widget-title">Cuaca</h2>
    <div class="location-input">
      <label for="location">Masukkan lokasi :</label>
      <input type="text" id="location" v-model="location" />
      <button @click="fetchWeatherData" class="search-button">Cari</button>
    </div>
    <div v-if="weatherData" class="weather-data">
      <p class="location">Lokasi: {{ weatherData.name }}</p>
      <p v-if="weatherData.main" class="temperature">
        Suhu : {{ weatherData.main.temp }}°C
      </p>
      <p v-if="weatherData.weather" class="description">
        Keterangan : {{ weatherData.weather[0].description }}
      </p>
    </div>
    <p v-else>Loading ...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: '',
      weatherData: null
    };
  },
  methods: {
    async fetchWeatherData() {
      try {
        const apiKey = 'b7bfca7b27a3485144fea086c50d09dc';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        this.weatherData = data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  }
};
</script>

<style scoped>
.weather-widget {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  background-color: #f7f6b7;
}

.widget-title {
  margin-top: 0;
  color: #333;
}

.location-input {
  margin-bottom: 10px;
}

.search-button {
  background-color: pink;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.weather-data {
  margin-top: 10px;
}

.location {
  font-size: 18px;
  font-weight: bold;
}

.temperature {
  font-size: 24px;
  color: #ff5722;
}

.description {
  font-size: 16px;
}
</style>
