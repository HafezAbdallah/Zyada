import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';

import { makeStyles } from '@mui/styles';
import MenuItem from '@mui/material/MenuItem';
import { useEffect } from 'react';
import { useState } from 'react';
import CountryBox from './CountryBox';

const useStyles = makeStyles({
    container:{
        display:'flex',
        justifyContent:'space-between',
        gap:20
    },
    searchBar:{
      backgroundColor:'hsl(0, 0%, 100%);',
      width:500,
      '& fieldset':{
        borderColor:'hsl(0, 0%, 100%);',
      },
      },
      regions:{
        backgroundColor:'hsl(0, 0%, 100%);',
        width:200,
        '& fieldset':{
          borderColor:'hsl(0, 0%, 100%);',
        }
        },
        countryContainer:{   
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 375px)',
        gridColumnGap: '100px',
        gridRowGap: '100px'
    }
  });
const  regions=[{
    value: 'Asia',
    label: 'Asia',
  },
  {
    value: 'Americas',
    label: 'Americas',
  },
  {
    value: 'Europe',
    label: 'Europe',
  },
  {
    value: 'Oceania',
    label: 'Oceania',
  },
  {
    value: 'Africa',
    label: 'Africa',
  },]
const CountriesList=(props)=>{

    const classes=useStyles();
    const [countries,setCountries]=useState([]);
    const [filteredCountries,setFilteredCountries]=useState([]);
    const [region,setRegion]=useState("");
    useEffect(()=>{

        fetch('https://restcountries.com/v3.1/all').then((data)=>data.json()).then((result)=>{

            setCountries(result);
            setFilteredCountries(result);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    const filterCountriesByRegion=(region)=>{
        setRegion(region);
       let filteredCountries= countries.filter((country)=>country.region===region);
       setFilteredCountries(filteredCountries);
    }
    const filterCountriesByName=(searchValue)=>{
    
        let filteredCountries= countries.filter((country)=>country.name.official.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredCountries(filteredCountries);

    }
    return(
        <>
        <div className={classes.container}>
             <TextField
                className={classes.searchBar}
                placeholder="Search for a Country"
                InputProps={{
                    startAdornment: (          
                        <SearchIcon  style={{marginRight:5}}/>           
                    ),
                    }}
                variant="outlined"
                onChange={(event)=>filterCountriesByName(event.target.value)}
            />
       <TextField
            className={classes.regions}
            id="outlined-select-currency"
            select
            label="Filter By Region"
            value={region}
            onChange={(event)=>{filterCountriesByRegion(event.target.value)}}
        >
          {regions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>

        <div className={classes.countryContainer }>
            {filteredCountries.map((country)=>{
                return <CountryBox country={country} key={country.name.official}/>
            })}

        </div>
        </>
    )
}
export default CountriesList;