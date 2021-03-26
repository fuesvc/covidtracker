import React, { useEffect, useState } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import GlobalStyle from './components/styles/global-style';
import TopNav from './components/ui/TopNav';
import Header from './components/ui/layout/Header';
import CaseStatsCard from './components/ui/layout/CaseStatsCard';

function App() {
  const [country, setCountry] = useState('worldwide');
  const [countries, setCountries] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country: any) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          console.log(data);
          let sortedData = data.sort((a: any, b: any) => {
            if (a.cases > b.cases) {
              return -1;
            }
            if (a.cases < b.cases) {
              return 1;
            }
            return 0;
          });;
          setCountries(countries);
          setTableData(sortedData);
        })
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (e: any) => {
    // const countryCode = e.target.value;
    setCountry(e.target.value);
  }

  return (
    <div className="rootApp">
      <GlobalStyle />
      <TopNav />
      <Grid container>
        <Grid item md={6}>
          <Header country={country} countries={countries} setCountry={onCountryChange} />
        </Grid>
        <Grid item>
          <CaseStatsCard countries={tableData} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
