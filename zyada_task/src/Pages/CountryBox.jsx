
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { TextField, Typography } from '@mui/material';

import { makeStyles } from '@mui/styles';
import MenuItem from '@mui/material/MenuItem';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  box:{
      display:'flex',
      flexWrap:'wrap',
      backgroundColor:'hsl(0, 0%, 100%);',
      borderRadius:5,
      marginTop:50,
      cursor:'pointer',
      '& p':{
        marginLeft:'20px',
    //  textAlign:'center'
        width:'100%'
      }
  },
  flag:{
      width:'100%',
      height:'50%',
      borderRadius:5,
      marginBottom:40,
  }
  });
const  CountryBox=(props)=>{
    const classes=useStyles();
    const history=useHistory();

    return(
    <div className={classes.box}onClick={()=>history.push('/details',props.country)}>
        <img
         src={props.country.flags.png}
            className={classes.flag}
        ></img>
        <Typography fontWeight={'600'} fontSize={16} style={{marginBottom:10}} > {props.country.name.official}</Typography>

        <Typography fontWeight={'300'} fontSize={14} > <b>Population </b>: {props.country.population}</Typography>
        <Typography fontWeight={'300'} fontSize={14} > <b>Region </b>: {props.country.region}</Typography>
        <Typography fontWeight={'300'} fontSize={14} style={{marginBottom:20}}  > <b>Capital </b>: {props.country.capital}</Typography>

        



    </div>
    )
}

export default CountryBox;