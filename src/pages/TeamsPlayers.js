import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { CardMedia, CircularProgress, Typography } from '@mui/material';
import { NavLink, useRouteMatch, Route } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Players from '../components/Players';

const useStyles = makeStyles((theme) => {
    return {
        container: {
            margin: 'auto',
            maxWidth: '1370px',
        },
        title: {
            fontWeight: '600 !important',
            margin: '1rem 8rem !important',
        },
        cardContainer: {
            width: '90%',
            margin: 'auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            marginTop: '1rem',
        },
        card: {
            width: '5rem',
            height: '8rem',
            margin: '1.5rem',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            color: '#2196F3',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        image: {
            width: '5rem !important',
            marginBottom: '0.8rem',
        },
        teamName: {
            fontSize: '1rem !important',
        },
        cardActive: {
            backgroundColor: '#2196F3',
            color: '#fff',
        },
        listContainer: {
            margin: '2rem auto',
            width: '85%',
        },
    };
});

function TeamsPlayers() {
    const classes = useStyles();
    const [teams, setTeams] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { url, path } = useRouteMatch();
    const playerRef = useRef()


    useEffect(() => {
        setIsLoading(true);
        axios
            .get('https://mock-foooty-api.herokuapp.com/teams')
            .then((res) => setTeams(res.data.teams))
            .finally(setIsLoading(false));
    }, []);

    const scrollPlayers = () => {
        playerRef.current.scrollIntoView({behavior:"smooth", block:"start"})
    }
    

    return (
        <Box className={classes.container}>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <>
                    <Typography variant="h2" className={classes.title}>
                        Teams
                    </Typography>
                    <Box className={classes.cardContainer}>
                        {teams.map((team) => (
                            <NavLink
                                to={`${url}${team.id}`}
                                className={classes.card}
                                activeClassName={classes.cardActive}
                                key={team.id}
                                onClick={scrollPlayers}
                            >
                                <CardMedia
                                    className={classes.image}
                                    component="img"
                                    image={team.icon}
                                />
                                <Typography className={classes.teamName}>
                                    {team.name}
                                </Typography>
                            </NavLink>
                        ))}
                    </Box>
                    <Box className={classes.listContainer} ref={playerRef}>
                        <Route path={`${path}:id`} component={Players} />
                    </Box>
                </>
            )}
        </Box>
    );
}

export default TeamsPlayers;
