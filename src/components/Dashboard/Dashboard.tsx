import React from 'react'
import Header from '../header/NavHeader'
import { makeStyles } from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import background from '../../assets/images/background.svg'
import Footer from '../footer/Footer'
import {useAppSelector} from '../../app/hooks'
import {selectStateValues} from '../../app/auth-redux/authSlice'

const Dashboard:React.FC = () => {

const {userData} = useAppSelector(selectStateValues)
 const classes = useStyles()


    return (
        <>
            <img src={background} className={classes.bkimage} alt="circular"/>
            <Header />
            <Typography variant="h3" className={classes.handler}>
                <Typography className={classes.name}>Welcome back, {userData.first_name}</Typography>
                {/* <Box className={classes.buttons}>
                    <ClockInModal openCi={openCi} setOpenCi={setOpenCi} openCo={openCo} setOpenCo={setOpenCo} name={`${userData.first_name} ${userData.last_name}`}/>
                    <Button onClick={()=>showModal('clockIn')} className={classes.check} style={{backgroundColor:'#02C12C'}} variant="contained" color="secondary">
                        Clock in
                    </Button> 
                    <Button onClick={()=>showModal('clockOut')}   className={classes.check} style={{backgroundColor:'#C5C1D1',marginLeft:'10px'}} variant="contained" color="secondary">
                        Clock out
                    </Button> 
                </Box>      */}
            </Typography>
            <Footer/>           
        </>
    )
}

const useStyles = makeStyles((theme) => ({

    bkimage:{
        position:"absolute",
        top:0,
        right:0,
        width:"27%",
    },
    hours:{
        display:'flex',
        justifyContent:'space-between',
        padding:"0rem 4rem",
        [theme.breakpoints.down("sm")]: {
        padding: "0rem 2rem",
      },
    },
    handler:{
        padding:"0rem 4rem",
        marginBottom:'7rem',
        [theme.breakpoints.down("xs")]: {
            padding: "0rem 1.5rem",
          }
    },
    text:{
        [theme.breakpoints.down("xs")]: {
            fontSize: "12px",
          } 
    },
    check:{
        width:'13rem',
        padding:'.8rem 0',
        fontSize:'11px',
        textTransform:"capitalize",
    },
    name: {
        fontSize:"17px",
        marginTop:"3rem",
        fontWeight:'bold',
        wordSpacing:'2px'
    },
    buttons:{
        marginTop:'3rem',
        display:"flex",
        justifyContent:"center",
        color:"#fff",
        // [theme.breakpoints.down("sm")]: {
        //     justifyContent:'left',
        //   }
    }

}))

export default Dashboard