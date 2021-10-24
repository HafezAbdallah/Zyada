import { useHistory,useLocation } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { TextField, Typography } from '@mui/material';

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
   backBtn:{
       backgroundColor:'hsl(0, 0%, 100%) !important',
       borderColor:'hsl(0, 0%, 100%) !important',
       borderRadius:'5px !important',
       color:'black !important',
       marginBottom:'100px !important',
       width:120
   },
   countryBtn:{
    backgroundColor:'hsl(0, 0%, 100%) !important',
    borderColor:'hsl(0, 0%, 100%) !important',
    borderRadius:'5px !important',
    color:'black !important',
    marginRight:'10px !important'
    
},
   detailsSection:{
    display: 'grid',
    gridGap: 100,
    gridTemplateColumns: 'repeat(auto-fill, minmax(275px,550px))',
       height:300
   },
   countryInfo:{
    display: 'grid',
    gridGap: '15%',
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px,225px))',
    '& p':{
        marginBottom:10,marginTop:10
    }
   }
    });
const CountryDetails=()=>{
    const history=useHistory();
    const country=history.location.state;
    const classes=useStyles();
    const getCurrencies=()=>{
        let result=""
        for(let item in country.currencies){
           result+=country.currencies[item].name+',';
        }
        return result;
    }
    const getLanguages=()=>{
        let result=""
        for(let item in country.languages){
           result+=country.languages[item]+',';
        }
        return result;
    }
    const getNativeName=()=>{
        for(let item in country.name.nativeName){
            return  country.name.nativeName[item].official;
         }
    }
        return(
            <div>
            <Button
             variant="outlined" 
             startIcon={<ArrowBack />} 
             className={classes.backBtn}
             onClick={()=>history.push('/',{})}
             >
                    Back
            </Button>
            <div className={classes.detailsSection}>  
                <div style={{}}>
                    <img
                    src={country.flags.png}
                    style={{height:'100%',width:'100%'}}
                />
                </div>
                <div >
                    <Typography fontWeight={'800'} fontSize={16} style={{marginBottom:10,marginTop:10}} > {country.name.official}</Typography>
                    <div className={classes.countryInfo}> 
                        <div>
                        <Typography  fontSize={14}> <b>Native Name: </b>{getNativeName()}</Typography>
                        <Typography  fontSize={14}> <b>Population: </b>{country.population}</Typography>
                        <Typography  fontSize={14}> <b>Region: </b>{country.region}</Typography>
                        <Typography  fontSize={14}> <b>Sub Region: </b>{country.subregion}</Typography>
                        <Typography  fontSize={14}> <b>Capital: </b>{country.capital}</Typography>

                        </div>
                    <div>
                        <Typography  fontSize={14} style={{marginBottom:10,marginTop:10}} > <b>Top Level Domain: </b>{country.tld}</Typography>
                        <Typography  fontSize={14} style={{marginBottom:10,marginTop:10}} > <b>Currencies: </b>{getCurrencies()}</Typography>
                        <Typography  fontSize={14} style={{marginBottom:10,marginTop:10}} > <b>Languages: </b>{getLanguages()}</Typography>

                    </div>
                    
                </div>
                <Typography fontSize={14} style={{marginTop:40,width:'100%'}} > <b>Border Countries: </b>
                    {country.borders?.map((border)=>{
                        return <Button
                        variant="outlined" 
                       
                        className={classes.countryBtn}
                        
                        >
                              {border}
                       </Button>
                    })}
                    </Typography>

                </div>
            </div>
            </div>
        )
}
export default CountryDetails;