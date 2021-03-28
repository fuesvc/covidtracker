import React, { useEffect, useState } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import GlobalStyle from './components/styles/global-style';
import TopNav from './components/ui/TopNav';
import Header from './components/ui/layout/Header';
import CaseStatsCard from './components/ui/layout/CaseStatsCard';
import CaseLineGraph from './components/ui/layout/CaseLineGraph';
import InfoBox from './components/ui/forms/InfoBox';
import { prettyPrintStat } from './util/util';
import MapB from './components/ui/MapB';

function App() {
  const [country, setCountry] = useState('worldwide');
  const [countryName, setCountryName] = useState('Worldwide');
  const [countryInfo, setCountryInfo] = useState({
    todayCases: null,
    cases: null,
    todayRecovered: null,
    recovered: null,
    todayDeaths: null,
    deaths: null
  });
  const [countries, setCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCountries, setMapCountries] = useState([]); //[-74.5, 40]
  const [mapCenter, setMapCenter] = useState([-97.5684, 39.6105]);
  const [mapZoom, setMapZoom] = useState(0);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then(response => response.json())
      .then(data => setCountryInfo(data));
  }, []);

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
          setMapCountries(data);
          setTableData(sortedData);
          setMapCenter([-97.5684, 39.6105]);
          setMapZoom(2.39);
          setCasesType('cases');
        })
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (e: any) => {
    // const countryCode = e.target.value;
    const countryCode = e.target.value;
    const url = 
      countryCode === 'worldwide'
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        setCountry(countryCode);
        setCountryName(countryCode.charAt(0).toUpperCase() + countryCode.slice(1));
        setCountryInfo(data);
      });
  }

  return (
    <div className="rootApp">
      <GlobalStyle />
      <TopNav />
      <Grid container className="mainApp">
        <Grid item sm={6}>
          <Header country={country} countries={countries} setCountry={onCountryChange} />
          <div className="infoBoxes">
            <InfoBox
              onClick={() => {}}
              title="COVID Cases"
              isRed
              active={true}
              cases={prettyPrintStat(countryInfo.todayCases)}
              total={prettyPrintStat(countryInfo.cases)}
            />
            <InfoBox
              onClick={() => {}}
              title="Recovered"
              active={false}
              cases={prettyPrintStat(countryInfo.todayRecovered)}
              total={prettyPrintStat(countryInfo.recovered)}
            />
            <InfoBox
              onClick={() => {}}
              title="Deaths"
              isRed
              active={false}
              cases={prettyPrintStat(countryInfo.todayDeaths)}
              total={prettyPrintStat(countryInfo.deaths)}
            />
          </div>
          <MapB
            countries={mapCountries}
            casesType={casesType}
            center={mapCenter}
            zoom={mapZoom}
          />
        </Grid>
        <Grid
          item 
          sm={6}
          className={'caseStats'}
        >
          <CaseStatsCard countries={tableData} />
          <CaseLineGraph country={countryName} casesType={casesType} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
