import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { CircularProgress, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FavoriteRounded } from '@mui/icons-material';
import { Box } from '@mui/system';
import { circleColor, calculateAge, flagArrange } from '../utils/functions';

const useStyles = makeStyles((theme) => {
    return {
        listItem:{
            // display: "flex",
            justifyContent:"space-around !important"
        },
        avatar: {
            width: '5rem !important',
            height: '5rem !important',
            marginRight: '1rem',
        },
        flagContainer: {
            width: "5%",
            height: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginRight: '1rem',
        },
        name:{
            width: "40%",
        },
        age:{
            width: "15%",
        },
        foot:{
            width: "15%",
        },
    };
});

function Players() {
    const { id } = useParams();
    const [players, setPlayers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const classes = useStyles();
    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`https://mock-foooty-api.herokuapp.com/teams/${id}/players`)
            .then((res) => setPlayers(res.data.players))
            .finally(setIsLoading(false));
    }, [id]);

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {isLoading && <CircularProgress />}
            {players?.map((player) => {
                const birthAlphaCode = flagArrange(player.birthArea.alpha2code)
                const passportAlphaCode = flagArrange(player.passportArea.alpha2code)
                return (
                    <ListItem
                        key={player.id}
                        secondaryAction={
                            <IconButton size="large">
                                <FavoriteRounded fontSize="large" />
                            </IconButton>
                        }
                        disablePadding
                    >
                        <ListItemButton className={classes.listItem}>
                            <ListItemAvatar>
                                <Avatar
                                    className={classes.avatar}
                                    sx={{
                                        border: circleColor(player.role.code3),
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
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default Players;
