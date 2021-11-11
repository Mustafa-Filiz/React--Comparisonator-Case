import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardHeader, CardMedia, CircularProgress } from '@mui/material';
import { NavLink, useRouteMatch, Route } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Players from '../components/Players';

const useStyles = makeStyles((theme) => {
    return {
        cardContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            marginTop: '1rem',
        },
        card: {
			width: '7.5rem',
            height: '10rem',
            margin: '1rem',
			padding: "1.5rem",
			borderRadius : "0.5rem",
            textDecoration: 'none',
            color: '#2196F3',
        },
        cardActive: {
			backgroundColor :"#2196F3",
			color: "#fff",
        },
    };
});

function TeamsPlayers() {
    const classes = useStyles();
    const [teams, setTeams] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { url, path } = useRouteMatch();

    useEffect(() => {
        setIsLoading(true);
        axios
            .get('https://mock-foooty-api.herokuapp.com/teams')
            .then((res) => setTeams(res.data.teams))
            .finally(setIsLoading(false));
    }, []);

    return (
        <Box>
            <Box className={classes.cardContainer}>
                {isLoading && <CircularProgress />}
                {teams.map((team) => (
                        <NavLink
                            to={`${url}${team.id}`}
                            className={classes.card}
							exact
                            activeClassName={classes.cardActive}
							key={team.id}
                        >
                            <CardMedia
                                className={classes.image}
                                component="img"
                                image={team.icon}
                            />
                            <CardHeader
                                titleTypographyProps={{ fontSize: '1.1rem' }}
                                title={team.name}
                            />
                        </NavLink>
                ))}
            </Box>
            <Route path={`${path}:id`} component={Players} />
        </Box>
    );
}

export default TeamsPlayers;
