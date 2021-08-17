import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import marvel_background from '../../assets/images/wp2436369-marvel-cinematic-universe-wallpapers.jpg';



interface Props{
    title:string;
}

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    logo:{
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'white'
    },
    logo_navigation: {
        listStyle: 'none',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'white',
        textDecoration: 'none'
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${marvel_background});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '12%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    },
    subTitle:{
        marginTop: '3vh',
        marginBottom: '3vh'
    }
})


export const Home = (props:Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={classes.logo}>
                        <Link to='/' className={`${classes.logo_a} ${classes.logo_navigation}`}>The unOfficial Marvel Heroes</Link>
                    </h1>
                    <ul className={`${classes.navigation} ${classes.logo_navigation}`}>
                        <li>
                            <Link to='/' className={classes.nav_a}>MARVEL Home</Link>
                        </li>
                        <li>
                            <Link to='/signin' className={classes.nav_a}>Sign In</Link>
                        </li>
                        <li>
                            <Link to='/dashboard' className={classes.nav_a}>Dashboard</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1>{props.title}</h1>
                    <p className={classes.subTitle}>Let's Get MARVELous</p>
                    <Button variant="outlined" color="secondary">MARVEL Time</Button>
                </div>
            </main>
        </div>
    )
}