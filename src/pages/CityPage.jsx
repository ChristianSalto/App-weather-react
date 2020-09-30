import React, { useMemo } from 'react';
import { Grid, LinearProgress } from '@material-ui/core';
import AppFrame from './../components/AppFrame';
import CityInfo from './../components/CityInfo';
import Weather from './../components/Weather';
import WeatherDetails from './../components/WeatherDetails';
import ForecastChart from './../components/ForecastChart';
import Forecast from './../components/Forecast';
import useCityPage from './../hooks/useCityPage';
import useCityList from './../hooks/useCityList';
import { getCityCode } from './../utils/utils';
import { getCountryNameByCountryCode } from './../utils/serviceCities';

const CityPage = ({ allWeather, onSetAllWeather }) => {
  const { city, countryCode, chartData, forecastItemList } = useCityPage();

  // Podremos crear instancias y memorizar el valor con lo que solo se creara
  // una instancia nueva cuando alguno de los valores cambie
  const cities = useMemo(() => [{ city, countryCode }], [city, countryCode]);

  useCityList(cities, allWeather, onSetAllWeather);
  const weather = allWeather[getCityCode(city, countryCode)];

  const state = weather && weather.state;
  const temperature = weather && weather.temperature;

  const country = countryCode && getCountryNameByCountryCode(countryCode);
  const humidity = weather && weather.humidity;
  const wind = weather && weather.wind;

  return (
    <AppFrame>
      <Grid container justify="space-around" direction="column" spacing={2}>
        <Grid container item xs={12} justify="center" alignItems="flex-end">
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid container item xs={12} justify="center">
          <Weather state={state} temperature={temperature} />
          {humidity && wind && (
            <WeatherDetails humidity={humidity} wind={wind} />
          )}
        </Grid>
        <Grid item>
          {!chartData && !forecastItemList && <LinearProgress />}
        </Grid>
        <Grid item xs={12}>
          {chartData && <ForecastChart data={chartData} />}
        </Grid>
        <Grid item xs={12}>
          {forecastItemList && <Forecast forecastItemList={forecastItemList} />}
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default CityPage;
