import {  Typography } from "@mui/material";
import React from "react";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
//import { makeStyles } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    header:{
        backgroundColor: 'hsl(0, 0%, 100%)',
        height: 50,
        position:'sticky',
        top:0,      
        paddingTop: 20,
        paddingLeft: 50,
        paddingRight:20,
        display:'flex',
        justifyContent:'space-between'
      },
      darkMode:{
        display:'flex',
        cursor:'pointer'
      }
  });
const Header=()=>{
    const classes=useStyles();
    return(
        <div className={classes.header}>
            <Typography  fontWeight={600}  align="left"> Where in the world?</Typography>
            <div className={classes.darkMode}>
                <DarkModeOutlinedIcon style={{marginRight:5}}/>
                <Typography fontWeight={400}>Dark Mode</Typography>
            </div>
            </div>
)
}
export default Header;