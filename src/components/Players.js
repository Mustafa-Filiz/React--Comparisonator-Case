import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Stats from './Stats';
import { useParams } from 'react-router';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import { CircularProgress, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FavoriteRounded } from '@mui/icons-material';
import { Box } from '@mui/system';
import { circleColor, calculateAge, flagArrange } from '../utils/functions';
import { AppContext } from '../context/AppContext';

const useStyles = makeStyles((theme) => {
    return {
        container: {
            margin: 'auto',
            maxWidth: '1370px',
        },
        accordion: {
            width: '95%',
            '& .MuiAccordionSummary-content': {
                justifyContent: 'space-evenly',
                alignItems: 'center',
            },
        },
        avatar: {
            width: '5rem !important',
            height: '5rem !important',
            marginRight: '1rem',
        },
        flagContainer: {
            width: '5%',
            height: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginRight: '1rem',
        },
        name: {
            width: '40%',
        },
        age: {
            width: '15%',
        },
        foot: {
            width: '15%',
        },
    };
});

function Players() {
    const { id } = useParams();
    const [players, setPlayers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const classes = useStyles();
    const { favourites, toggleFavourites } = useContext(AppContext);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`https://mock-foooty-api.herokuapp.com/teams/${id}/players`)
            .then((res) => setPlayers(res.data.players))
            .finally(setIsLoading(false));
    }, [id]);

    return (
        <Box className={classes.container}>
            <Typography variant="h2" className={classes.title}>
                Players
            </Typography>
            <List sx={{ width: '100%' }}>
                {isLoading && <CircularProgress />}
                {players.map((player) => {
                    const birthAlphaCode = flagArrange(
                        player.birthArea.alpha2code
                    );
                    const passportAlphaCode = flagArrange(
                        player.passportArea.alpha2code
                    );
                    return (
                        <ListItem key={player.id}>
                            <Accordion className={classes.accordion}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <ListItemAvatar>
                                        <Avatar
                                            className={classes.avatar}
                                            sx={{
                                                border: circleColor(
                                                    player.role.code3
                                                ),
                                            }}
                                            alt={player.shortname}
                                            src={player.image}
                                        />
                                    </ListItemAvatar>
                                    <Box className={classes.flagContainer}>
                                        <img
                                            src={`https://flagcdn.com/w20/${birthAlphaCode}.png`}
                                            width="20"
                                            alt="birthCountry"
                                        />
                                        <img
                                            src={`https://flagcdn.com/w20/${passportAlphaCode}.png`}
                                            width="20"
                                            alt="passportcountry"
                                        />
                                    </Box>
                                    <Typography className={classes.name}>
                                        {player.firstName} {player.middleName}{' '}
                                        {player.lastName}{' '}
                                    </Typography>
                                    <Typography className={classes.age}>
                                        Age : {calculateAge(player.birthDate)}
                                    </Typography>
                                    <Typography className={classes.foot}>
                                        Foot : {player.foot}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Stats id={player.id} />
                                </AccordionDetails>
                            </Accordion>
                            <IconButton
                                size="large"
                                onClick={() => toggleFavourites(player)}
                            >
                                <FavoriteRounded
                                    fontSize="large"
                                    color={
                                        favourites.find((favourite) => favourite.id === player.id)
                                            ? 'error'
                                            : 'action'
                                    }
                                />
                            </IconButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
}

export default Players;
