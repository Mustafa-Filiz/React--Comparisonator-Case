import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { CircularProgress } from '@mui/material';


function Players() {
    const { id } = useParams();
    const [players, setPlayers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`https://mock-foooty-api.herokuapp.com/teams/${id}/players`)
            .then((res) => setPlayers(res.data.players))
            .finally(setIsLoading(false));
    }, [id]);

    return (
        <List
            dense
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
			{isLoading && <CircularProgress />}
            {players?.map((player) => {
                const labelId = `checkbox-list-secondary-label-${player.id}`;
                return (
                    <ListItem
                        key={player.id}
                        // secondaryAction={
                        // }
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    alt={player.shortname}
                                    src={player.image}
                                />
                            </ListItemAvatar>
                            <ListItemText
                                id={labelId}
                                primary={`${player.firstName} ${player.middleName} ${player.lastName} `}
                            />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default Players;
